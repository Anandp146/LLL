import React, { useEffect, useState } from "react";
import bgEffect from "../assets/bgEffect.webp";
import quote from "../assets/image-removebg-preview (5) 1.webp";
import workimg from "../assets/Rectangle 26.webp";
// import { useHistory } from "react-router-dom";
import workimg1 from "../assets/Rectangle 26.webp";
import workimg2 from "../assets/workimg2.webp";
import workimg3 from "../assets/workimg3.webp";
import workimg4 from "../assets/workimg4.webp";
// import { useHistory } from "react-router-dom";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img4 from "../assets/img4.webp";
import img3 from "../assets/img3.webp";

const Work: React.FC = () => {
  const tags = ["React", "Node", "MySQL"];
  // const history = useHistory();

  const navigateToWorkPage = () => {
    window.location.href = "/work";
  };
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
  return (
    <div
      className="   w-full -z-10 sm:p-10 md:p-8  flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgEffect})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute bg-[#006d43a1] bg-center  bg-opacity-80 justify-center  w-full h-full"></div> */}

      <div className=" relative flex flex-col items-center sm:my-14  justify-center px-4  md:px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white font-sans p-16">
          Our Work
        </h2>
        <div className=" lg:w-full   mx-auto">
          <div className="flex flex-col lg:flex-row  items-center justify-center">
            <div className="w-full sm:w-11/12  lg:w-1/2 mx-0 h-[380px] md:mx-6 rounded-xl flex flex-col justify-center items-center mb-6 lg:mb-0">
              <img
                src={cards[currentCard].image}
                alt="Caption Point Screens"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="w-full sm:w-11/12 my-10 lg:w-full p-6 md:p-8  shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] box-border text-white">
              <div className="h-[30px] w-[40px] my-2 flex justify-start items-center rounded-xl">
                <img
                  className=" object-cover  "
                  alt=""
                  src={cards[currentCard].icon}
                />
              </div>
              <p className=" h-[72.4px] mt-4 text-justify mb-20 text-sm md:text-base">
                {cards[currentCard].content}
              </p>

              <div className="flex space-x-2 sm:my-12 my-10">
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
                className="bg-transparent border-white border py-2 px-6 hover:bg-black text-white font-bold text-xl rounded-full transition duration-1000 w-[198px]"
              >
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
