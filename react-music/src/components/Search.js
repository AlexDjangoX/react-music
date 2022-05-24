import React, { useEffect, useState } from "react";
import { Loading, Grid } from "@nextui-org/react";
import useDebounce from "./hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search = ({ getDataToRender, liftDataToApp }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [appData, setAppData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [idArtist, setIdArtist] = useState("");

  const debouncedSearch = useDebounce(searchQuery, 1500);

  const inputChangeHandler = (event) => {
    const { value } = event.target;
    const formatValue = value.split(" ").join("_");
    setSearchQuery(formatValue);
  };

  useEffect(() => {
    setIsLoading(true);
    async function fetchDataFromApi(query) {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${query}`
      );
      const data = await response.json().catch((error) => console.log(error));
      if (data) {
        setAppData(data);
        getDataToRender(data);
        liftDataToApp(data);
        setIdArtist(data.artists[0].idArtist);
      }

      setIsLoading(false);
    }
    if (debouncedSearch) fetchDataFromApi(debouncedSearch);
  }, [debouncedSearch]);

  console.log(appData);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSearchQuery("");
  };

  return (
    <>
      <div className="search-bar-wrapper">
        <div className="search-bar-left">
          {isLoading && searchQuery && (
            <div className="left-search-bar">
              <Grid.Container gap={2}>
                <Grid>
                  <Loading color="success">Loading...</Loading>
                </Grid>
              </Grid.Container>
            </div>
          )}
        </div>
        <div className="search-bar">
          <form className="form" onSubmit={onSubmitHandler}>
            <input
              type="search"
              placeholder="Search"
              className="search-field"
              onChange={inputChangeHandler}
              value={searchQuery.split("_").join(" ")}
            />
            <button
              type="submit"
              className="search-button"
              onSubmit={onSubmitHandler}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="search-bar-right">
          {isLoading && searchQuery && (
            <div className="right-search-bar">
              <Grid.Container gap={2}>
                <Grid>
                  <Loading color="success">Loading...</Loading>
                </Grid>
              </Grid.Container>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
