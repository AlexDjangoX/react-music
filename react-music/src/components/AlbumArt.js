import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Loading, Grid, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./AlbumArt.css";

const AlbumArt = ({ appData, liftFavoriteAlbumArt }) => {
  const [albumArt, setAlbumArt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [youTubeUrl, setYouTubeUrl] = useState("");

  const updateFavoritesArray = (favorite) => {
    if (!favorites.includes(favorite))
      setFavorites(() => [...favorites, favorite]);
  };

  useEffect(() => {
    if (favorites) liftFavoriteAlbumArt(favorites);
  }, [favorites]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/523532/album.php?i=${appData.artists[0].idArtist}`
      );
      const data = await response.json().catch((error) => console.log(error));
      if (data) setAlbumArt(data);
    }
    if (appData) fetchData();
    setIsLoading(false);
  }, [appData]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/523532/mvid.php?i=${appData.artists[0].idArtist}`
      );
      const data = await response.json().catch((error) => console.log(error));
      if (data) setYouTubeUrl(data.mvids[0].strMusicVid);
    }

    if (appData) fetchData();
  }, [appData]);

  return (
    <>
      <Header />
      <div>
        {!albumArt && (
          <h3>Navigate Back to Search. Search for Artist. Select Album Art</h3>
        )}
        {isLoading && albumArt && (
          <div className="left-search-bar">
            <Grid.Container gap={2}>
              <Grid>
                <Loading color="success">Loading...</Loading>
              </Grid>
            </Grid.Container>
          </div>
        )}
      </div>
      <ul className="auto-fit-column">
        {albumArt &&
          albumArt.album.map((item, index) => (
            <>
              <li key={index}>
                <div className="figcaption-button">
                  <Button
                    color="black"
                    size="sm"
                    onClick={() => updateFavoritesArray(item.strAlbumThumb)}
                  >
                    Add to Favorites
                  </Button>
                  <a target="_blank" rel="noreferrer" href={youTubeUrl}>
                    <FontAwesomeIcon icon={faMusic} />
                  </a>

                  <figcaption>
                    <p>
                      <strong>
                        {" "}
                        <em>{item.strAlbumStripped.slice(0, 20)}</em>
                      </strong>
                    </p>
                  </figcaption>
                </div>
                <hr />
                <img
                  src={item.strAlbumThumb}
                  alt={item.strArtistStripped}
                  width="100%"
                  height="100%"
                />
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default AlbumArt;
