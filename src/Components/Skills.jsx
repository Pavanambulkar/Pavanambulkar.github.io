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
      img1: html,
      img2: css,
      img3: javascript,
      img4: reactImage,
    },
    {
      id: 2,

      title: "BACKEND DEVELOPMENT",
      style: "shadow-blue-500",
      one: "Node Js",
      two: "MongoDb",
      three: "Express",
      four: "GitHub",
      img1: node,
      img2: mongo,
      img3: express,
      img4: github,
    },
    {
      id: 3,

      title: "DATA STRUCTURES & ALGORITHM",
      style: "shadow-yellow-500",
      one: "Problem Solving",
      two: "Array",
      three: "Stack",
      four: "Queue",
      img1: problem,
      img2: array,
      img3: stack,
      img4: queue,
    },
    {
      id: 4,
      title: "COMMUNICATION SKILLS",
      style: "shadow-blue-600",
      one: "Writing",
      two: "Collaboration",
      three: "Active Listening",
      four: "Empathy",
      img1: writing,
      img2: collaboration,
      img3: listen,
      img4: empathy,
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
                src,
                title,
                style,
                one,
                two,
                three,
                four,
                img1,
                img2,
                img3,
                img4,
              }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style}`}
                >
                  <p className="mt-4 text-pink-700 font-semibold">{title}</p>
                  <div className="w-full grid grid-cols-2  sm:grid-cols-2 gap-8 text-center  py-8 px-12 sm:px-0">
                    <div>
                      <img className="w-10 mx-auto " src={img1} alt="Html" />
                      <p className="text-black font-medium mt-3">{one}</p>
                    </div>
                    <div>
                      <img className="w-10 mx-auto " src={img2} alt="Html" />
                      <p className="text-black font-medium mt-3">{two}</p>
                    </div>
                    <div>
                      <img className="w-10 mx-auto " src={img3} alt="Html" />
                      <p className="text-black font-medium mt-3">{three}</p>
                    </div>
                    <div>
                      <img className="w-10 mx-auto " src={img4} alt="Html" />
                      <p className="text-black font-medium mt-3">{four}</p>
                    </div>
                  </div>
                  <img src={src} alt="" className="w-20 mx-auto" />
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
