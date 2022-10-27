import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm Shlomo Hailo, 29 years old. Bootcamp graduate at Tech-Career
          College. Programming and Web Development Course at Full Stack
          Tech-Career Technology Training Center An academic course of 800
          academic study hours and 1200 hours of self-study, including the
          following technologies:
        </p>

        <br />

        <p className="text-xl">
          Customer Side: React | Bootstrap | HTML5 | CSS3 | JavaScript|
          TypeScript | NodeJs | Redux.
          <div>Server Side: Express.js | Node.js |Oop. </div>
          <div>Databases: MongoDB | SQL.</div>
          <div> Additional technologies: JSON | GITHUB.</div>
          <div> Development environments: Visual Studio Code.</div>
        </p>
      </div>
    </div>
  );
};

export default About;
