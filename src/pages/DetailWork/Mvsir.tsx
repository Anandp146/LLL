import React, { useEffect, useRef, useState } from "react";
import hero from "../../assets/Hero (1).webp";
import herovideo from "../../assets/mvVideo.mp4";
import {
  FaFigma,
  FaLongArrowAltRight,
  FaQuoteRight,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import homepage from "../../assets/webPage.webp";
import s1 from "../../assets/s1.webp";
import s2 from "../../assets/s2.webp";
import AdminDash from "../../assets/Admin Panel Dashboard 1 (1).webp";
import Quiz from "../../assets/Admin Quiz (1) 1 (1).webp";
import casestudy from "../../assets/Rectangle 26.webp";
import grid from "../../assets/grid dots.webp";
const Mvsir: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVideoPlay = () => {
      console.log("Video started playing");
      setShowVideo(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handleVideoPlay);
      console.log("Event listener added to video");
      return () => {
        videoElement.removeEventListener("play", handleVideoPlay);
      };
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement
          .play()
          .then(() => {
            setShowVideo(true);
          })
          .catch((error) => {
            console.error("Error playing video: ", error);
          });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" justify-center items-center w-full  ">
      <div
        className="w-full flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-20"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* <div className="bg-white   w-full mx-auto  sm:max-w-5xl "> */}
        <div className="w-full my-20 mx-20 h-auto shadow-lg rounded-xl ">
          <video
            ref={videoRef}
            className="w-full h-full object-contain rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={herovideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* </div> */}
      </div>
      <div className="my-20 justify-center items-center w-full">
        <p className="px-4 sm:px-20  text-xl text-justify font-poppins font-medium text-[#565656] justify-start lg:text-left">
          MV Sir's website is your premier destination for CA education.
          Offering CA Foundation and Intermediate books and classes, the site
          provides comprehensive resources. Renowned for simplifying complex
          concepts with engaging examples, MV Sir ensures your success in the CA
          journey. Discover meticulously crafted educational tools today.
        </p>
      </div>
      <div className=" font-sans  justify-center px-16 items-center w-full">
        <h1 className="text-3xl font-bold">
          <span className="text-green-500"> Tech</span> used
        </h1>
        <div className="flex flex-col space-x-3 md:flex-row font-poppins font-medium my-6">
          <button className="p-6 text-center justify-center my-3 w-auto rounded-md bg-[#F5F7F9] h-[61px]  flex items-center gap-2">
            <FaFigma className="text-lg" />
            Figma
          </button>
          <button className="p-6 text-center justify-center my-3 w-auto rounded-md bg-[#F5F7F9] h-[61px]  flex items-center gap-2">
            <IoLogoJavascript className="text-yellow-400 bg-black border-none" />
            JavaScript
          </button>
          <button className="p-6 text-center justify-center my-3 w-auto rounded-md bg-[#F5F7F9] h-[61px]  flex items-center gap-2">
            <FaReact className="text-lg text-blue-400" />
            React
          </button>
        </div>
      </div>
      <div className="bg-[#00CB7C] bg-opacity-5 flex flex-col items-start justify-center md:flex-row h-auto w-full my-20 p-6 lg:p-8">
        <div className="flex-1 space-y-6 lg:p-20 p-10">
          <div>
            <p className="text-base lg:text-[25px] my-2 text-gray-600">
              Industry
            </p>
            <h2 className="text-xl lg:text-3xl font-bold">EDUCATION</h2>
          </div>
          <div>
            <p className="text-base lg:text-[25px] my-2 text-gray-600">
              Project Duration
            </p>
            <h2 className="text-xl lg:text-3xl font-bold">1 MONTH</h2>
          </div>
          <div>
            <p className="text-base lg:text-[25px] my-2 text-gray-600">
              Services Provided
            </p>
            <ul className="list-disc list-inside font-bold text-base lg:text-3xl">
              <li>WEB DEVELOPMENT</li>
              <li>WEB DESIGN</li>
              <li>WEB DEPLOYMENT</li>
            </ul>
          </div>

          <button
            type="button"
            className="focus:outline-none text-white bg-[#006D43] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg my-6 px-6 py-2.5 me-2 mb-2"
          >
            Visit Website
          </button>
        </div>
        <div className="flex-1 space-y-6 lg:p-20 p-10 flex justify-center lg:justify-end">
          <img
            src={homepage}
            alt="Homepage Screenshot"
            className="object-contain rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 w-full flex flex-col justify-between">
        <h1 className="text-3xl md:text-4xl font-bold my-10 text-[#006D43] lg:text-4xl">
          Intuitive Admin Dashboard
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="lg:w-1/2 text-[17px] text-justify text-[#4C4C4C]">
            The admin dashboard showcases a sleek and intuitive interface for
            efficient online educational platform management. A comprehensive
            navigation menu provides access to various sections like orders,
            products, quizzes, and student information. Key metrics like total
            revenue, revenue split, orders, and user count are prominently
            displayed. The central revenue graph visualizes weekly revenue
            trends for easy tracking & analysis. The clean, modern design
            prioritizes usability and data-driven decision-making for
            administrators.
          </p>
          <div className="text-right sm:items-center sm:justify-center  font-poppins items-end text-2xl font-bold space-y-3 mt-6 lg:mt-0">
            <p>Admin Dashboard</p>
            <p>Host Quizzes</p>
            <p>About & Glimpses</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
          <img
            src={s1}
            alt="Image 1"
            className="w-full  lg:w-full object-contain"
          />
          <img
            src={s2}
            alt="Image 2"
            className="w-full  lg:w-full object-contain"
          />
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-20 w-full flex flex-col justify-between">
        <h1 className="text-3xl md:text-4xl font-bold my-10 text-[#006D43] lg:text-4xl">
          Seamless Shopping Experience
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="lg:w-1/2 text-[17px] text-justify text-[#4C4C4C]">
            Our e-commerce platform offers a visually appealing, user-friendly
            interface for seamless online shopping of CA books. Homepage
            highlights featured textbooks, deals, & personalized
            recommendations. Intuitive navigation and search options facilitate
            easy discovery, while detailed listings with images, descriptions,
            and reviews aid informed decisions. A streamlined checkout process
            ensures secure transactions. User accounts enable order tracking,
            wishlists, and personalized recommendations. The modern design
            prioritizes an exceptional shopping experience through intuitive
            navigation and data-driven personalization.
          </p>
          <div className="text-right sm:items-center sm:justify-center  font-poppins items-end text-2xl font-bold space-y-3 mt-6 lg:mt-0">
            <p>E-commerce</p>
            <p>Quizzes</p>
            <p>Resources</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start p-10 ">
        <div className="flex flex-col md:flex-row justify-center items-start gap-4">
          <img
            src={AdminDash}
            alt="Image 1"
            className="w-full  object-contain"
          />
          <img src={Quiz} alt="Image 2" className="w-full  object-contain" />
        </div>
      </div>
      <div className="w-full px-4 py-10 md:p-20">
        <div className="w-full p-6 md:p-10 bg-[#F2FCF8] flex flex-col rounded-lg">
          <div className="flex flex-row justify-between items-start md:items-center">
            <div className="flex flex-col px-0 md:px-10">
              <h1 className="text-2xl md:text-3xl my-3 text-[#006D43] font-semibold">
                Mohnish Vora
              </h1>
              <p className="text-[#727272]">Founder & CEO</p>
            </div>
            <FaQuoteRight className="text-4xl text-[#006D43] mt-4 md:mt-0" />
          </div>
          <p className="px-0 md:px-10 my-5 text-justify font-poppins text-[#727272] w-full md:w-[70%]">
            Laugh Logic Labs has been an invaluable part of the MV Team. They’ve
            patiently iterated designs to fit our vision and feature
            requirements, and given us guidance on the best design practices
            while having our users, stakeholders, and a beautiful output in
            mind.
          </p>
        </div>
      </div>
      {/* <div className="w-full flex flex-col lg:flex-row items-center my-10 justify-center px-4 lg:px-10">
        <div className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={casestudy}
            className="w-full max-w-md relative"
            alt="Case Study"
          />
          <img
            src={grid}
            className="absolute -z-10 -top-10 right-20"
            alt="Grid"
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-2xl p-6 lg:p-9 border bg-white shadow-lg rounded-lg my-8">
          <h1 className="text-xl md:text-2xl font-sans font-semibold text-gray-800">
            <span className="text-green-500">More</span> Case Studies
          </h1>
          <h1 className="text-4xl md:text-4xl font-bold text-black my-6">
            Caption Point
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            CaptionPoint is a cutting-edge app that enhances your social media
            with powerful caption tools. Effortlessly craft and customize
            captions with a vast library of pre-made options.
          </p>
          <button className="text-green-500 flex items-center mt-4">
            Read More <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>
      </div> */}
      <div className="relative w-full flex flex-col lg:flex-row items-center my-10 justify-center px-4 lg:px-20">
        <div className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img src={casestudy} className="w-full max-w-md" alt="Case Study" />
          <img
            src={grid}
            className="absolute -z-10 top-[50%]  transform -translate-y-1/2 lg:top-20 lg:right-20"
            alt="Grid"
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-2xl p-6 lg:p-9 border bg-white shadow-lg rounded-lg my-8">
          <h1 className="text-xl md:text-2xl font-sans font-semibold text-gray-800">
            <span className="text-green-500">More</span> Case Studies
          </h1>
          <h1 className="text-4xl md:text-4xl font-bold text-black my-6">
            Caption Point
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            CaptionPoint is a cutting-edge app that enhances your social media
            with powerful caption tools. Effortlessly craft and customize
            captions with a vast library of pre-made options.
          </p>
          <button className="text-green-500 flex items-center font-bold mt-4">
            Read More <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mvsir;
