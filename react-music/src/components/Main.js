import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import "./Main.css";
import Header from "./Header";
import Search from "./Search";
import Modal from "./Modal";

const Main = ({ liftDataToApp }) => {
  const [dataToRender, setDataToRender] = useState(null);
  const [modal, setModal] = useState(false);

  const getDataToRender = (data) => {
    setDataToRender(data);
  };

  const toggleModal = () => {
    setModal((previous) => !previous);
  };

  return (
    <>
      <Header />
      <Search getDataToRender={getDataToRender} liftDataToApp={liftDataToApp} />
      {!dataToRender && (
        <div className="searching-for">
          <h3>Who are we searching for...</h3>
        </div>
      )}
      {dataToRender && dataToRender.artists !== null && (
        <>
          <div className="bio-button-wrapper">
            <div className="bio-button">
              <Button auto color="gray" rounded flat onPress={toggleModal}>
                Read Biography
              </Button>
            </div>
          </div>
          <div>
            <div className="image-container-logo">
              <img
                src={dataToRender.artists[0].strArtistLogo}
                alt={dataToRender.artists[0].strArtist}
              />
            </div>
            <div className="image-container">
              <img
                src={dataToRender.artists[0].strArtistThumb}
                alt={dataToRender.artists[0].strArtist}
              />
            </div>

            {modal && (
              <Modal toggleModal={toggleModal}>
                <div className="bio-button">
                  <Button auto color="black" rounded flat onPress={toggleModal}>
                    Close Biography
                  </Button>
                </div>
                <p>{dataToRender.artists[0].strBiographyEN}</p>
              </Modal>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Main;
