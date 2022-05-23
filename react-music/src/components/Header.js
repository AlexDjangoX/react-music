import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Button, Checkbox, Spacer } from "@nextui-org/react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="left-nav">
        <Checkbox color="success" labelColor="primary" defaultSelected={true}>
          Primary
        </Checkbox>
        <Spacer />
        <Checkbox color="success" labelColor="secondary" defaultSelected={true}>
          Secondary
        </Checkbox>
        <Spacer />
        <Checkbox color="success" labelColor="success" defaultSelected={true}>
          Success
        </Checkbox>
        <Spacer />
      </div>
      <div className="main-heading">
        <h1>Love Music App</h1>
        <p>For those who remember vinyl</p>
      </div>
      <div className="right-nav">
        <Button color="black">
          <Link to="/favorites">Favorites</Link>
        </Button>
        <Spacer y={0.5} />
        <Button color="black">Medium</Button>
        <Spacer y={0.5} />
        <Button color="black">Medium</Button>
        <Spacer y={0.5} />
      </div>
    </div>
  );
};

export default Header;
