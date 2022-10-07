import React from "react";

import Button from "./Button";

const Intro = () => {
  return (
    <section className="w-full flex md:items-center md:justify-between flex-col items-center md:flex-row md:m-0 mt-10 px-16 space-y-20">
      <div className="md:w-1/2 h-full font-work flex flex-col justify-center">
        <div className="font-russo mb-5 md:text-7xl text-3xl">
          Because Audio
          <br /> NFTs Are The <br /> Future
        </div>
        <div className="text-sm mb-5">
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
