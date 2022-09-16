import React from "react";
import resume from "../assets/Pavan_Ambulkar_Resume.pdf";
const Resume = () => {
  return (
    <div>
      <a
        href={resume}
        download="Pavan_Ambulkar_Resume"
        type="file"
        className="link link--nav"
        target="_blank"
        rel="noreferrer"
      ></a>{" "}
    </div>
  );
};

export default Resume;
