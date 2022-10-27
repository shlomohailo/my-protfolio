import React from "react";
import me from "../assets/me.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function Home() {
  const Resume = {
    href: "/MyCv.pdf",
    download: true,
  };
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full mx-7 ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Full-Stack Web Developer Looking for a challenging role in which I
            can develop my skills and gain experience, high work ethic, quick
            absorption ability, experience in demanding roles such as meeting
            deadlines and working under pressure, teamwork ability and high
            motivation to learn. Responsible, high logical thinking.
          </p>

          <div className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-white cursor-pointer">
            <a href={Resume.href} download={Resume.download}>
              Resume
            </a>

            <span className="group-hover:rotate-90 duration-300 ">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </div>
        </div>

        <div>
          <img
            src={me}
            alt=""
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
