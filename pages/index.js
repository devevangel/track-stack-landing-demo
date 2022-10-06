import React from "react";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Question from "../components/Question";
import Products from "../components/Products";
import About from "../components/About";

const Home = () => {
  return (
    <div className="w-full h-full">
      <NavBar />
      <Intro />
      <Question />
      <Products />
      <About />
    </div>
  );
};

export default Home;
