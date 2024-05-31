import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient"; // Adjust the import path as necessary
// import bgEffect from "../assets/bgEffect.png";
// import quote from "../assets/image-removebg-preview (5) 1.png";
import bgimg1 from "../assets/workBg1.webp";
import bgimg2 from "../assets/workBg2.webp";
import work1 from "../assets/workicon1.webp";
import work2 from "../assets/workicon2.webp";
import work3 from "../assets/workicon3.webp";
type WorkItem = {
  id: number;
  websiteName: string;
  description: string;
  tags: string[];
  websiteImageUrl: string;
  logoImageUrl: string;
};

const WorkPage: React.FC = () => {
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const navigateToWork = () => {
    window.location.href = "/detailedwork";
  };
  useEffect(() => {
    const fetchWorkItems = async () => {
      const { data, error } = await supabase.from("work").select("*");

      if (error) {
        console.error("Error fetching work items:", error);
      } else {
        console.log(data);
        setWorkItems(data);
      }
    };

    fetchWorkItems();
  }, []);

  return (
    <div className="flex flex-col   pt-12 pb-12 lg:pt-16 lg:pb-16  lg:min-h-screen  justify-between">
      <div className="top-12 flex flex-col lg:flex-row justify-around items-center bg-white p-10">
        <div className="flex flex-col text-4xl my-8 lg:my-16 font-bold lg:mr-8">
          <div className="flex flex-row items-center mb-4 lg:mb-8">
            <img
              src={work1}
              className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-4"
              alt=""
            />
            <span className="text-4xl ">Smart</span>
          </div>
          <div className="flex flex-row items-center mb-4 lg:mb-8">
            <img
              src={work2}
              alt=""
              className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-4"
            />
            <span className="text-4xl ">Business aligned</span>
          </div>
          <div className="flex flex-row items-center">
            <img
              src={work3}
              alt=""
              className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-4"
            />
            <h1 className="text-4xl ">
              Success Driven <span className=" text-[#00CB7C]">Solutions</span>
            </h1>
          </div>
        </div>

        <div className=" w-full lg:w-[425px] items-center text-[#676767] ">
          <span className="text-green-700 text-5xl">&ldquo; </span>
          <span className="w-[400px] text-2xl font-medium h-[99px] justify-center ">
            We craft intuitive products aligned with our client's business
            goals.
          </span>
          <span className="text-green-700 text-5xl">&rdquo;</span>
        </div>
      </div>

      {workItems.map((workItem, index) => (
        <div
          key={workItem.id}
          className={`   rounded-lg w-full mx-auto p-10 overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-center bg-cover bg-center`}
          style={{
            backgroundImage: `url(${index % 2 === 0 ? bgimg2 : bgimg1})`,
          }}
        >
          <div className="flex flex-col lg:flex-row  items-center justify-center p-6 lg:p-10 w-full">
            <div className="w-full sm:w-11/12  lg:w-1/2 mx-0 object-cover  h-[340px] md:mx-6 rounded-2xl flex flex-col justify-center items-center mb-6 lg:mb-0  ">
              <img
                src={workItem.websiteImageUrl}
                alt={workItem.websiteName}
                className="w-full h-full md:object-cover object-cover  sm:object-cover rounded-2xl"
              />
            </div>

            <div className="w-full sm:w-11/12  lg:w-full p-6 md:p-8  shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] box-border text-white">
              <div className="h-[40px] w-[50px] my-2 object-fill flex justify-start items-center rounded-xl">
                <img
                  className="object-fill"
                  alt=""
                  src={workItem.logoImageUrl}
                />
              </div>
              <p
                className={`h-[72.4px] my-6 text-sm md:text-[14px]  ${
                  index % 2 !== 0 ? "text-black" : "text-white"
                }`}
              >
                {workItem.description}
              </p>

              <div className="flex space-x-2 my-10">
                {workItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                className={` bg-transparent border py-2 px-6 w-full sm:w-[30%] md:w-full sm:text-xl font-bold text-xl rounded-full transition duration-1000 ${
                  index % 2 === 0
                    ? "text-white border-white hover:bg-black hover:border-white"
                    : "text-black border-black hover:bg-black hover:text-white"
                }`}
                onClick={navigateToWork}
              >
                SEE CASE STUDY
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkPage;
