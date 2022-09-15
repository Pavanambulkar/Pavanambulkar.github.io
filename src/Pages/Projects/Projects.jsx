import React from "react";
import "./Projects.css";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import sendin from "../../Image/Sendin.png";
import zappos from "../../Image/zappos.png";
import prime from "../../Image/prime.png";
import expedia from "../../Image/expedia.png";
import lifestyle from "../../Image/lifestyle.png";



const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={sendin} alt="Animoto" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>SendinBlue Clone</h2>
              <p>
                Sendinblue is the only all-in-one digital marketing platform
                empowering B2B and B2C businesses, ecommerce sellers and
                agencies to build customer relationships through end to end
                digital marketing campaigns, transactional messaging, and
                marketing automation.
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://enormous-underwear-686.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pavanambulkar/enormous-underwear-686"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={zappos} alt="Zappos" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Zappos - Clone</h2>
              <p>
                Zappos is one of the fastest growing online Shopping portals in
                Asia, offering Shopping an extensive selection of Men, Women
                and  Kids Products to Enjoy every moment and activities of
                every kind  at competitive rates.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://pavanambulkar.github.io/Zappos_web_clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pavanambulkar/Zappos_web_clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={prime}
                  alt="Prime Video"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Amazon Prime Video - Clone</h2>
              <p>
              Prime Video is an on-demand streaming service that's included with
                 an Amazon Prime membership. If you don't have Amazon Prime, you
                 can also sign up for Prime Video on its own. You can watch
                 thousands of titles on Prime Video, including many award-winning
                 movies, original programs, and critically acclaimed TV series.
              </p>
              <div>
                
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://github.com/Pavanambulkar/PRIME_GITHUB_PROJECT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://pavanambulkar.github.io/PRIME_GITHUB_PROJECT/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={expedia}
                  alt="Expedia"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Expedia Clone</h2>
              <p>
              Expedia is one of the fastest growing online travel portals in
                Asia, offering travellers an extensive selection of hotels,                 activities and travel services to meet every budget and activities                 of every kind at competitive rates.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://jolly-tulumba-a0bccf.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/kiranwithcode/Expedia_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>








        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={lifestyle}
                  alt="lifestyle"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>LifeStyleStores Clone</h2>
              <p>
              This a website where an user can be able to buy the premium
                 clothes, and accessories. In this project we have tried to make a
                 look alike clone of lifestylestore.com website. With our efforts
                 and the technology stack.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://elastic-volhard-0f1c35.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/prithvirajkeerthi/LifeStyleStores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>









      </div>
    </>
  );
};

export { Projects };


