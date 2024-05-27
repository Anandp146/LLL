import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="mb-4 p-4 md:p-6 lg:p-8 border rounded-lg shadow-lg max-w-lg mx-auto">
      <svg
        className="mb-4 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        width="50px"
        fill="#00a339"
        viewBox="0 0 640 512"
      >
        <path
          fill="#63E6BE"
          d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
        />
      </svg>
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
        {title}
      </h1>
      <p className="text-gray-600 py-2 md:py-4 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
