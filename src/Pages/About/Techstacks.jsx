import React from "react";
import "./Techstacks.css";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiExpress,
  SiHtml5,
  SiMaterialui,
  SiNetlify,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { SiChakraui } from "react-icons/si";
import { TbBrandBootstrap, TbBrandVercel } from "react-icons/tb";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>REDUX</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>TYPESCRIPT</h5>
          </div>
          
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <SiChakraui />
            <h5>Chakra Ui</h5>
          </div>
          
         
          <div>
          <FaNodeJs />
          <h5>Node Js</h5>
          </div>
          <div>
          <SiExpress />
          <h5>Express</h5>
          </div>
          <div>
          <DiMongodb />
          <h5>MongoDb</h5>
          </div>
          <div>
          <TbBrandBootstrap/>
          <h5>BootStrap</h5>
          </div>
        </div>
      </div>
    </>
  );
};