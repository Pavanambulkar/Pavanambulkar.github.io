import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-0 h-screen bg-gradient-to-b from-white-800 bg-zinc-200	 to-white text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  text-black font-bold inline border-b-4 border-pink-500">
            About
          </p>
        </div>

        <p className="text-xl text-gray-500 ">
          A Full Stack Developer who loves solving problems and building
          projects. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>

        <br />

        <p className="text-xl text-gray-500">
          Looking forward to applying and enhancing my skills and knowledge as a
          developer. I love working on new and exciting technologies emerging
          nowadays.
        </p>
      </div>
    </div>
  );
};

export default About;
