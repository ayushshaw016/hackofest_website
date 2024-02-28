import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/earth-bg.mp4";
import bgVideo from "./assets/newbg.mp4";

import wave from "./assets/wave Gif.gif";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUS from "./components/AboutUS/About.jsx";
import Rules from "./components/Rules/Rules.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" className="opacity-10"/>
        </video>
        <Navbar />
        {/* <AboutUS/> */}
      <Rules/>
      {/* <Sponsors/> */}
      {/* <Footer5 /> */}
      {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
