import React from "react";
import satelitImg from "../../assets/hardwaredomain.jpg";
import { Link } from "react-router-dom";

const Satelite = () => {
  return (
    <>
      <section className="bg-primary text-white py-20 -mb-10">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase text-2xl font-bold"
              >
               HARDWARE DOMAIN
              </p>
              
              <p data-aos="fade-up" data-aos-delay="700">
              Internet of Things (IoT) Solution
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
              Wearables Technology
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
              Robotics
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
              Home Automation
              </p>

              <Link
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
                to={`/themes?software=false`}
              >
                View All
              </Link>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Satelite;
