import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const teamLeads = [
    { name: "Akash", position: "Event Lead", imgSrc: "john.jpg" },
    { name: "Anish", position: "Event Co-Lead", imgSrc: "jane.jpg" },
    { name: "Priyanshu", position: " Event Co-Lead", imgSrc: "jane.jpg" },
    { name: "Ashutosh", position: "Chief Co-Cordinator", imgSrc: "jane.jpg" },
    {
      name: "Arun Singh",
      position: "Community Engagement Lead",
      imgSrc: "jane.jpg",
    },
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
    <Slider {...settings}>
      {currentLeads.map((lead, index) => (
        <div key={index} className="p-12 bg-black">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src={lead.imgSrc}
              alt={lead.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{lead.name}</h3>
              <p className="text-gray-500">{lead.position}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
