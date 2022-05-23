import React, { useState } from "react";
import "./Main.css";
import Header from "./Header";
import Search from "./Search";

const Main = () => {
  const [dataToRender, setDataToRender] = useState();

  const getDataToRender = (data) => {
    setDataToRender(data);
  };

  return (
    <>
      <Header />
      <Search getDataToRender={getDataToRender} />
      {dataToRender && (
        <div>
          <div className="image-container">
            <img
              src={dataToRender.artists[0].strArtistThumb}
              alt={dataToRender.artists[0].strArtist}
            />
          </div>
          <div className="image-container">
            <img
              src={dataToRender.artists[0].strArtistLogo}
              alt={dataToRender.artists[0].strArtist}
            />
          </div>
          <p>{dataToRender.artists[0].strBiographyEN}</p>

          <p>{dataToRender.artists[0].strLastFMChart}</p>
        </div>
      )}
    </>
  );
};

export default Main;
