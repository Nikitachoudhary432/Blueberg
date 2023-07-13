import React from "react";
import Blogform from "./Blogform";

const news = [
  {
    image: "./blog1.png",
    head: " The Power of Digital Marketing for Fintech Agencies:Revolutionizing Financial Services",
    desc: "  Do you remember the time standing in queues to make payments? Recall the time of carrying bundles of notes in your pocket.",
  },
  {
    image: "./blog2.png",
    head: "  Unveiling the Essence of a Branding Company in India: Your Gateway to Success",
    desc: "   India witnessed a rise in the start up culture post pandemic era. People now, with their unique ideas, are flooding the markets..",
  },
  {
    image: "./blog3.png",
    head: "  Importance of billboard advertising for real estate business",
    desc: " Are traditional advertising methods still relevant in todays fast paced digital marketing and social media world? Yet, Billboard advertising reigns supreme in catching attention.",
  },
];

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="container mt-4 mb-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-5xl">Our Latest Blog Posts</h1>
          <button className="border-none rounded-3xl px-8 bg-cyan-400 font-medium">
            See All Blog Posts
          </button>
        </div>
        <div className="container overflow-hidden">
          <div className="text-left mt-5 ">
            <div className="flex max-w-sm">
              {news.map((item) => (
                <div className="m-2 max-w-sm">
                  <img src={item.image} className="pb-3 rounded-4" />
                  <h5>{item.head}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Blogform />
    </div>
  );
};

export default Blog;
