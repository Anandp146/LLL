import React from "react";
import tech1 from "../assets/tech1.png";
import tech2 from "../assets/tech2.png";
import tech3 from "../assets/tech3.png";
import tech4 from "../assets/tech4.png";
import tech5 from "../assets/tech5.png";
import tech6 from "../assets/tech6.png";
import tech7 from "../assets/tech7.png";

const techStackImages = [tech1, tech2, tech3, tech4, tech5, tech6, tech7];

export const TechStack: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-22 overflow-hidden pt-10">
      <div className="flex space-x-6 animate-marquee">
        {techStackImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Tech ${index + 1}`}
            className="h-10 w-auto"
          />
        ))}
      </div>
    </div>
  );
};
