// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaWhatsapp,
//   FaAngleDown,
//   FaAngleUp,
// } from "react-icons/fa";
// import logo from "../assets/logo.webp";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const whatsappLink = `https://wa.me/919328808448?text="hey"`;
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-white px-6 md:px-12 shadow-md h-[71.35px] fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center py-3">
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-12 mr-2" />
//         </Link>
//         <div className="hidden md:flex space-x-6 items-center">
//           <div className="relative" onClick={toggleDropdown}>
//             <span className="flex items-center cursor-pointer">
//               Services {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
//             </span>
//             {isDropdownOpen && (
//               <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md">
//                 <Link
//                   to="/service"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Service 1
//                 </Link>
//                 <Link
//                   to="/service"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Service 2
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link to="/work" className="hover:text-gray-700">
//             Work
//           </Link>
//           <Link to="/blog" className="hover:text-gray-700">
//             Blog
//           </Link>

//           <Link
//             to="/contact"
//             className="flex items-center space-x-1 hover:text-gray-700"
//           >
//             <span>Contact Us</span>
//             <FaWhatsapp className="text-green-500" />
//           </Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-xl focus:outline-none">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
//             Home
//           </Link>
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100"
//             >
//               Services {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
//             </button>
//             {isDropdownOpen && (
//               <div className="pl-4">
//                 <Link
//                   to="/service1"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Service 1
//                 </Link>
//                 <Link
//                   to="/service2"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Service 2
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link to="/work" className="block px-4 py-2 hover:bg-gray-100">
//             Work
//           </Link>
//           <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
//             Blog
//           </Link>

//           {/* <Link
//             to="/contact"
//             className="block px-4 py-2 flex items-center space-x-1 hover:bg-gray-100"
//           >
//             <span>Contact Us</span>

//             <FaWhatsapp className="text-green-500" />
//           </Link> */}
// <div className="px-4 py-2 flex items-center space-x-1 hover:bg-gray-100">
//   <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//     Contact Us on WhatsApp
//   </a>
//   <FaWhatsapp className="text-green-500" />
// </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import logo from "../assets/logo.webp";

const Navbar: React.FC = () => {
  const whatsappLink = `https://wa.me/919328808448?text="hey"`;
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white px-6 md:px-12 shadow-md h-[71.35px] fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative" onClick={toggleDropdown}>
            <span className="flex items-center cursor-pointer">
              Services {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </span>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link
                  to="/service"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  to="/service"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            )}
          </div>
          <Link to="/work" className="hover:text-gray-700">
            Work
          </Link>
          <Link to="/blog" className="hover:text-gray-700">
            Blog
          </Link>
<<<<<<< HEAD
          <div className="px-4 py-2 flex items-center space-x-1 hover:bg-gray-100">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
=======
          <Link to="/about" className="hover:text-gray-700">
            About Us
          </Link>
          <div
            className="px-4 py-2 flex items-center space-x-1 hover:bg-gray-100"
          >
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Contact Us
             </a>
>>>>>>> fc65d9696e75e187d07a09620109318d546c959b
            <FaWhatsapp className="text-green-500" />
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100"
            >
              Services {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            )}
          </div>
          <Link to="/work" className="block px-4 py-2 hover:bg-gray-100">
            Work
          </Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
            Blog
          </Link>
<<<<<<< HEAD
          <div className="px-4 py-2 flex items-center space-x-1 hover:bg-gray-100">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Contact Us on WhatsApp
            </a>
=======
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
            About Us
          </Link>
          <div
            className="px-4 py-2 flex items-center space-x-1 hover:bg-gray-100"
          >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Contact Us on WhatsApp
             </a>
>>>>>>> fc65d9696e75e187d07a09620109318d546c959b
            <FaWhatsapp className="text-green-500" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;