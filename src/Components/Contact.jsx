import React from "react";
import { FcCallback } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div
        name="Contact"
        
        className="w-full  bg-red-100 grid grid-cols-1  sm:grid-cols-2 gap-8 text-center  py-8 px-12 sm:px-0"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold text-black inline border-b-4 border-pink-500">
              Contact
            </p>
            <p className="py-6 text-black">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className=" flex justify-center   items-center">
            <form
              action="https://formspree.io/f/moqbjgkq"
              method="POST"
              className=" flex flex-col 	 w-full md:w-1.1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent  border-2 bg-emerald-200 rounded-md text-black focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 bg-emerald-200 rounded-md text-black focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent bg-emerald-200 border-2 rounded-md text-black focus:outline-none"
              ></textarea>

              <button className="text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send Email
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        
        <a
              target="_blank"
              rel="noreferrer"
              href="tel:+917385581794"
            >
          <div className="flex mt-4 align-middle gap-3">
            <FcCallback size="40px" />
            <p className="text-black text-2xl ">+91 7385581794</p>
          </div>
          </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            >
          <div className="flex mt-4 align-middle gap-3">
              <SiGmail color="red" size="40px" />
              <p className="text-black text-2xl ">pavanambulkar69@gmail</p>
          </div>
            </a>
           
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Pavanambulkar"
            >
          <div className="flex mt-4 align-middle gap-3">
            <FaGithub size="40px" />
            <p className="text-black text-2xl ">Github</p>
          </div>
          </a>
          
          <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pavan-a-156447220/"
            >
          <div className="flex mt-4 align-middle gap-3">
            <SiLinkedin color="blue" size="40px" />
            <p className="text-black text-2xl ">Linkedin</p>
          </div>
          </a>
          {/* <SocialLinks /> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
