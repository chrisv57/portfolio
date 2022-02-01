import React from "react";

import { Header, Projects, Aboutme, Education, Footer } from "./containers";
import { Navbar,Contactme } from "./components";

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
        <Contactme />
        <Footer />
    </div>
  );
};

export default App;
