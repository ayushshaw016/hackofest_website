import React from "react";
import sateliteImg from "../../assets/softwaredomain.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase text-2xl font-bold"

              >
                Software Domain
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
              Quality Education 
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
              Cyber Security 
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
              Healthcare and Medical Facility 
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
              Business and Economic Growth 
              </p>

              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
