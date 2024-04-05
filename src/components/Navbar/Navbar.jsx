import React, { useState } from "react";
import hackofest from "../../assets/hackofest.png";
import AboutUS from "../AboutUS/About";
import discord from "../../assets/discord.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center relative">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <Link to="/">
                <img src={hackofest} alt="" className="w-56" />
              </Link>
            </div>
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-2xl focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.771 5.771a1 1 0 0 1 1.414 0l5.586 5.586 5.586-5.586a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6zm0 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div
              className={`absolute top-full rounded-xl  w-50% right-0 bg-black/10 bg-violet-300 backdrop-blur-sm py-4 sm:hidden ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex p-4 flex-col items-center">
                <li className="p-1 hover:bg-white text-white  px-3 font-bold ">
                  <Link to="/about" onClick={toggleMenu}>
                    About US
                  </Link>
                </li>
                <li className="p-1 hover:bg-white text-white  px-3 font-bold ">
                  <Link to="/timeline" onClick={toggleMenu}>
                    TimeLine
                  </Link>
                </li>
                <li className="p-1 hover:bg-white text-white   px-3 font-bold ">
                  <Link to="/rules" onClick={toggleMenu}>
                    Rules
                  </Link>
                </li>
                <li className="p-1 hover:bg-white text-white   px-3 font-bold ">
                  <Link to="/sponsors" onClick={toggleMenu}>
                    Sponsors
                  </Link>
                </li>
                <li className="p-1  hover:bg-white text-white px-3 font-bold ">
                  <Link to="/prize" onClick={toggleMenu}>
                    Prize
                  </Link>
                </li>
                <li className="p-1 hover:bg-white text-white  px-3 font-bold ">
                  <Link to="/team" onClick={toggleMenu}>
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden sm:block">
              <ul className="flex items-center gap-6 text-xl font-bold py-4">
                <li className="hover:text-violet-600 hover:bg-white text-white hover:rounded-3xl px-3 font-bold ">
                  <Link to="/about">About US</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white text-white hover:rounded-3xl px-3 font-bold ">
                  <Link to="/timeline">TimeLine</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white text-white hover:rounded-3xl px-3 font-bold ">
                  <Link to="/rules">Rules</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white text-white hover:rounded-3xl px-3 font-bold ">
                  <Link to="/sponsors">Sponsors</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white text-white hover:rounded-3xl px-3 font-bold ">
                  <Link to="/prize">Prize</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white text-white hover:rounded-3xl px-3 font-bold ">
                  <Link to="/themes">Themes</Link>
                </li>
                <li className="hover:text-violet-600 hover:bg-white text-white hover:rounded-3xl px-3 font-bold ">
                  <Link to="/team">Team</Link>
                </li>
              </ul>
            </div>
            <div className="float-right">
              <a
                href="https://discord.gg/SMRCb8vf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={discord}
                  className="w-20 h-12 rounded-full"
                  alt="Discord Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
