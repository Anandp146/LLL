// import React, { FC } from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";

// interface BlogCardProps {
//   imageSrc: string;
//   title: string;
// }

// const BlogCard: FC<BlogCardProps> = ({ imageSrc, title }) => (
//   <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-2 m-2 w-full sm:w-[480px] md:w-[500px] lg:w-[500px] max-w-full">
//     <img
//       src={imageSrc}
//       alt="Article"
//       className="object-cover w-full rounded-md h-40 sm:h-48 md:h-60"
//     />
//     <div className="flex flex-col lg:flex-row md:flex-col items-center justify-between mt-4 w-full">
//       <div className="w-full lg:w-[30%] md:w-full">
//         <div className="text-sm px-3 lg:text-2xl font-bold text-black text-center lg:text-left">
//           {title}
//         </div>
//       </div>
//       <div className="flex flex-col items-center lg:items-end mt-4 lg:mt-0 w-full lg:w-[70%] md:w-full">
//         <div className="flex flex-row text-xs lg:text-base space-x-2 text-gray-600">
//           <span>5 min read</span>
//           <span>May 30, 2024</span>
//         </div>
//         <button className="text-green-500 flex items-center font-bold mt-4 lg:mt-2">
//           Read More <FaLongArrowAltRight className="ml-2" />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default BlogCard;

import React, { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  readTime: string;
  date: string;
}

const BlogCard: FC<BlogCardProps> = ({ imageSrc, title, readTime, date }) => (
  // <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-shrink-0">
  //   <div className="relative">
  //     <img className="w-full" src={imageSrc} alt={title} />
  //     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
  //   </div>
  //   <div className="p-6">
  //     <div className="flex lg:flex-row justify-between md:flex-col">
  //       <h3 className="text-lg sm:text-xl w-[10%] md:text-2xl lg:text-2xl font-bold mb-2">
  //         {title}
  //       </h3>
  // <div className="flex flex-col items-center lg:items-end mt-4 lg:mt-0 w-full lg:w-[50%]">
  //   <div className="flex flex-row text-sm lg:text-base space-x-2 text-gray-600">
  //     <span>{readTime}</span> • <span>{date}</span>
  //   </div>
  //   <button className="text-green-500 flex items-center font-bold mt-4 lg:mt-2">
  //     Read More <FaLongArrowAltRight className="ml-2" />
  //   </button>
  // </div>
  //     </div>
  //   </div>
  // </div>
  <div className="max-w-sm rounded md:w-full shadow-lg m-2 flex-shrink-0">
    <div className="relative">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>
    <div className="p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-3 justify-between md:flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold mb-2">
          {title}
        </h3>

        <div className="flex flex-col items-center mt-4 lg:mt-0 w-full ">
          <div className="flex flex-row text-sm  space-x-2 text-gray-600">
            <span>{readTime}</span> <span>{date}</span>
          </div>
          <button className="text-green-500 flex items-center font-bold mt-4 lg:mt-2">
            Read More <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
