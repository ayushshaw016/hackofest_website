import React from "react";
import logo from "../../assets/hackofest.png"
import discord from "../../assets/discord.jpg"
const Footer = () => {
  return (
    <div className="bg-[#7e2b86] text-white mt-16 p-4 lg:p-0 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <img src={logo} className="w-1/2 h-1/2 lg:w-1/8 lg:h-1/8 mx-4 my-2 lg:my-0 lg:mx-0" alt="Logo"/>
      <a href="https://drive.google.com/file/d/1Pee-ww9L1cuQPQl4huAjCNo-Q7w-yNZd/view?usp=sharing" target="_blank"  className="text-center text-2xl font-bold lg:mt-2 inline-block py-4">
        Terms and Conditions
      </a>
    </div>
    <div className="text-center font-bold text-xl lg:mt-4">&copy; 2024 HackO'Fest || All Rights Reserved</div>
  </div>
  


  );
};

export default Footer;
