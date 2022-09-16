import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full mt-20 h-screen  bg-red-100 bg-gradient-to-b from-white to-white-800 p-4 text-black"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-black inline border-b-4 border-pink-500">
            Contact
          </p>
          <p className="py-6 text-black">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://formspree.io/f/moqbjgkq"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 bg-emerald-200 rounded-md text-black focus:outline-none"
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
    </div>
  );
};

export default Contact;