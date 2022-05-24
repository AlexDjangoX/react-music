import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Favorites from "./components/Favorites";
import Main from "./components/Main";
import AlbumArt from "./components/AlbumArt";
import "./App.css";

function App() {
  const [appData, setAppData] = useState(null);
  const [favoriteAlbumArt, setFavoriteAlbumArt] = useState(null);

  const liftDataToApp = (data) => {
    setAppData(data);
  };

  const liftFavoriteAlbumArt = (data) => {
    setFavoriteAlbumArt(data);
  };

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Main liftDataToApp={liftDataToApp} />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteAlbumArt={favoriteAlbumArt}
                setFavoriteAlbumArt={setFavoriteAlbumArt}
              />
            }
          />
          <Route
            path="/album-arts"
            element={
              <AlbumArt
                appData={appData}
                liftFavoriteAlbumArt={liftFavoriteAlbumArt}
              />
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
