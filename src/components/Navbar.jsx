import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lekgoloTumisoLogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CV from '../assets/Lekgolo_Tumiso_Sefomolo_Cv.pdf'; // Import your CV file

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Social Icons and Download CV Button */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* Download CV Button */}
        <a
          href={CV}
          download="Lekgolo_Tumiso_Sefomolo_CV.pdf"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          aria-label="Download CV"
        >
          Download CV
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/lekgolosefomolo/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/LekgoloTumi"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;