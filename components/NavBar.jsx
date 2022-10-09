import React, { useState } from "react";
import Image from "next/image";

import Button from "./Button";

import logo from "../assets/logo.svg";

const NavBar = ({ mode, setMode }) => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const handleSetMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <header className="w-full h-20 shadow sticky top-0 flex justify-between items-center px-14 bg-slate-50">
      <Image src={logo} height={65} width={150} />
      <nav>
        <button
          onClick={() => setShowMenuBar(!showMenuBar)}
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul
          className={`fixed left-0 right-0 min-h-screen bg-black space-y-4 p-4 transform ${
            showMenuBar ? "translate-x-0" : "translate-x-full"
          } md:translate-x-full`}
        >
          <li className="text-white">
            <button>Community</button>
          </li>
          <li className="text-white">
            <button>Resources</button>
          </li>
          <li className="text-white">
            <button>Join Waitlist</button>
          </li>
          <li className="text-white">
            <button>Light Mode</button>
          </li>
        </ul>
      </nav>
      <ul className="font-work relative space-x-6 hidden md:flex items-center">
        <li>
          <button className="font-semibold">Community</button>
        </li>
        <li>
          <button className="font-semibold">Resources</button>
        </li>
        <li>
          <button onClick={handleSetMode}>
            {mode === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </li>
        <li>
          <Button text={"Join Waitlist"} styles={"font-bold"} />
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
