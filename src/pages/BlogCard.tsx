import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCard = ({ imageSrc, title }) => (
  <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-2 m-2 sm:w-[480px] md:w-[564px] lg:w-[564px] max-w-full flex-grow">
    <img
      src={imageSrc}
      alt="Article"
      className="object-cover w-full rounded-md h-40 sm:h-48 md:h-60"
    />
    <div className="flex flex-row items-center justify-between mt-4 w-full">
      <h2 className="text-lg font-bold text-black w-1/2">{title}</h2>
      <div className="flex flex-col items-end">
        <div className="flex flex-row text-[16px] space-x-2  text-gray-600">
          <span className="ml-2">5 min read</span>
          <span>May 30, 2024</span>
        </div>
        <button className="text-green-500 flex items-center font-bold mt-4">
          Read More <FaLongArrowAltRight className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);

export default BlogCard;
