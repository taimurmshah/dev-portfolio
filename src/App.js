import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Footer />
    </div>
  );
};

export default App;
