import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-md-6 text-left mt-5">
            <h1 className="font-bold text-6xl">
              Building digital Products,
            </h1>
            <h1 className="font-bold text-6xl mb-4"><span className="text-cyan-400">brands & experience</span></h1>
            <p className="font-md mb-6">
              Step into the world of Blueberg, where the sky s the limit for
              your business growth. As a dynamic all in one marketing agency
              rooted in Bangalore.
            </p>
            <button className="border-none rounded-3xl px-8 py-2 bg-amber-400 font-medium">
              Get started
            </button>
          </div>
          <div className="col-md-6">
            <img src="./home.png" alt="" className="p-4 w-[370px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
