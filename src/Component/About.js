import React from "react";

const About = () => {
  return (
    <div className="About bg-amber-400 " id="about">
      <div className="container mt-4">
        <div className="row justify-center">
          <div className="col-md-6 pt-5 text-white text-left">
            <h1 className="text-5xl mb-3">
              One-Stop-Shop for All your Marketing
            </h1>
            <p className="text-lg">
              Step into the world of Blueberg, where the sky s the limit for
              your business growth. As a dynamic all in one marketing agency
              rooted in Bangalore, we have made it our mission to equip
              businesses with powerful offline and digital marketing strategies
              that deliver tangible results.Step into the world of Blueberg,
              where the sky s the limit for your business growth. As a dynamic
              all in one marketing agency rooted in Bangalore, we have made it
              our mission to equip businesses with powerful offline and digital
              marketing strategies that deliver tangible results.
            </p>
            <button className="rounded-3xl px-8 py-2 bg-black font-medium text-white">
              Get started
            </button>
          </div>
          <div className="col-md-6 pt-3 flex justify-center">
            <img src="./about.png" className="w-[300px]"  />
          </div>
          <div className="flex justify-evenly border bg-white mb-4 mt-2 p-4 rounded-4 w-[80%] items-center">
            <h2>Heading of Points</h2>
            <p>
              <i
                class="fa fa-star p-2 bg-slate-200 mr-2"
                aria-hidden="true"
              ></i>
              Point 1
            </p>
            <p>
              <i
                class="fa fa-trophy p-2 bg-slate-200 mr-2"
                aria-hidden="true"
              ></i>
              Point 2
            </p>
            <p>
              <i
                class="fa fa-lightbulb-o p-2 bg-slate-200 mr-2"
                aria-hidden="true"
              ></i>
              Point 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
