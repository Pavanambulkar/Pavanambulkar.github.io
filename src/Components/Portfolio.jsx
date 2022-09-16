import React from "react";
import arrayDestruct from "../assets/portfolio/sendinblue.png";
import installNode from "../assets/portfolio/life.png";
import navbar from "../assets/portfolio/expedia2.png";
import reactParallax from "../assets/portfolio/zappos1.png";
import reactSmooth from "../assets/portfolio/prime1.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      head: "Sendinblue - Clone",
      tech: "HTML | CSS | JavaScript | Rest API",
      link1: "https://enormous-underwear-686.vercel.app/",
      link2: "https://github.com/Pavanambulkar/enormous-underwear-686",
      para: "Sendinblue is the only all-in-one digital marketing platformempowering B2B and B2C businesses, ecommerce sellers and agencies to build customer relationships through end to end.",
    },
    {
      id: 2,
      src: reactParallax,
      head: "Zappos - Clone",
      tech: "HTML | CSS | JavaScript | Rest API",
      link1: "https://pavanambulkar.github.io/Zappos_web_clone/",
      link2: "https://github.com/Pavanambulkar/Zappos_web_clone",

      para: "Zappos is one of the fastest growing online Shopping portals in Asia, offering Shopping an extensive selection of Men, Women and  Kids Products to Enjoy every moment.",
    },
    {
      id: 3,
      src: navbar,
      head: "Expedia - Clone",
      tech: "HTML | CSS | JavaScript | Rest API",
      link1: "https://jolly-tulumba-a0bccf.netlify.app/",
      link2: "https://github.com/kiranwithcode/Expedia_Clone",

      para: "Expedia is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services to meet every budget and activities of every kind at competitive rates.",
    },
    {
      id: 4,
      src: reactSmooth,
      head: "Prime Video - Clone",
      tech: "HTML | CSS | JavaScript | Rest API",
      link1: "https://pavanambulkar.github.io/PRIME_GITHUB_PROJECT/",
      link2: "https://github.com/Pavanambulkar/PRIME_GITHUB_PROJECT",

      para: "Prime Video is an on-demand streaming service that's included with an Amazon Prime membership. If you don't have Amazon Prime, you can also sign up for Prime Video on its own.",
    },
    {
      id: 5,
      src: installNode,
      head: "LifeStyleStores - Clone",
      tech: "HTML | CSS | JavaScript | Rest API",
      link1: "https://elastic-volhard-0f1c35.netlify.app/",
      link2: "https://github.com/prithvirajkeerthi/LifeStyleStores",

      para: " In this project we have tried to make a look alike clone of lifestylestore.com website. With our efforts and the technology stack, that we have learned till now in Unit-2 in the masai school.",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b mt-20	 from-white to-white-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  text-black font-bold inline border-b-4 border-pink-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-22 sm:px-0">
          {portfolios.map(({ id, src, para, head, tech, link1, link2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="mt-4 h-fit">
                <h3 className="text-2xl text-gray-700 ml-3 pt-3">{head}</h3>
                <p className="text-black ml-3 pt-1">{para}</p>
                <p className="text-pink-600 ml-3 pt-1">Tech Stack: {tech}</p>
              </div>
              <div className="flex items-center justify-center">
                {/* <button  className="w-1/2 px-6 py-3 text-black m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <a href={link1} target="_blank" rel="noreferrer">
                  <span
                    type="button"
                    className="w-1/2 px-6 py-3 text-black m-4 duration-200 hover:scale-105"
                  >
                    Deploy
                  </span>
                </a>

                <a href={link2} target="_blank" rel="noreferrer">
                  <span
                    type="button"
                    className="w-1/2 px-6 py-3 text-black m-4 duration-200 hover:scale-105"
                  >
                    Github
                  </span>
                </a>

                {/* <button className="w-1/2 px-6 text-black py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
