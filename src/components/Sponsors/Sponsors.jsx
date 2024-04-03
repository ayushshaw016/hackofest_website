import React from "react";
import Codingninjas from "../../assets/Sponsors/Codingninjas.jpg"
import echo3d from "../../assets/Sponsors/echo3d.jpg"
import ETHindia from "../../assets/Sponsors/ETHindia.png"
import givemycertificate from "../../assets/Sponsors/givemycertificate.png"
import Incubationcenter from "../../assets/Sponsors/Incubationcenter.jpg"
import interviewbuddy from "../../assets/Sponsors/interviewbuddy.jpg"
import oreilly from "../../assets/Sponsors/oreiily.png"
import perfectionias from "../../assets/Sponsors/perfectionias.png"
import polygon from "../../assets/Sponsors/Ploygon.png"
import wolfarm from "../../assets/Sponsors/wolfram.png"
import herobg from "../../assets/herobg.png"
const Sponsors = () => {
  const backgroundStyle = {
    backgroundImage: `url(${herobg})`,
  };

    return (
      <>
          <h2 className="text-7xl text-center underline text-white mt-16" data-aos="fade-down" data-aos-delay="300">Sponsors</h2>
        <div className=" text-white text-2xl mx-4 md:mx-32 mt-28 bg-[#4d4949]  border-white border-2 border-solid rounded-3xl px-4 font-serif  pb-10 overflow-hidden
    "  style={backgroundStyle}>   
        {/*  bg-slate-900 */}
          <br/>
          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Title Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8 mb-6" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={Codingninjas} className="w-96 h-auto rounded-xl"/>
          </div>
          
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Powered By</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8 mb-6" data-aos="fade-right" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={Incubationcenter} className="w-72 h-auto "/>
          </div>
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Gold Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8 mb-6" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={wolfarm} className="w-72 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={perfectionias} className="w-96 h-auto"/>
          </div>
          </div>



          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Silver Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8 mb-6" data-aos="fade-right" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={interviewbuddy} className="w-72 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={echo3d} className="w-96 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={oreilly} className="w-72 h-auto"/>
          </div>
          </div>



          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Associate Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8 mb-6" data-aos="fade-right" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={polygon} className="w-96 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={ETHindia} className="w-72 h-auto"/>
          </div>
          </div>

          {/* <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Media Partner</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Merchandise Partner</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8" data-aos="fade-right" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>  */}
          {/* </div> */}

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Certificate Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row ml-8" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2 pb-16">
          <img src={givemycertificate} className="w-96  h-16"/>
          </div>
          </div>
        </div>
        </>
    )}
export default Sponsors;  