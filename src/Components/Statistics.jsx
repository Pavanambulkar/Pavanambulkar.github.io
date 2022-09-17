import React from "react";
import "react-circular-progressbar/dist/styles.css";
import GitHubCalendar from "react-github-calendar";

// const percentage = 66;
const Statistics = () => {
  const techs = [
    {
      id: 1,

      title: "HOURS",
      style: "shadow-orange-500",
      one: "Hours Of Coding",
      percentage: "1200+",
    },
    {
      id: 2,

      title: "CONTRIBUTIONS",
      style: "shadow-blue-500",
      one: "Git Commits",
      percentage: "200+",
    },
    {
      id: 3,

      title: "PROJECTS",
      style: "shadow-yellow-500",
      one: "Projects Done",
      percentage: "6+",
    },
    {
      id: 4,
      title: "SOFT SKILLS",
      style: "shadow-blue-600",
      one: "Hours Of Soft Skills Sessions",
      percentage: "100+",
    },
  ];

  return (
    <div
      name="Statistics"
      className="bg-gradient-to-b mt-0  max-h-full from-white-800 to-white w-full max-h-ful"
    >
      <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold text-black border-b-4 border-pink-500 p-2 inline">
            Statistics
          </p>
          <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-8 text-center  py-8 px-12 sm:px-0">
            {techs.map(({ id, num, title, style, one, percentage }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style}`}
              >
                <p className="mt-4 text-pink-700 font-semibold">{title}</p>
                <div className="w-full  grid grid-cols-2  align-center  justify-center sm:grid-cols-2 gap-8 text-center  py-8 px-12 sm:px-0">
                  <div>
                    <h1 className="text-red-800 text-6xl text-center	">
                      {percentage}
                    </h1>
                    <p className="text-black text-2xl font-medium mt-3 ">
                      {" "}
                      {one}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center  text-black mt-2  border-zinc-900 m-auto">
          <GitHubCalendar
            username="Pavanambulkar"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
