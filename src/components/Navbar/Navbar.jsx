import React from "react";
import hackofest from "../../assets/hackofest.png";
import AboutUS from "../AboutUS/About";
import discord from "../../assets/discord.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <Link to ="/">
                
              <img src={hackofest} alt="" className="w-56" />
              </Link>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl  font-bold py-4 ">
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <Link to="/about">About US</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <Link to="/timeline">TimeLine</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <Link to="/rules">Rules</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <Link to="/sponsors">Sponsors</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <Link to="/prize">Prize</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <Link to="/team">Team</Link>
                </li>
               
              </ul>
            </div>
            <div className="float-right">
              <a href="https://discord.gg/QmNc3R6Z" target="_blank">
                <img src={discord} className="w-20 h-12 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
