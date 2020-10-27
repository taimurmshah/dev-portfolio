import React from "react";
import { Ul } from "./RightNav.elements";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About</li>
      <li>Projects</li>
      <li>Blog</li>
    </Ul>
  );
};

export default RightNav;
