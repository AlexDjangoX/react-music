import React from "react";
import { Link } from "react-router-dom";
import { Button, Spacer } from "@nextui-org/react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="left-nav"></div>
      <div className="main-heading">
        <h1>Love Music App</h1>
        <p>For those who remember vinyl</p>
      </div>
      <div className="right-nav">
        <Button color="black">
          <Link to="/favorites">Favorites</Link>
        </Button>
        <Spacer y={0.5} />
        <Button color="black">
          <Link to="/album-arts">Album Art</Link>
        </Button>
        <Spacer y={0.5} />
        <Button color="black">
          <Link to="/">Back to Search</Link>
        </Button>
        <Spacer y={0.5} />
      </div>
    </div>
  );
};

export default Header;
