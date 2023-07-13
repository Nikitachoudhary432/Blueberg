import React from "react";
import Services1 from "./Services1";

const Services = () => {
  return (
    <div className="Serives" id="services">
      <div className="container mt-5">
        <div className="row justify-center m-4">
          <div className="col-md-6">
            <h1 className="font-bold text-left">
              With help on in house team and Partners Blueberg offers
            </h1>
          </div>
          <div className="col-md-6 text-left">
            <p>
              Step into the world of Blueberg, where the sky s the limit for
              your business growth. As a dynamic all in one marketing agency
              rooted in Bangalore, Step into the world of Blueberg, where the
              sky s the limit for your business growth. As a dynamic all in one
              marketing agency rooted in Bangalore,{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-evenly bg-zinc-200 rounded-4 mt-4 p-4 w-[70%]">
            <div className="">
              <div className="h-[160px] rounded-tr-xl rounded-bl-xl p-2 m-3 bg-white flex flex-column items-center w-[200px] ">
                <img src="./one.png" />
                <h5> Digital Marketing</h5>
              </div>
              <div className="bg-white h-[160px]  rounded-tr-xl rounded-bl-xl p-2 m-3 flex flex-column items-center w-[200px] ">
                <img src="./four.png" />
                <h5>Events</h5>
              </div>
            </div>
            <div>
              <div className="bg-white h-[160px]  rounded-tr-xl rounded-bl-xl p-2 m-3 flex flex-column items-center w-[200px] ">
                <img src="./two.png" />
                <h5>Outdoor Advertising</h5>
              </div>
              <div className="bg-white h-[160px]  rounded-tr-xl rounded-bl-xl p-2 m-3 flex flex-column items-center w-[200px] ">
                <img src="./five.png" />
                <h5>Consultation</h5>
              </div>
            </div>
            <div>
              <div className="bg-white h-[160px]  rounded-tr-xl rounded-bl-xl p-2 m-3 flex flex-column items-center w-[200px] ">
                <img src="./three.png" />
                <h5>Influencer Collaborations</h5>
              </div>
              <div className="bg-white h-[160px]  rounded-tr-xl rounded-bl-xl p-2 m-3 flex flex-column items-center w-[200px] ">
                <img src="./six.png" />
                <h5>Data analysis and reporting</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services1 />
    </div>
  );
};

export default Services;
