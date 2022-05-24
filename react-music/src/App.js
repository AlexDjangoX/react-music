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

  const liftDataToApp = (data) => {
    setAppData(data);
  };

  if (appData) console.log("20...", appData.artists[0].idArtist);

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Main liftDataToApp={liftDataToApp} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/album-arts" element={<AlbumArt appData={appData} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

// const [artisId, setArtistId] = useState(null);

//   const retrieveArtistId = (id) => {
//     setArtistId(id);
//   };
