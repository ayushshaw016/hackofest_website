import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ArchyGupta, Mahimahans, MansaiTakalkar, Mohtashamraza, PalakAwasthi, SaikiranSwargam, AbdulBasitQureshi,AkankshaSingh, PurshottomBhangui, JeevanPrakashSingh, KshitijJha, RahatRezaSulemani, PalakTanna} from "../../assets/SpeaekrsandJudges/index"
const Carousel = () => {
  const teamLeads = [
    { name: "Archy Gupta", position: "SDE-2", Company:"Adobe", imgSrc: ArchyGupta },
    { name: "Mahima Hans", position: "SDE-3", Company:"Mastercard",  imgSrc: Mahimahans},
    { name: "Mansai Takalkar", position: "SDE-3", Company:"F5",  imgSrc: MansaiTakalkar},
    { name: "Mohtasham Raza", position: "SDE-2", Company:"Google",  imgSrc: Mohtashamraza },
    { name: "Palak Awasthi",position: "SDE-2", Company:"Paypal", imgSrc: PalakAwasthi},
    { name: "Saikiran Swargam",position: "SDE-2", Company:"Microsoft", imgSrc: SaikiranSwargam},
    { name: "Saikiran Swargam",position: "SDE", Company:"Microsoft", imgSrc: AbdulBasitQureshi},
    { name: "Saikiran Swargam",position: "Senior SWE", Company:"Commonwealth Bank of Australia", imgSrc: AkankshaSingh},
    { name: "Saikiran Swargam",position: "Senior SWE", Company:"Computer Vision Software", imgSrc: PurshottomBhangui},
    { name: "Saikiran Swargam",position: "Senior Machine Architect", Company:"Quantiphi", imgSrc: RahatRezaSulemani},
    { name: "Saikiran Swargam",position: "Data Scientist", Company:"Deloitte", imgSrc: JeevanPrakashSingh},
    { name: "Saikiran Swargam",position: "SDE", Company:"Friendly Investemnts", imgSrc: KshitijJha},
    { name: "Saikiran Swargam",position: "Entrepreneur", Company:"GroomYourGram", imgSrc: PalakTanna},

  ];

  const [currentLeads, setCurrentLeads] = useState(teamLeads);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const updateLeads = () => {
    const targetTime = new Date("2024-04-01T00:00:00");

    if (currentTime > targetTime) {
      const shuffledLeads = [...teamLeads].sort(() => Math.random() - 0.5);
      const newLeads = shuffledLeads.slice(0, 3);
      setCurrentLeads(newLeads);
    }
  };

  useEffect(() => {
    updateLeads();
  }, [currentTime]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-center text-4xl underline text-white bg-black">SPEAKERS AND JUDGES</h2>
    <Slider {...settings}>
      {currentLeads.map((lead, index) => (
        <div key={index} className="p-12 bg-black">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full  h-64  object-fill object-center"
              src={lead.imgSrc}
              alt={lead.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{lead.name}</h3>
              <p className="text-gray-500">{lead.position}</p>
              <p className="text-gray-800">{lead.Company}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </>
  );
};

export default Carousel;
