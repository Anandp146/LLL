import * as React from "react";
import { FaChevronRight } from "react-icons/fa";
import bg from "../assets/bg.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

import { FaGlobe, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import ServiceSubmit from "./ServiceSubmit";
type SectionProps = {
  title: string;
  iconSrc: string;
  description: string;
  children?: React.ReactNode;
};
type InputFieldProps = {
  label: string;
  id: string;
  type: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, id, type }) => (
  <div className="flex flex-col mt-12 ml-5 max-md:mt-10 max-md:ml-2.5">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={label}
      className="mt-3.5 rounded-3xl bg-zinc-100 bg-opacity-60 h-[58px] max-md:max-w-full"
      aria-label={label}
    />
  </div>
);
const cardData = [
  {
    image: s1, // Replace with your image path
    title: "Web",
    subtitle: "Development",
    description:
      "A website is your brand’s most vital showcase to customers. Our portfolio highlights modern appealing designs that deliver exceptional UX.",
    icon: <FaGlobe className="w-8 h-8 text-[#6D6D6D]" />,
  },
  {
    image: s2, // Replace with your image path
    title: "UI/UX",
    subtitle: "Design",
    description:
      "Expertise in crafting user-centric UI/UX designs that enhance engagement and provide a flawless user journey.",
    icon: <FaPaintBrush className="w-8 h-8 text-[#6D6D6D]" />,
  },
  {
    image: s3, // Replace with your image path
    title: "App",
    subtitle: "Development",
    description:
      "Your app is a vital link to your users. We specialize in creating intuitive, high-performance applications for an engaging and seamless experience.",
    icon: <FaMobileAlt className="w-8 h-8 text-[#6D6D6D]" />,
  },
];
const Section: React.FC<SectionProps> = ({
  title,
  iconSrc,
  description,
  children,
}) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full border border-solid border-black border-opacity-0 min-h-[723px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={iconSrc}
        className="absolute inset-0 object-cover size-full"
        alt=""
      />
      <div className="flex relative flex-col mt-28 mb-52 max-w-full w-[741px] max-md:my-10">
        <div className="flex gap-5 font-bold tracking-tighter text-black text-7xl max-md:flex-wrap max-md:text-4xl">
          {children}
        </div>
        <p className="mt-16 text-2xl text-emerald-800 max-md:mt-10 max-md:max-w-full">
          {description}
        </p>
      </div>
    </section>
  );
};

const Service: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <div
        className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-center bg-cover md:p-8"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="flex flex-col items-center w-full max-w-xs gap-6 text-center md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          <h1 className="flex items-center justify-center gap-3 text-4xl font-bold md:text-5xl">
            Vision{" "}
            <FaChevronRight className="shrink-0 my-auto aspect-square w-[20px] md:w-[30px]" />{" "}
            Craft{" "}
            <FaChevronRight className="shrink-0 my-auto aspect-square w-[20px] md:w-[30px]" />{" "}
            Code
          </h1>
          <p className="text-[#006D43] items-center justify-center text-start lg:mx-36 self-start">
            From brainstorming breakthrough ideas to scaling your vision, we
            craft software solutions that empower your business journey.
          </p>
        </div>
      </div>

      <div className="flex justify-center px-4 py-8 mx-auto bg-transparent lg:-mt-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-auto px-10 bg-transparent "
              style={{ maxWidth: "358px", width: "100%" }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[358px] h-[351px] object-cover rounded-lg"
              />
              <div className="flex justify-between my-4 ">
                <h3 className="flex flex-col text-2xl font-bold ">
                  {card.title}{" "}
                  <span className="text-[#00CB7C]  font-bold">
                    {card.subtitle}
                  </span>{" "}
                </h3>
                {card.icon}
              </div>
              <p className="text-[#6D6D6D] mt-2 text-justify">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ServiceSubmit />
    </main>
  );
};

export default Service;
