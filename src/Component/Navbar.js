import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-evenly mt-4">
        <h2 className="text-2xl font-bold">
          <span className="text-cyan-400">Blue</span>
          <span className="text-amber-400">berg</span>
        </h2>
        <a className="no-underline text-black" href="#">
          Home
        </a>
        <a className="no-underline text-black" href="#about">
          About Us
        </a>
        <a className="no-underline text-black" href="#services">
          Services
        </a>
        <a className="no-underline text-black" href="#blog">
          Blogs
        </a>
        <a className="no-underline text-black" href="#contact">
          Contact Us
        </a>
        <button className="rounded-3xl px-8 py-2 bg-amber-400 font-medium border-none">
          Join us
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
