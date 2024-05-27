import React from "react";
import footerlogo from "../assets/footerlogo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-center fixed bottom-0 w-full z-50">
      <div className="mb-4 sm:mb-0 sm:ml-4 flex justify-center sm:justify-start  mx-auto  items-center  w-full sm:w-auto">
        <img src={footerlogo} alt="Logo" className="lg:h-12 lg:mr-2" />
      </div>
      <div className="flex-grow text-center w-full sm:w-auto">
        Copyright © 2024 Laugh Logic Labs
      </div>
    </footer>
  );
};

export default Footer;
