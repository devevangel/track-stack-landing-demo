import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import TPortWhite from "../assets/tport_white.svg";
import BoothWhite from "../assets/booth_white.svg";
import GalleyWhite from "../assets/galley_white.svg";
import YardWhite from "../assets/yard_white.svg";

const Products = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom`,
          end: () => `top top`,
          scrub: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center",
        pin: true,
        pinSpacing: false,
        id: "pin",
        end: "max",
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <section className="mt-10 h-fit w-full">
      <div className="w-full h-full pl-20 pr-20 flex flex-col items-center">
        <div className="font-russo text-4xl">Our Products</div>
        <div className="font-work text-lg">
          Marketplace, T-port, Track Booth, Track Yard and Galley- all in one
          place
        </div>
        <div className="flex flex-col space-y-14 mt-9">
          <div className="card bg-slate-50 h-100 w-100  shadow-md border rounded flex flex-col items-center space-y-6">
            <div className="font-russo text-center text-2xl mt-5">
              Marketplace
            </div>
            <div className="font-work text-lg text-center">
              A customizable Music NFT marketplace that promises the best user
              experience.
            </div>
            <div className="p-3 w-40 h-12 text-2xl font-bold font-work border-3 border-gray-300 align-middle flex items-center justify-center">
              In Progress
            </div>
            <div>
              <Image src={TPortWhite} width={300} height={250} />
            </div>
          </div>
          <div className="card bg-slate-50 h-100 w-100  shadow-md border rounded flex flex-col items-center space-y-6">
            <div className="font-russo text-center text-2xl mt-5">T-Port</div>
            <div className="font-work text-lg text-center">
              Mint and release your Music NFTs on our Launchpad and be entitled
              to free advertising on our homepage.
            </div>
            <div className="p-3 w-40 h-12 text-2xl font-bold font-work border-3 border-gray-300 align-middle flex items-center justify-center">
              In Progress
            </div>
            <div>
              <Image src={TPortWhite} width={300} height={250} />
            </div>
          </div>
          <div className="card bg-slate-50 h-100 w-100  shadow-md border rounded flex flex-col items-center space-y-6">
            <div className="font-russo text-center text-2xl mt-5">
              Track Booth
            </div>
            <div className="font-work text-lg text-center">
              Host a virtual group listening party by streaming your favorite
              tracks to your friends
            </div>
            <div className="p-3 w-40 h-12 text-2xl font-bold font-work border-3 border-gray-300 align-middle flex items-center justify-center">
              In Progress
            </div>
            <div>
              <Image src={BoothWhite} width={300} height={250} />
            </div>
          </div>
          <div className="card bg-slate-50 h-100 w-100  shadow-md border rounded flex flex-col items-center space-y-6">
            <div className="font-russo text-center text-2xl mt-5">Galley</div>
            <div className="font-work text-lg text-center">
              Work spaces for producers in Web3 to create different beats and
              sounds while engaging on the platform.
            </div>
            <div className="p-3 w-40 h-12 text-2xl font-bold font-work border-3 border-gray-300 align-middle flex items-center justify-center">
              In Progress
            </div>
            <div>
              <Image src={GalleyWhite} width={300} height={250} />
            </div>
          </div>
          <div className="card bg-slate-50 h-100 w-100  shadow-md border rounded flex flex-col items-center space-y-6 mb-56">
            <div className="font-russo text-center text-2xl mt-5">
              Track Yard
            </div>
            <div className="font-work text-lg text-center">
              An exclusive community section that aims to bridge the gap between
              artists and fans and foster support
            </div>
            <div className="p-3 w-40 h-12 text-2xl font-bold font-work border-3 border-gray-300 align-middle flex items-center justify-center">
              In Progress
            </div>
            <div>
              <Image src={YardWhite} width={300} height={250} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
