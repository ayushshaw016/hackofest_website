import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import icon from "../../assets/icon.png";
export default function CustomizedTimeline() {
  // const backgroundStyle = {
  //   backgroundImage: `url(${frame})`,
  //   // backgroundRepeat: "repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   color: "white",
  //   height: "20vh", // Adjust the height as needed
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   fontSize: "4rem", // Adjust the font size as needed
  // };
  return (
    <>
      <div
        className="bg-[#906eff]  text-white rounded-lg  m-24 text-center  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] underline font-serif opacity-60"
        // style={backgroundStyle}
      >
        TIMELINE
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="29th February"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p className="font-serif font-bold">
           REGISTRATION STARTS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="26th April"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p className="font-serif">
           IDEAS SUBMISSION STARTS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="31st March"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            CODING NINJAS X HACKO'FEST WEBINAR
          </p>
        </VerticalTimelineElement>
        {/* Other timeline elements */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="2nd April"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
           Inauguration Ceremony
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="3rd, 4th and 5th April"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            WORKSHOP AND SPEAKERS SESSION 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="6th April  14:00pm"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            HACKATHON STARTS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="7th April 20:00pm"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            HACKATHON ENDS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="8th April"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            COMMUNITY WINDOW REVIEW OPENS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="14th April"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
          COMMUNITY WINDOW REVIEW CLOSES
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain  "
              />
            </div>
          }
          date="14th April"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
          VALEDICTORY CEREMONY
          </p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </>
  );
}
