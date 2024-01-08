import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaInstagram />, link: "https://www.instagram.com/brunoalexco/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/corneliobruno/" },
  { Social: <FaGithub />, link: "https://github.com/brunoalexco" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
