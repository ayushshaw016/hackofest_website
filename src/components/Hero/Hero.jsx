import React, { useState, useEffect } from "react";
import MountainPng from "../../assets/moon-surface-hd.png";
import herobg from "../../assets/herobg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  

  const backgroundStyle = {
    backgroundImage: `url(${herobg})`,
  };
  const targetDate = new Date("April 6, 2024 14:00:00").getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem("targetTime");
    if (storedTime) {
      return JSON.parse(storedTime);
    } else {
      return calculateTimeLeft();
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    localStorage.setItem("targetTime", JSON.stringify(timeLeft));
  }, [timeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div
      key={interval}
      className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
    >
      <span className="countdown font-mono text-5xl">
        <span
          style={{ "--value": timeLeft[interval].toString().padStart(2, "0") }}
        >
          {timeLeft[interval]}
        </span>
      </span>
      {interval}
    </div>
  ));

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex flex-col justify-center items-center p-4 md:flex-row mt-48">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="text-white space-y-4 lg:pr-24 xs:w-full"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="text-6xl font-bold font-serif">HackO'Fest</h1>
            <p>
            Hack-o-Fest, a dynamic national-level hackathon poised to ignite innovation and collaboration. Presented to you by a powerful collaboration between two phenomenal clubs, Think India Student Chapter and IEEE, Hack-o-Fest brings to you an electrifying 36-hour journey of creativity, problem-solving, and entrepreneurial spirit.
            </p>
            <div>
            
            
          


            </div>

            
          </div>

        </div>
            
          <div
            className="mr-16 mt-10 md:-mt-6 flex flex-col items-center"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            
            <p className="text-white text-3xl font-bold">
Registration Ended!
            </p>
                
          </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-10 w-full brightness-50 z-10 mb-20"
      />
    </div>
  );
};

export default Hero;
