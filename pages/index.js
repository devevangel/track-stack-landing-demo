import React, { useState } from "react";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Question from "../components/Question";
import Products from "../components/Products";
import About from "../components/About";

const Home = () => {
  const [mode, setMode] = useState("light");

  return (
    <div className={`w-full h-full`}>
      <NavBar mode={mode} setMode={setMode} />
      <Intro />
      <Question />
      <Products />
      <About />
    </div>
  );
};

export default Home;
