import React from "react";
import footerlogo from "../assets/footerlogo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-3 sm:px-10 flex flex-row items-center justify-center  bottom-0 w-full z-50">
      <div className="mb-4 sm:mb-0 sm:ml-4 flex justify-center mt-2 sm:mt-1 mx-auto  items-center  w-full sm:w-auto">
        <img src={footerlogo} alt="Logo" className="lg:h-12 lg:mr-2" />
      </div>
      <div className="flex-grow text-center w-full mb-1 sm:mb-0 sm:w-auto">
        Copyright © 2024 Laugh Logic Labs
      </div>
    </footer>
  );
};

export default Footer;
