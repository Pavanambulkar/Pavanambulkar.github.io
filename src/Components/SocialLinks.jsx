import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Pavan_Ambulkar_Resume.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/pavan-a-156447220/",
      style: "rounded-tr-md bg-pink-500",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Pavanambulkar",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:pavanambulkar69@gmail.com",
      style: "bg-pink-500",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      style: "rounded-br-md ",
      download: true,
    },
  ];

  return (
    <div className="flex justify-center mt-6  pb-20">
      <ul className="flex justify-center gap-8">
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={"bg-red-500 " + " " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              type="file"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
