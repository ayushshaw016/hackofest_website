import React from "react";
import logo from "../../assets/hackofest.png"
import { Link } from "react-router-dom";
import discord from "../../assets/discord.jpg"
const Footer = () => {
  return (
    <div className="bg-[#d5a6fc] text-white -mt-1 p-4 lg:p-0 lg:px-8 bg-opacity-40">
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
    <Link to="/">
                <img src={logo} alt="" className="lg:w-1/6 lg:h-1/6  w-1/2 h-1/4 mx-28 my-2 lg:my-0 lg:mx-0 " />
              </Link>
      <a href="https://drive.google.com/file/d/1Pee-ww9L1cuQPQl4huAjCNo-Q7w-yNZd/view?usp=sharing" target="_blank"  className="text-center text-2xl font-bold lg:mt-0 inline-block py-4">
        Rulebook
      </a>
    </div>
    <div className="text-center font-bold text-xl lg:mt-1">&copy; 2024 HackO'Fest || All Rights Reserved</div>
  </div>
  


  );
};

export default Footer;
