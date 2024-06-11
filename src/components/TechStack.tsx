import React from "react";
import tech1 from "../assets/tech1.webp";
import tech2 from "../assets/tech2.png";
import tech3 from "../assets/tech3.png";
import tech4 from "../assets/tech4.png";
import tech5 from "../assets/tech5.webp";
import tech6 from "../assets/tech6.png";
import tech7 from "../assets/tech7.png";
import tech8 from "../assets/tech8.png";
import tech9 from "../assets/tech9.png"
import tech10 from "../assets/tech10.png"
import tech11 from "../assets/tech11.png"
const techStackImages = [
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  tech9,
  tech10,
  tech11
];

export const TechStack: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-26 overflow-hidden pt-10">
      <div className="flex space-x-16 px-2 transition-all animate-marquee">
        {techStackImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Tech ${index + 1}`}
            className="h-12 object-contain   w-auto"
          />
        ))}
      </div>
    </div>
  );
};
