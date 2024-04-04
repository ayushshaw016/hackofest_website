import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "",
    content: "",
    description:
      "Embark on a nationwide innovation journey! Our national-level hackathon HackO'Fest invites tech enthusiasts to collaborate, ideate, and create solutions that shape the future",
    aosDelay: "",
  },
  {
    title: "",
    content: "",
    description:
      "HackO'Fest offers participants the chance to compete for a total prize pool of $22,020, driving motivation and excellence in technology-driven solutions.",
    
    aosDelay: "",
  },
  {
    title: "",
    content: "",
    description:
      "Join our National level Hackathon where software and hardware experts unite to innovate, compete, and win prizes across diverse domains.",
    aosDelay: "",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary mt-1">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto mt-8"
                    >
                      <p className="text-lg ">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
