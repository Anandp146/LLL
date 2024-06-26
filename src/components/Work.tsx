import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgEffect from "../assets/bgEffect.webp";
import workimg1 from "../assets/Rectangle 26.webp";
import workimg2 from "../assets/workimg2.webp";
import workimg3 from "../assets/workimg3.webp";
import workimg4 from "../assets/workimg4.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img4 from "../assets/img4.webp";
import img3 from "../assets/img3.webp";
import { useMediaQuery } from "react-responsive";
const Work: React.FC = () => {
  const tags = ["React", "Node", "MySQL"];
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });
  const navigateToWorkPage = () => {
    window.location.href = "/work";
  };

  const cards = [
    {
      image: workimg1,
      content:
        "CaptionPoint is a cutting-edge app that enhances your social media with powerful caption tools. Effortlessly craft and customize captions with a vast library of pre-made options. Integrate seamlessly with Instagram to save stories and create sleek grid layouts. Elevate your social media presence with Caption Point.",
      icon: img1,
    },
    {
      image: workimg4,
      content:
        "MV Sir's website is your premier destination for CA education. Offering CA Foundation and Intermediate books and classes, the site provides comprehensive resources. Renowned for simplifying complex concepts with engaging examples, MV Sir ensures your success in the CA journey. Discover meticulously crafted educational tools today.",
      icon: img4,
    },
    {
      image: workimg2,
      content:
        "Sobuj Potro in Bolpur Santiniketan offers luxurious, comfortable, and stylish residential villas designed for a sophisticated lifestyle. These well-ventilated 1 BHK, 2 BHK, and 3 BHK villas come with top-notch amenities like a landscaped garden, swimming pool, gym, and clubhouse.",
      icon: img2,
    },
    {
      image: workimg3,
      content:
        "Shahi is your ultimate online destination for elegant ethnic wear. With diverse categories including Koti Kurtas, Sherwanis, and Jodhpuris, the portal offers a rich variety of traditional attire. The Indo-Western collection seamlessly blends tradition with modernity, providing stylish options for every occasion.",
      icon: img3,
    },
  ];

  const settings = {
    dots: false, // Changed dots to false to hide carousel buttons
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
      <div
        className="w-full h-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgEffect})` }}
      >
      <div className="w-full max-w-6xl mx-auto px-7 md:px-0 ">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white font-sans p-16">
          Our{" "}
          <span>
            Work
            <svg
              className="hidden sm:inline -ml-40  sm:-mb-14"
              width="160"
              height="14"
              viewBox="0 0 161 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.49512 7.02536C7.34626 9.5501 59.5372 1.93975 65.9175 2.41027C93.0496 4.41112 34.9878 15.346 61.4575 10.3415C78.2484 7.16689 80.0783 3.88042 97.1376 2.41027C114.544 0.910208 141.639 3.37958 159.082 2.41024"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div className=" lg:w-full   mx-auto">
                <div
                  key={index}
                  className="flex flex-col lg:flex-row  items-center justify-center"
                >
                  <div className="w-full sm:w-11/12  lg:w-2/3 mx-0 h-[300px] md:h-[380px] md:mr-4 rounded-xl flex flex-col justify-center items-center mb-6 lg:mb-0">
                    <img
                      src={card.image}
                      alt="Caption Point Screens"
                      className="w-full h-full object-fit rounded-xl"
                    />
                  </div>

                  <div className="w-full sm:w-11/12 my-10 lg:w-full p-6 md:p-8  shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] box-border text-white">
                    <div className="h-[30px] w-[40px] my-2 flex justify-start items-center rounded-xl">
                      <img className=" object-cover  " alt="" src={card.icon} />
                    </div>
                    <p className=" lg:h-[72.4px] mt-4 text-justify lg:mb-20 sm:mb-8 text-sm md:text-base">
                      {isPhone && card.content.length > 200
                        ? card.content.substring(0, 200) + "..."
                        : card.content}
                    </p>

                    <div className="flex space-x-2 sm:my-12 my-10 sm:flex hidden">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={navigateToWorkPage}
                      className="bg-transparent border-white border px-6 hover:bg-black text-white font-bold text-xl rounded-full transition duration-1000 w-[198px] mt-8 lg:mt-0 p-2"
                    >
                      VISIT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Work;
