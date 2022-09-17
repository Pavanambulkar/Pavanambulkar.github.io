import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import github from "../assets/github1.png";
import express from "../assets/express.png";
import problem from "../assets/problem.png";
import stack from "../assets/stack.png";
import array from "../assets/array.png";
import queue from "../assets/queue.png";
import listen from "../assets/listen.png";
import writing from "../assets/writing.png";
import empathy from "../assets/empathy.png";
import collaboration from "../assets/collaboration.png";
import {
  FaAirFreshener,
  FaAssistiveListeningSystems,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaResolving,
  FaStackExchange,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMaterialui,
  SiMongodb,
  SiNpm,
  SiPostman,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { AiTwotoneDatabase } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { TbWritingSign } from "react-icons/tb";
import { MdViewArray } from "react-icons/md";
import { RiEmpathizeLine } from "react-icons/ri";
import { FcCollaboration } from "react-icons/fc";

const Skills = () => {
  const techs = [
    {
      id: 1,

      title: "FRONTEND DEVELOPMENT",
      style: "shadow-orange-500",
      one: "HTML",
      two: "CSS",
      three: "JavaScript",
      four: "React",
      five: "Redux",
      six: "Tailwind ",
      seven: "Material Ui",
      eight: "Bootstrap",
      nine: "NPM",
      img1: <FaHtml5 />,
      img2: <FaCss3Alt />,
      img3: <FaJs />,
      img4: <FaReact />,
      img5: <SiRedux />,
      img6: <SiTailwindcss />,
      img7: <SiMaterialui />,
      img8: <SiBootstrap />,
      img9: <SiNpm />,
    },
    {
      id: 2,

      title: "BACKEND DEVELOPMENT",
      style: "shadow-yellow-500",
      one: "Node Js",
      two: "MongoDb",
      three: "Express",
      four: "GitHub",
      five: "Postman",
      six: "Git",

      img1: <FaNodeJs />,
      img2: <SiMongodb />,
      img3: <SiExpress />,
      img4: <FaGithub />,
      img5: <SiPostman />,
      img6: <FaGitAlt />,
    },
    {
      id: 3,

      title: "DATA STRUCTURES & ALGORITHM",
      style: "shadow-yellow-500",
      one: "Problem Solving",
      two: "Array",
      three: "Stack",
      four: "Queue",

      img1: <FaResolving />,
      img2: <MdViewArray />,
      img3: <FaStackExchange />,
      img4: <AiTwotoneDatabase />,
    },
    {
      id: 4,
      title: "COMMUNICATION SKILLS",
      style: "shadow-orange-500",
      one: "Writing",
      two: "Collaboration",
      three: "Active Listening",
      four: "Empathy",
      five: "Confidence",
      six: "Respect ",

      img1: <TbWritingSign />,
      img2: <FcCollaboration />,
      img3: <FaAssistiveListeningSystems />,
      img4: <RiEmpathizeLine />,
      img5: <GiConfirmed />,
      img6: <FaAirFreshener />,
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b mt-0  max-h-full from-white-800 to-white w-full max-h-ful"
    >
      <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold text-black border-b-4 border-pink-500 p-2 inline">
            Skills
          </p>
          <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-8 text-center  py-8 px-12 sm:px-0">
            {techs.map(
              ({
                id,

                title,
                style,
                one,
                two,
                three,
                four,
                five,
                six,
                seven,
                eight,
                nine,
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9,
              }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style}`}
                >
                  <p className="mt-4 text-pink-700 font-semibold">{title}</p>
                  <div className="w-full grid grid-cols-1  sm:grid-cols-3 gap-8 text-center  py-8 px-12 sm:px-0">
                    <div>
                      {/* <img className="w-10 mx-auto " src={img1} alt="Html" /> */}
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img1}
                      </p>
                      <p className="text-black   font-medium mt-3">{one}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img2}
                      </p>
                      <p className="text-black font-medium mt-3">{two}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img3}
                      </p>
                      <p className="text-black font-medium mt-3">{three}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img4}
                      </p>
                      <p className="text-black font-medium mt-3">{four}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img5}
                      </p>
                      <p className="text-black font-medium mt-3">{five}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img6}
                      </p>
                      <p className="text-black font-medium mt-3">{six}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img7}
                      </p>
                      <p className="text-black font-medium mt-3">{seven}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img8}
                      </p>
                      <p className="text-black font-medium mt-3">{eight}</p>
                    </div>
                    <div>
                      <p className="bg-black ml-10		 mb-1 align-middle  text-5xl	place-content-center w-12 ">
                        {img9}
                      </p>
                      <p className="text-black font-medium mt-3">{nine}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
