import React from "react";

import Button from "./Button";

const Intro = () => {
  return (
    <section className="w-full h-fit flex md:items-center md:justify-between flex-col items-center md:flex-row md:m-0 mt-10 md:px-16 px-5 space-y-20">
      <div className="md:w-1/2 h-full font-work flex flex-col justify-center items-center md:items-start">
        <div className="font-russo mb-5 md:text-7xl text-3xl w-full text-center md:text-left">
          Because Audio
          <br /> NFTs Are The <br /> Future
        </div>
        <div className="mb-5 text-lg">
          Are You Ready To Join The Next Revolution?
        </div>
        <Button text={"Join Waitlist"} styles={"font-bold"} />
      </div>

      <div className="md:w-80 md:h-96 w-64 h-80 border shadow-md rounded flex items-center justify-center">
        Hello
      </div>
    </section>
  );
};

export default Intro;
