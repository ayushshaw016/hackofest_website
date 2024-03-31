import React from "react";
import herobg from "../../assets/herobg.png";
const Rules = () => {
  const backgroundStyle = {
    backgroundImage: `url(${herobg})`,
  };

  return (
    <>
      <div
        className="text-white text-2xl mx-4 md:mx-32 mt-32 bg-[#4d4949]  border-white border-2 border-solid rounded-3xl px-4 font-serif  pb-10 overflow-auto"
        style={backgroundStyle}
      >
        <h1 className="text-4xl lg:text-6xl text-center font-serif mt-2 underline text-[#cb5bcb]">
          RULES
        </h1>
        <br />
        <ol className="mx-3">
          <li className="ml-2 list-disc">
            The registration for the event is absolutely free of cost.
          </li>
          <br />
          <li className="ml-2 list-disc">
            The competition is available for teams consisting of students
            currently pursuing their Bachelor of Technology degrees,
            encompassing those in their 1st, 2nd, and 3rd years of study.
          </li>
          <br />
          <li className="ml-2 list-disc">
            To participate in the hackathon, register through
            <a
              href="https://hackofestnitp.devfolio.co/"
              target="_blank"
              className="underline text-[#cb5bcb] font-bold"
            >
              &nbsp;Devfolio
            </a>
          </li>
          <br />
          <li className="ml-2 list-disc">
            The 30 hours hybrid hackathon would be live on{" "}
            <span className="underline font-bold">6/04/2023 at 14:00</span> till{" "}
            <span className="underline font-bold">7/04/2023 at 20:00 </span>
          </li>
          <br />
          <li className="ml-2 list-disc">
            Before the hackathon , teams will participate in online project idea
            submission in form of presentation
          </li>
          <br />
          <li className="ml-2 list-disc">
            A maximum of 25-30 teams will be selected for the offline round
            based on their ideas
          </li>
          <br />
          <li className="ml-2 list-disc">
            Evaluation of project overviews will be conducted by the faculty
            advisor committee of <spna className="font-bold ">HackO’Fest</spna>{" "}
            from NIT Patna and a panel of expert judges
          </li>
          <br />
          <li className="ml-2 list-disc">
            All teams, except those shortlisted for the offline round in Patna,
            will engage in the hackathon exclusively through online
            participation
          </li>
          <br />
          <li className="ml-2 list-disc">
            It is emphasized that all teams will undergo evaluation based on
            standardized criteria for their hackathon projects
          </li>
          <br />
          <li className="ml-2 list-disc">
            Each member of a team must join the HackO’Fest
            <a
              className="underline text-[#cb5bcb] font-bold"
              href="https://discord.gg/QmNc3R6Z"
            >
              &nbsp;Discord&nbsp;
            </a>
            Server before the hackathon startsd Also, every member must change
            their server nickname to their official named
          </li>
          <br />
          <li className="ml-2 list-disc">
            Any violation of terms and conditions by a team member will result
            in the entire team’s disqualification from{" "}
            <span className="font-bold">HackO’Fest</span>, with organizers’
            decisions being final.
          </li>
          <br />
          <li className="ml-2 list-disc">
            Each team must first select at least one track and then choose
            corresponding themes accordingly.
          </li>
          <br />
          <li className="ml-2 list-disc">
            Project work must be strictly confined to the 30-hour duration of
            the hackathon.
          </li>
          <br />
          <li className="ml-2 list-disc">
            Projects found to reuse undisclosed code upon inspection may be
            subject to disqualification or require participants to differentiate
            between old and new work
          </li>
          <br />
          <li className="ml-2 list-disc">
            Plagiarism or inclusion of explicit content in hacks will result in
            automatic disqualification, with organizers' decisions being final.
          </li>
        </ol>
        <div className=" items-center  text-black font-bold  text-center mt-4">
          <a
            href="https://drive.google.com/file/d/1Pee-ww9L1cuQPQl4huAjCNo-Q7w-yNZd/view?usp=sharing"
            className="bg-[#cd9ff6] border-solid border-black border-2 rounded-3xl px-6 py-4"
            target="_blank"
          >
            Rulebook
          </a>
        </div>
      </div>
    </>
  );
};

export default Rules;
