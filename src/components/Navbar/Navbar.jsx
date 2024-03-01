import React from "react";
import hackofest  from "../../assets/hackofest.png";
import AboutUS from "../AboutUS/About";
import discord from "../../assets/discord.jpg"
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
              <img src={hackofest} alt="" className="w-56" />
              
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl  font-bold py-4 ">
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <a href="AboutUS" >About US</a>
                  {/* <Link to="/AboutUS">About US</Link> */}
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <a href="#" >TimeLine</a>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <a href="#">Rules</a>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <a href="#">Sponsors</a>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <a href="#">Team</a>
                </li>
                <li className="hover:text-violet-600 hover:bg-white hover:rounded-3xl px-3 font-bold hover:text-2xl">
                  <a href="#">Contact US</a>
                </li>
              </ul>
            </div>
            <div className="float-right">
              <a href="https://discord.com/channels/1205861084108554250/1205861085337620532"  target="_blank">

<img src={discord} className="w-20 h-12 rounded-full "/>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
