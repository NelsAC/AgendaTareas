import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../img/MyLogo.png";
const Header = () => {
  return (
    <header className="py-2 px-4 lg:px-16 flex justify-between bg-black bg-opacity-50">
      <a href="/#">
        <img src={logo} alt="Logo" />
      </a>
      <div className="flex justify-between gap-6 lg:gap-16 items-center">
        <a href="https://www.facebook.com/elvisalarconcahuana">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="text-3xl text-blue-600 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </a>
        <a href="https://www.github.com/NelsonAlarcon">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="text-3xl text-white hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </a>
        <a href="https://www.twitter.com/NelsonAlarconEl">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className="text-3xl text-blue-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
