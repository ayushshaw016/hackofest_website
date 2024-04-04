import React from "react";
import thinindia from "../../assets/thinkindia.png";
import ieee from "../../assets/ieee.png";
import herobg from "../../assets/herobg.png";
const AboutUS = () => {
  const backgroundStyle = {
    backgroundImage: `url(${herobg})`,
  };
  return (
    <>
      <div className="flex  flex-col  md:flex-row mx-auto">
        <div
          className="mx-4 md:px-32 text-white  mt-20 text-2xl font-bold font-serif md:w-1/2"
          // style={backgroundStyle}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className="p-4 border-white border-solid border-2 rounded-xl"
            style={backgroundStyle}
          >
            <img src={thinindia} className="h-1/4 w-1/4 text-white" />
            With a mission to empower young minds with a platform to ideate and innovate, Think India is a society that fuels the passion for technology and creativity. Comprising a diverse pool of students driven by a common zeal for problem-solving, the chapter embodies collaboration, creativity, and commitment. Through workshops, seminars, and competitions, Think India encourages students to think beyond boundaries and harness their potential to drive meaningful change in society.
          </div>
        </div>
        <br />
        <br />
        <div
          className="mx-4 md:px-32 text-white  text-2xl font-bold font-serif md:w-1/2 float-right mt-20"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div
            className="p-4 border-white border-solid border-2 rounded-xl"
            style={backgroundStyle}
          >
            <img src={ieee} className="h-1/4 w-1/2 text-white mx-16" />
            <br />
            At the forefront of technological advancement, the IEEE Student Branch NIT-P is  a club that serves for innovation and excellence. Committed to advancing technology for the benefit of humanity, the club serves as a catalyst for transformative technical ideas. With a rich legacy of fostering technological advancements and pushing the boundaries of innovation, IEEE Student Branch NIT-P empowers students to explore emerging technologies, develop critical skills, and make a positive impact on the world. 
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
