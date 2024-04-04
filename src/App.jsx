import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUS from "./components/AboutUS/About.jsx";
import Rules from "./components/Rules/Rules.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import Team from "./components/Team/Team.jsx";
import ContactUS from "./components/Contact US/ContactUS.jsx";
import bgVideo from "./assets/newbg.mp4";
import Timeline from "./components/Timeline/Timeline.jsx";
import Main from "./components/Main/Mainpage.jsx";
import Prizes from "./components/Prizes/Prizes.jsx";
import Themes from "./components/Theme/Themes.jsx";
import { useState } from "react";
import Loading from "./components/loading.jsx";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  React.useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="">
        <div className="h-screen">
          <video
            autoPlay
            loop
            muted
            className="fixed right-0 top-0 h-screen w-full object-cover z-[-1]"
          >
            <source src={bgVideo} type="video/mp4" className="opacity-10" />
          </video>
          <Navbar />
          <div className="min-h-screen">
          <Routes className="">
            
            <Route path="/" element={<Main />} />
            <Route path="/hero-card" element={<HeroCard />} />
            <Route path="/rapidscat" element={<Rapidscat />} />
            <Route path="/satelite" element={<Satelite />} />
            <Route path="/about" element={<AboutUS />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/prize" element={<Prizes />} />
            <Route path="/timeline" element={<Timeline />} />
          {/* <Route path="/themes" element = {<Timeline />} /> */}
          
        </Routes>
          </div>
          {/* Add Footer or Footer5 here based on your requirements */}
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
