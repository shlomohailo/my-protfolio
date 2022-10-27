import React from "react";
import TeamApp from "../assets/portfolio/TeamApp.png";
import HarryApp from "../assets/portfolio/HarryApp.png";
import PhoneApp from "../assets/portfolio/PhoneApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TeamApp,
      code: "https://github.com/shlomohailo/Fitst-team_project",
      website: "https://shlomohailo.github.io/Fitst-team_project/",

    },
    {
      id: 2,
      src: HarryApp,
      code: "https://github.com/shlomohailo/Harry-potter-project/tree/master",
      website: "https://shlomohailo.github.io/Harry-potter-project/",
    

    },
    {
      id: 3,
      src: PhoneApp,
      code: "https://github.com/shlomohailo/cell_phone_store_project",
      website: "https://shlomohailo.github.io/cell_phone_store_project/",

    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, website }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={website} target="_blank" rel="noreferrer">
                    website
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
