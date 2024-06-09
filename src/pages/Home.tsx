import React, { FC } from "react";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner.webp";
import { Services } from "../components/Services";
import { TechStack } from "../components/TechStack";
import { FaArrowRight } from "react-icons/fa";
import Work from "../components/Work";
import ellipse from "../assets/Ellipse 3.webp";
import ContactForm from "../components/contact";

export const Home: FC = () => {
  return (
    <>
      <div className="items-center  justify-center lg:min-h-screen flex flex-col xl:flex-row xl:space-x-12">
        <div className="px-14 flex my-20 lg:my-0 items-center justify-center flex-col space-y-1 xl:relative lg:relative lg:mt-20 lg:px-20 py-10 pt-10">
          <img
            className="w-full lg:h-[403px] xl:max-w-[700px] rounded-3xl mb-2"
            src={banner1}
            alt="Banner 1"
          />
          <img
            className="w-full lg:h-80 xl:max-w-[500px] rounded-3xl mb-2"
            src={banner2}
            alt="Banner 2"
          />
          <img
            className="w-[371px] object-cover lg:h-[403px] xl:absolute xl:left-[440px] xl:top-[280px] rounded-3xl mb-6 xl:mb-0"
            src={banner3}
            alt="Phone Display"
          />
        </div>
        <div className="p-1 flex-1 relative sm:text-start sm:w-full">
          <h1 className="text-2xl lg:text-3xl  xl:text-6xl font-bold  px-6  w-full -mt-6 xl:-mt-20 relative">
            Elevating Brands through Digital{" "}
            <span className="text-[#00CB7C]">Revolution</span>
          </h1>

          <div className="flex lg:px-14 sm:px-10 flex-col xl:flex-row lg:items-start items-center pt-10">
            <div className="px-6 text-justify sm:p-3 flex flex-col justify-center space-y-8 xl:ml-[300px]">
              <h2 className="text-lg xl:pr-10 sm:px-0  xl:mt-40 xl:text-xl text-justify  ">
                Embrace innovation with our{" "}
                <span className="text-green-500">
                  precision-crafted software
                </span>{" "}
                solutions, lifting your business with elegance & efficiency.
              </h2>
              <button className="bg-green-700 text-white rounded-2xl px-4 py-3 sm:px-6 sm:py-4 lg:text-2xl text-xl w-full lg:w-3/4 flex items-center justify-between">
                <span>Get Quotation</span>
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <TechStack />
      </div>
      <Services />
      <Work />
      <div className="">
        <ContactForm />
      </div>
    </>
  );
};
