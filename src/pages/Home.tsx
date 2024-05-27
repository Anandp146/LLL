import React, { FC } from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import { Services } from "../components/Services";
import { TechStack } from "../components/TechStack";
import { FaArrowRight } from "react-icons/fa";
import Work from "../components/Work";
import ellipse from "../assets/Ellipse 3.png";
import ContactForm from "../components/contact";

export const Home: FC = () => {
  return (
    <>
      <div className="items-center justify-center lg:min-h-screen flex flex-col xl:flex-row xl:space-x-12">
        <div className="px-14 flex items-center justify-center flex-col space-y-1 xl:relative lg:relative lg:mt-20 lg:px-20 py-10 pt-10">
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
            src="https://img.freepik.com/free-photo/phone-7-plus-display-apple-computers-website_1142-59579.jpg?t=st=1716377478~exp=1716381078~hmac=a11bd4490456c8cca7a8c70fc304ec391da9b1f80882fba885c9141e333dde85&w=360"
            alt="Phone Display"
          />
        </div>
        <div className="p-1 flex-1 relative sm:w-1/2">
          <h1 className="text-3xl xl:text-6xl font-bold text-left px-12 -mt-6 xl:-mt-20 relative">
            Elevating Brands through Digital{" "}
            <span className="text-[#00CB7C]">Revolution</span>
          </h1>

          <div className="flex flex-col xl:flex-row xl:items-start pt-10">
            <div className="p-6 flex flex-col justify-center space-y-8 xl:ml-[300px]">
              <h2 className="text-lg xl:pr-10 xl:mt-40 xl:text-xl text-left">
                Embrace innovation with our{" "}
                <span className="text-green-500">
                  precision-crafted software
                </span>{" "}
                solutions, lifting your business with elegance & efficiency.
              </h2>
              <button className="bg-green-700 text-white text-2xl rounded-2xl px-6 xl:w-full p-4 text-left flex items-center justify-between">
                <span>Get Quotation</span>
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <TechStack />
      <Services />
      <Work />
      <div className="mb-10">
        <ContactForm />
      </div>
    </>
  );
};
