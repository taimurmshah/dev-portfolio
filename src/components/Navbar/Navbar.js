import React from "react";
import Burger from "./Burger";
import { Nav } from "./Navbar.elements";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Logo</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
