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
        className="bg-violet-300  text-violet-900 rounded-lg  m-24 text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        // style={backgroundStyle}
      >
        Timeline for HackO’Fest
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          src={icon}
          date="2011 - present"
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={icon}
                alt="logo"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          date="2011 - present"
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          src={icon}
          date="2011 - present"
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        {/* Other timeline elements */}
      </VerticalTimeline>
    </>
  );
}
