import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="mb-4 p-4 sm:p-6 lg:p-8 border rounded-lg shadow-lg max-w-full md:max-w-3xl lg:max-w-2xl xl:max-w-lg mx-auto">
      <Icon className="mb-4 mx-auto text-green-500" size={50} />
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
        {title}
      </h1>
      <p className="text-gray-600 py-2 md:py-4 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
