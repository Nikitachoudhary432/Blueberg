import React from "react";

const detail = [
  {
    id: "01",
    Title: "Consultation",
    Desc: "Professional marketing consultant with significant experience in the industry will understand client s product and  requirements and provide a 6 month marketing plan, strategy, expected results and timeline",
    image : "./c.png"
  },
  {
    id: "02",
    Title: "Budgeting",
    Desc: "Marketing strategy is to be created keeping in mind client budget",
    image : "./b.png"
  },
  {
    id: "03",
    Title: "Execution",
    Desc: "With mix of Bluebergs in house team and a range of partners, the marketing strategy will be executed over a period of 6 months.",
    image : "./e.png"
  },
  {
    id: "04",
    Title: "Data Reporting",
    Desc: "Using existing sales and marketing data to figure out future strategy marketing strategy and Monthly/bi weekly reviews and analytical reporting of progress of the project.",
    image : "./d.png"
  },
  {
    id: "05",
    Title: "Feedback",
    Desc: "Improvising the plans/strategy/campaigns based on monthly data to achieve better results",
    image : "./c.png"
  },
];

const Services1 = () => {
  return (
    <div className="Services-two bg-zinc-200 mt-4">
      <div className="container pt-5">
        <h4>
          <span className="text-amber-400">Our Process</span>
        </h4>
        <h1>The approach we take is</h1>
        <p>
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient.
        </p>
      </div>
     
        <div className="flex flex-col justify-evenly items-center w-full">
          {detail.map((item) => (
            <div className="flex justify-evenly items-center w-full">
              <div className="bg-white p-3 rounded-lg" key={item.id}>
                <h1>{item.id}</h1>
              </div>

              <div className="bg-white w-[70%] text-left p-4 m-4 rounded-lg flex">
                <img src={item.image} />
                <div className="pl-3 flex justify-between flex-col">
                  <div>
                    <h5>{item.Title}</h5>
                    <p>{item.Desc}</p>
                  </div>
                  <button className="btn text-left p-0 text-cyan-500">
                    Read More..
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    </div>
  );
};

export default Services1;
