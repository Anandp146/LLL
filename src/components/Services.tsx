import React from "react";
import ServiceCard from "./ServiceCard";

export const Services = () => {
  const servicesData = [
    {
      title: "Website Development",
      description:
        "Crafting captivating web solutions: From sleek corporate websites to dynamic online experiences, we design with a focus on detail and our clients' business goals, ensuring stunning visuals and seamless user engagement.",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating intuitive and engaging mobile applications tailored to your business needs. Our apps offer seamless performance and a great user experience on both iOS and Android platforms.",
    },
    {
      title: "Digital Marketing",
      description:
        "Developing comprehensive digital marketing strategies that enhance online presence, drive traffic, and increase conversions. Our services include SEO, SEM, social media marketing, and content creation.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric interfaces that are visually appealing and easy to use. Our approach ensures a smooth user experience and enhances customer satisfaction.",
    },
    {
      title: "Cloud Services",
      description:
        "Providing scalable and secure cloud solutions that help businesses achieve operational efficiency. Our services include cloud migration, management, and support.",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center md:p-14 px-4 lg:mx-[100px] lg:px-20 sm:py-20 ">
        <div className="flex-1 max-w-3xl space-y-8 lg:space-y-16 text-center lg:text-left">
          <h1 className="text-5xl font-inter font-bold lg:text-6xl">
            Unlock Our{" "}
            <span className="text-[#00CB7C]">
              <br className="hidden lg:inline relative" />
              Services
              {/* <svg
                width="227"
                className="absolute -bottom-2 sm:bottom-[-67.5rem] sm:left-[25rem]  md:left-36 sm:w-[26%]  md:w-1/3 lg:left-28 w-[45%]  lg:w-3/5"
                height="13"
                viewBox="0 0 227 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.01339C8.69976 9.33472 42.9259 5.66925 50.2316 6.10186C81.2987 7.94151 38.648 13.8935 68.9567 9.2922C88.1829 6.37339 95.3851 6.08635 114.919 4.73465C136.481 2.00007 206.842 2.00001 225 2"
                  stroke="#00CB7C"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg> */}
            </span>
          </h1>
          <p className="text-[#505050] lg:w-[478px] text-lg font-poppins font-medium ">
            We craft innovative & intuitive solutions that not only meet but
            exceed our clients' business goals, seamlessly blending creativity
            and functionality to{" "}
            <span className="text-green-500">drive success</span>
          </p>
        </div>
        <div className="flex-1 max-w-3xl h-auto lg:h-[340px] py-6 px-6 lg:px-10 overflow-y-scroll hide-scrollbar mt-8 lg:mt-0">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
