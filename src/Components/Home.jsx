import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/Pavan_Ambulkar_Resume.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b bg-red-100	 from-white via-skin to-white-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-pink-700 ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello! My name is <span className="different">Pavan Ambulkar </span>{" "}
            from <span className="different"> Amravati Maharashtra</span> I am
            an Aspiring Full Stack Web Developer. An optimistic and
            self-motivated individual, looking forward to working within the IT
            industry.
          </p>

          <a
            href={resume}
            download="Pavan_Ambulkar_Resume"
            type="file"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            // className="rounded-2xl mx-auto w-2/3 md:w-full"
            className="rounded-full  mx-auto w-2/3 md:w-40px"
            // className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
