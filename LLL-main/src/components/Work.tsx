import React from "react";
import bgEffect from "../assets/bgEffect.png";
import quote from "../assets/image-removebg-preview (5) 1.png";
import workimg from "../assets/Rectangle 26.png";

const Work: React.FC = () => {
  return (
    <div
      className=" relative min-h-screen w-full z-[-1]    flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgEffect})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bg-[#006d43a1] bg-opacity-80 z-1 w-full min-h-screen"></div>

      <div className="flex flex-col items-center z-10 justify-center px-4   md:px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white font-sans p-20">
          Our Work
        </h2>
        <div className="lg:max-w-4xl lg:w-[1240px]   mx-auto">
          <div className="flex flex-col lg:flex-row  items-center justify-center">
            <div className="w-full md:w-1/2 bg-purple-700 mx-0 md:mx-6 rounded-xl flex flex-col justify-center items-center mb-6 lg:mb-0">
              <img
                src={workimg}
                alt="Caption Point Screens"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-11/12 p-6 md:p-8 sm:mb-12 shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] box-border text-white">
              <div className="h-[40px] w-[40px] bg-white my-2 flex justify-center items-center rounded-xl">
                <img
                  className="h-[40px] w-[36.41px] object-cover"
                  alt=""
                  src={quote}
                />
              </div>
              <p className="mb-4 text-sm md:text-base">
                CaptionPoint is a cutting-edge app that enhances your social
                media with powerful caption tools. Effortlessly craft and
                customize captions with a vast library of pre-made options.
                Integrate seamlessly with Instagram to save stories and create
                sleek grid layouts. Elevate your social media presence with
                Caption Point.
              </p>
              <div className="flex space-x-2 mb-4">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                  #React
                </span>
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                  #Node
                </span>
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                  #MySQL
                </span>
              </div>
              <button className="bg-transparent border-white border py-2 px-6 hover:bg-black text-white font-bold text-xl rounded-full transition duration-1000 w-[198px]">
                VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
