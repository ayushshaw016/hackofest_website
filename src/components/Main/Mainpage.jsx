import React from "react";
import Hero from "../Hero/Hero";
import HeroCard from "../HeroCard/HeroCard";
import Rapidscat from "../Rapidscat/Rapidscat";
import Satelite from "../Satelite/Satelite";
import ContactUS from "../Contact US/ContactUS";
import Crousel from "../reusable/Crousel";
const Main = () => {
  return (
    <>
      <Hero />
      <HeroCard />
      <Crousel />
      <Rapidscat />
      <Satelite />
      <ContactUS />
    </>
  );
};
export default Main;
