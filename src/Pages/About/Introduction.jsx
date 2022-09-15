import React from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import profile from "../../Image/my-img.png"



export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src={profile}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
              Hello! My name is <span className="different">Pavan Ambulkar </span>{" "}
                from <span className="different"> Amravati Maharashtra</span> I am
                an Aspiring Full Stack Web Developer. An optimistic and
                self-motivated individual, looking forward to working within the
                IT industry.
              </h4>
                 
              <h4>My Interests</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Movie.
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Bead 16 Game.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};