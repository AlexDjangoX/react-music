import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Button } from "@nextui-org/react";
import "./AlbumArt.css";

const Favorites = ({ favoriteAlbumArt, setFavoriteAlbumArt }) => {
  return (
    <>
      <Header />
      <div>
        {!favoriteAlbumArt && (
          <h3>
            Navigate Back to Search. Search for Artist. Select Album Art. Choose
            Favorites
          </h3>
        )}
      </div>
      <ul className="auto-fit-column">
        {favoriteAlbumArt &&
          favoriteAlbumArt.map((item, index) => (
            <>
              <li key={index} id={index}>
                <div className="figcaption-button">
                  <Button color="black" size="sm">
                    Delete
                  </Button>
                </div>
                <hr />
                <img
                  src={item}
                  alt={item.slice(0, 5)}
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

export default Favorites;
