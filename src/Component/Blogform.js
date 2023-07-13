import React from "react";

const Blogform = () => {
  return (
    <div className="container">
      <div className="form bg-amber-400 p-5 rounded-5 text-white">
        <h5>Why choose us</h5>
        <h1>Got a Project or Partnership in mind</h1>
        <p className="pt-4">
          Mean if he they been no hold mr. Is at much do made. Latter person am
          secure of estate genius at.Mean if he they been no hold mr. Is at much
          do made. Latter person am secure of estate genius at.
        </p>
        <div className="pt-4">
          <div>
            <input type="text" placeholder="Email Address" className="border-none outline-none rounded-5 w-[275px] h-[48px] text-center mb-2"/>
          </div>
          <div>
            <input type="password" placeholder="Password" className="border-none outline-none rounded-5 w-[275px] h-[48px] text-center mb-2"/>
          </div>
          <button className="border-none outline-none rounded-5 w-[275px] h-[48px] text-center mb-2 bg-black text-white">sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Blogform;
