import React from "react";
import Hero from "../Hero/Hero";
import HeroCard from "../HeroCard/HeroCard";
import Rapidscat from "../Rapidscat/Rapidscat";
import Satelite from "../Satelite/Satelite";
import ContactUS from "../Contact US/ContactUS";
import LeadCarousel from "../LeadCarousel/LeadCarousel";
const  Main = () =>{
    return(
    <>
<Hero/>
<HeroCard/>
<Rapidscat/>
<div className="pt-10">
    
<LeadCarousel/>
</div>
<Satelite/>
<ContactUS/>
    </>)
};
export default Main;