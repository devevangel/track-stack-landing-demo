import React from "react";

import Image from "next/image";

import logo from "../assets/logo.svg";
import sunny from "../assets/sunny.svg";

const NavBar = () => {
  return (
    <div className="w-full h-16 shadow-md sticky top-0 flex justify-between items-center">
      <div className="w-30 h-full ml-14">
        <Image src={logo} height={65} width={150} />
      </div>
      <div className="h-full w-fit mr-14 flex items-center font-work">
        <div className="mr-5 font-semibold">Community</div>
        <div className="mr-5 font-semibold">Resources</div>
        <div className="flex items-center w-fit">
          <Image className="ml-5" src={sunny} height={20} width={20} />
          <div className="ml-5 font-bold">Join Waitlist</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
