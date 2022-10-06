import React from "react";

import Image from "next/image";

import introimage from "../assets/introimage.svg";
import circlegradient from "../assets/circlegradient.svg";

const Intro = () => {
  return (
    <section className="w-full h-80 mt-14">
      <div className="pl-20 pr-20 w-full h-full flex">
        <div className="w-1/2 h-full font-work flex flex-col justify-center">
          <div className="font-russo text-7xl mb-5">
            Because Audio
            <br /> NFTs Are The <br /> Future
          </div>
          <div className="text-sm mb-5">
            Are You Ready To Join The Next Revolution?
          </div>
          <div className="font-bold">Join Waitlist</div>
        </div>
        <div className="w-1/2 h-full flex justify-end relative">
          <Image className="z-1" src={introimage} height={300} width={300} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
