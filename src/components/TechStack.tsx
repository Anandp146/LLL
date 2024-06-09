import React from "react";
import tech1 from "../assets/tech1.webp";
import tech2 from "../assets/tech2.webp";
import tech3 from "../assets/tech3.webp";
import tech4 from "../assets/tech4.webp";
import tech5 from "../assets/tech5.webp";
import tech6 from "../assets/tech6.webp";
import tech7 from "../assets/tech7.webp";

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
];

export const TechStack: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-22 overflow-hidden pt-10">
      <div className="flex space-x-20 px-2 transition-all animate-marquee">
        {techStackImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Tech ${index + 1}`}
            className="h-16 object-contain   w-auto"
          />
        ))}
      </div>
    </div>
  );
};
