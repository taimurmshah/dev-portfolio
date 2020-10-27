import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Intro />
      {/*<Footer />*/}
    </div>
  );
};

export default App;
