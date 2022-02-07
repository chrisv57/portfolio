import React from "react";

import { Header, Projects, Contactme, Education, Footer } from "./containers";
import { Navbar } from "./components";

import './App.css';

const App = () => {
  return (
    <div className="App gradient__bg">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Education />
        <Projects />
        <hr />
        <Contactme />
        <Footer />
    </div>
  );
};

export default App;
