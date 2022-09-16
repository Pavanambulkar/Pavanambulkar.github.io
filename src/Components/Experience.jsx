import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import github from "../assets/github1.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import mui from "../assets/mui.png";
import bootstrap from "../assets/bootstrap.png";
import express from "../assets/express.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
        id: 4,
        src: redux,
        title: "Redux",
        style: "shadow-sky-400",
      },
      {
        id: 5,
        src: node,
        title: "Node Js",
        style: "shadow-pink-400",
      },
      {
        id: 6,
        src: mongo,
        title: "MongoDb",
        style: "shadow-white",
      },
      
      {
          id: 7,
          src: express,
          title: "Express Js",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
        id: 11,
        src: mui,
        title: "Material UI",
        style: "shadow-sky-400",
      },
      {
        id: 12,
        src: bootstrap,
        title: "BootStrap",
        style: "shadow-sky-400",
      },
    
    
  ];

  return (
    <div
      name="Technology"
      className="bg-gradient-to-b mt-0 from-white-800 to-white w-full md:h-full	"
    >
      <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold text-black border-b-4 border-pink-500 p-2 inline">
            Tech Stack
          </p>
         
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-pink-700">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;