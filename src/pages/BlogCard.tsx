import React, { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface BlogCardProps {
  imageSrc: string;
  title: string;
}

const BlogCard: FC<BlogCardProps> = ({ imageSrc, title }) => (
  <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-2 m-2 w-full sm:w-[480px] md:w-[500px] lg:w-[500px] max-w-full">
    <img
      src={imageSrc}
      alt="Article"
      className="object-cover w-full rounded-md h-40 sm:h-48 md:h-60"
    />
    <div className="flex flex-col lg:flex-row md:flex-col items-center justify-between mt-4 w-full">
      <div className="w-full lg:w-[30%] md:w-full">
        <div className="text-sm px-3 lg:text-2xl font-bold text-black text-center lg:text-left">
          {title}
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-end mt-4 lg:mt-0 w-full lg:w-[70%] md:w-full">
        <div className="flex flex-row text-xs lg:text-base space-x-2 text-gray-600">
          <span>5 min read</span>
          <span>May 30, 2024</span>
        </div>
        <button className="text-green-500 flex items-center font-bold mt-4 lg:mt-2">
          Read More <FaLongArrowAltRight className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);

export default BlogCard;
