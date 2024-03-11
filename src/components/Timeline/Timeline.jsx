import React from "react";
// import "../Timeline/timeline.css";
import "./timeline.scss";

const Timeline = () => {
  return (
    <>
 
 <section className="ps-timeline-sec h-full max-h-screen bg-white justify-center mx-4 md:mx-32 mt-32 border-white border-2 border-solid rounded-3xl px-4 font-serif mb-4 pb-10">
  <div className="container h-full max-h-screen overflow-auto">
    <ol className="ps-timeline" style={{ display: 'flex', flexDirection: 'row' }}>
      <li style={{ flex: 1 }}>
        <div className="img-handler-top">
          <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_03.png" alt="" />
        </div>
        <div className="ps-bot">
          <p>Do you have a recent injury or long term pain?</p>
        </div>
        <span className="ps-sp-top">01</span>
      </li>

      <li style={{ flex: 1 }}>
        <div className="img-handler-bot">
          <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt="" />
        </div>
        <div className="ps-top">
          <p>Have you tried Physiotherapy, Chiropractor or your GP without the pain free results?</p>
        </div>
        <span className="ps-sp-bot">02</span>
      </li>
      
      <li style={{ flex: 1 }}>
        <div className="img-handler-top">
          <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_05.png" alt="" />
        </div>
        <div className="ps-bot">
          <p>Let Physology assess and treat your pain with our trusted revolusionary approach.</p>
        </div>
        <span className="ps-sp-top">03</span>
      </li>

      <li style={{ flex: 1 }}>
        <div className="img-handler-bot">
          <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_10.png" alt="" />
        </div>
        <div className="ps-top">
          <p>Join our happy family of pain free clients.</p>
        </div>
        <span className="ps-sp-bot">04</span>
      </li>
    </ol>
  </div>
</section>



    </>
  );
};

export default Timeline;
{/* <section className="ps-timeline-sec h-full max-h-screen bg-white  justify-center  mx-4 md:mx-32 mt-32  border-white border-2 border-solid rounded-3xl px-4 font-serif mb-4 pb-10 ">
        <div className="container h-full max-h-screen overflow-auto">
          <ol className="ps-timeline ">
            <li>
              <div className="img-handler-top">
                <img
                  src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_03.png"
                  alt=""
                />
              </div>
              <div className="ps-bot">
                <p>Do you have a recent injury or long term pain?</p>
              </div>
              <span className="ps-sp-top">01</span>
            </li>

            <li>
              <div className="img-handler-bot">
                <img
                  src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png"
                  alt=""
                />
              </div>
              <div className="ps-top">
                <p>
                  Have you tried Physiotherapy, Chiropractor or your GP without
                  the pain free results?
                </p>
              </div>
              <span className="ps-sp-bot">02</span>
            </li>
            <li>
              <div className="img-handler-top">
                <img
                  src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_05.png"
                  alt=""
                />
              </div>
              <div className="ps-bot">
                <p>
                  Let Physology assess and treat your pain with our trusted
                  revolusionary approach.
                </p>
              </div>
              <span className="ps-sp-top">03</span>
            </li>
            <li>
              <div className="img-handler-bot">
                <img
                  src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_10.png"
                  alt=""
                />
              </div>
              <div className="ps-top">
                <p>Join our happy family of pain free clients.</p>
              </div>
              <span className="ps-sp-bot">04</span>
            </li>
            
          </ol>
        </div>
      </section> */}
