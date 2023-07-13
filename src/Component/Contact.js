import React from "react";

const items = [
  {
    title: "Product",
    items: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
  },
  {
    title: "Company",
    items: ["About", "Contact us", "Careers", "Culture", "Blog"],
  },
  {
    title: "Support",
    items: [
      "Getting started",
      "Help center",
      "Server status",
      "Report a bug",
      "Chat support",
    ],
  },
  {
    title: "Contacts us",
    items: ["email", "phone no", "Address"],
  },
];
const Contact = () => {
  return (
    <div className="footer mt-4" id="contact">
      <div className="container ">
        <div className="flex justify-evenly">
          <div className="text-left">
            <h2 className="text-2xl font-bold pb-3">
              <span className="text-cyan-400">Blue</span>
              <span className="text-amber-400">berg</span>
            </h2>
            <h4 className="pb-3">Join Our Newsletter</h4>
            <div className="pb-4">
              <input
                type="text"
                placeholder="Your Email Address"
                className="border-none bg-gray-200 h-[40px] text-center"
              />
              <button className="bg-black text-white border-none bg-gray-300 h-[40px] text-center">
                Subscribe
              </button>
            </div>
            <p>
              * Will send you weekly updates for your better finance management.
            </p>
            <div className="text-amber-400">
              <i class="fa fa-facebook pr-4  text-lg" aria-hidden="true"></i>
              <i class="fa fa-twitter pr-4 text-2xl" aria-hidden="true"></i>
              <i class="fa fa-instagram pr-4 text-2xl" aria-hidden="true"></i>
              <i class="fa fa-linkedin pr-4 text-2xl" aria-hidden="true"></i>
              <i class="fa fa-youtube-play pr-4 text-2xl" aria-hidden="true"></i>
            </div>
          </div>
          <div className="flex p-0">
            {items.map((item) => {
              return (
                <div className="p-2">
                  <h4 className="pb-2 text-cyan-400">{item.title}</h4>
                  <div className=" d-flex flex-column">
                    {item.items.map((value) => {
                      return <p>{value}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <div>
            <p>Copyright © 2023 Blueberg</p>
          </div>
          <div>
            <p>
              All Rights Reserved |
              <span className="text-amber-400">Terms and Conditions</span> |
              <span className="text-amber-400">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
