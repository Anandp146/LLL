import React, { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  readTime: string;
  date: string;
}

const BlogCard: FC<BlogCardProps> = ({ imageSrc, title, readTime, date }) => (
  
  <div className="flex-shrink-0 max-w-sm m-2 rounded shadow-lg md:w-full">
    <div className="relative">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>
    <div className="p-6">
      <div className="flex flex-col justify-between lg:flex-row lg:space-x-3 md:flex-col">
        <h3 className="mb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-2xl">
          {title}
        </h3>

        <div className="flex flex-col items-center w-full mt-4 lg:mt-0 ">
          <div className="flex flex-row space-x-2 text-sm text-gray-600">
            <span>{readTime}</span> <span>{date}</span>
          </div>
          <button className="flex items-center mt-4 font-bold text-green-500 lg:mt-2">
            Read More <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
