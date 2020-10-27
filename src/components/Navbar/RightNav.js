import React from "react";
import { A, Span } from "../globalStyles";
import { Ul } from "./RightNav.elements";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About</li>

      <li>Projects</li>

      <li>
        <A
          href="https://medium.com/@taimurmshah"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </A>
      </li>
    </Ul>
  );
};

export default RightNav;
