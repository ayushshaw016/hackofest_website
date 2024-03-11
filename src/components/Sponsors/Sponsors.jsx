import React from "react";
import discord from "../../assets/discord.jpg"
const Sponsors = () => {
    return (
        <>
        <div className="mx-8 mt-20 text-white">   
        {/*  bg-slate-900 */}
          <h2 className="text-7xl text-center underline">Sponsors</h2>
          <br/>
          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Title Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Powered By</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row" data-aos="fade-right" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto "/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto "/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto "/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto "/>
          </div>
          
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Gold Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Silver Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row" data-aos="fade-right" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Media Partner</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Merchandise Partner</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row" data-aos="fade-right" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div> 
          </div>

          <h2 className="text-5xl text-center" data-aos="fade-up" data-aos-delay="300">Certificate Sponsor</h2>
          <br/>
          <div className="justify-around flex flex-col md:flex-row" data-aos="fade-left" data-aos-delay="300">
          <div className="my-4 mx-2">
          <img src={discord} className="w-72 h-auto"/>
          </div>
          </div>
        </div>
        </>
    )}
export default Sponsors;  