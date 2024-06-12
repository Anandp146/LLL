import * as React from "react";
import {
  FaChevronRight,
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";
import bg from "../assets/bg.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
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
  <div className="flex flex-col mt-5 md:mt-3.5 ml-5 md:ml-2.5">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={label}
      className="mt-3.5 rounded-3xl bg-zinc-100 bg-opacity-60 h-[58px] max-w-full"
      aria-label={label}
    />
  </div>
);

const cardData = [
  {
    image: s1,
    title: "Web",
    subtitle: "Development",
    description:
      "A website is your brand’s most vital showcase to customers. Our portfolio highlights modern appealing designs that deliver exceptional UX.",
    icon: <FaGlobe className="w-8 h-8 text-[#6D6D6D]" />,
  },
  {
    image: s2,
    title: "UI/UX",
    subtitle: "Design",
    description:
      "Expertise in crafting user-centric UI/UX designs that enhance engagement and provide a flawless user journey.",
    icon: <FaPaintBrush className="w-8 h-8 text-[#6D6D6D]" />,
  },
  {
    image: s3,
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
    <section className="relative overflow-hidden flex flex-col justify-center items-center px-8 py-12 md:px-16 md:py-20 bg-cover bg-center bg-no-repeat border border-solid border-black border-opacity-0 md:min-h-[723px]">
      <img
        loading="lazy"
        src={iconSrc}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative flex flex-col items-center max-w-screen-lg w-full mt-10 md:mt-20 mb-10 md:mb-32">
        <div className="flex flex-col gap-3 md:gap-5 items-center font-bold text-black text-4xl md:text-5xl lg:text-7xl">
          {children}
        </div>
        <p className="mt-5 text-lg text-center text-emerald-800 md:text-2xl md:max-w-2xl">
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
        className="flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-6 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="flex flex-col items-center w-full   gap-6 text-center ">
          <h1 className="text-2xl  lg:text-5xl font-bold flex gap-4">
            Vision <FaChevronRight className="w-6 h-6 md:w-8 md:h-8" /> Craft{" "}
            <FaChevronRight className="w-6 h-6 md:w-8 md:h-8" /> Code
          </h1>
          <p className="text-green-700  md:text-center lg:mx-auto max-w-[700px]">
            From brainstorming breakthrough ideas to scaling your vision, we
            craft software solutions that empower your business journey.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-center px-6 py-8 mx-auto bg-transparent lg:-mt-60 -mt-60">
        <div className="grid grid-cols-1 lg:space-x-6 space-y-6 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-auto bg-transparent"
              style={{ maxWidth: "358px" }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[351px] object-cover rounded-lg"
              />
              <div className="flex justify-between my-4">
                <h3 className="text-2xl font-bold">
                  {card.title}{" "}
                  <span className="text-[#00CB7C] font-bold">
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
