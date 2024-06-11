import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaPaintBrush, FaCloud } from "react-icons/fa";
import homeline from "../assets/homeline.png";
export const Services = () => {
  const servicesData = [
    {
      title: "Website Development",
      description:
        "Crafting captivating web solutions: From sleek corporate websites to dynamic online experiences, we design with a focus on detail and our clients' business goals, ensuring stunning visuals and seamless user engagement.",
      Icon: FaLaptopCode
    },
    {
      title: "Mobile App Development",
      description:
        "Creating intuitive and engaging mobile applications tailored to your business needs. Our apps offer seamless performance and a great user experience on both iOS and Android platforms.",
      Icon: FaMobileAlt
    },
    {
      title: "Digital Marketing",
      description:
        "Developing comprehensive digital marketing strategies that enhance online presence, drive traffic, and increase conversions. Our services include SEO, SEM, social media marketing, and content creation.",
      Icon: FaBullhorn
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric interfaces that are visually appealing and easy to use. Our approach ensures a smooth user experience and enhances customer satisfaction.",
      Icon: FaPaintBrush
    },
    {
      title: "Cloud Services",
      description:
        "Providing scalable and secure cloud solutions that help businesses achieve operational efficiency. Our services include cloud migration, management, and support.",
      Icon: FaCloud
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between md:p-14 px-4 lg:mx-20 lg:px-10 sm:py-20 space-y-8 lg:space-y-0">
        <div className="flex-1 max-w-3xl space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold">
            Unlock Our{" "}
            <span className="text-[#00CB7C]">
              <br className="hidden lg:inline" />
              Services
              <br className="hidden lg:inline" />
            <img className=" hidden sm:inline ml-4 sm:mb-10" src={homeline} alt="" />
            </span>
          </h1>
          <p className="text-[#505050] sm:mt-0 lg:w-[478px] text-justify px-4 sm:px-6 lg:px-0 text-lg font-poppins font-medium">
            We craft innovative & intuitive solutions that not only meet but
            exceed our clients' business goals, seamlessly blending creativity
            and functionality to{" "}
            <span className="text-green-500">drive success</span>
          </p>
        </div>
        <div className="flex-1 max-w-3xl h-auto lg:h-[340px] py-6 px-4 sm:px-6 lg:px-10 overflow-y-scroll hide-scrollbar mt-8 lg:mt-0">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};
