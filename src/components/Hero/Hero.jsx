import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-6xl font-bold font-serif
            ">
              HackO'Fest
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            <div>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-indigo-500 text-white hover:bg-red-600 rounded-lg duration-200 text-2xl 
              px-6 py-2 mt-4 font-bold"
              href="https://hackofestnitp.devfolio.co/" target="_blank">
            Register!
            </a>
               </div>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-10 w-full brightness-50 z-10 -mb-24"
      />

      {/* <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div> */}
    </div>
  );
};

export default Hero;
