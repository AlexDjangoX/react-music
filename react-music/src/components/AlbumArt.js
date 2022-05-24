import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Loading, Grid } from "@nextui-org/react";
import "./AlbumArt.css";

const AlbumArt = ({ appData }) => {
  const [albumArt, setAlbumArt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      <Header />
      <div className="search-bar-left">
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
          albumArt.album.map((item) => (
            <li>
              <figcaption>
                <p>
                  <strong>
                    {" "}
                    <em>{item.strAlbumStripped.slice(0, 16)}</em>
                  </strong>
                </p>
              </figcaption>
              <img
                src={item.strAlbumThumb}
                alt={item.strArtistStripped}
                width="100%"
                height="100%"
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default AlbumArt;
