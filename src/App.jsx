import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
// import BgVideo from "./assets/earth-bg.mp4";
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
import newbg from "../src/assets/newbg.mp4"
import new_bg1 from "../src/assets/new_bg1.mp4";
// import new_bg2 from "../src/assets/new_bg2.mkv"
import Team from "./components/Team/Team.jsx";
import ContactUS from "./components/Contact US/ContactUS.jsx";

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
          className="fixed right-0 top-0 h-screen w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" className="opacity-10"/>
        </video>
        <Navbar />
        {/* <AboutUS/> */}
      {/* <Rules/>/ */}
        {/* yeh charo component jo hai wo ek sasth render hone chahiye as a main page in the sam serial */}
      {/* <Hero/>
      <HeroCard />
      <Rapidscat />
      <Satelite /> */}
      {/* <Sponsors/> */}
      {/* <Footer5 /> */}
      <Team/>
      {/* <ContactUS className= "m-3 p-3"/> */}
      <Footer />
      </div>
    </div>
  );
};

export default App;
