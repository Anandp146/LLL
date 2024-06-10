import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient"; // Adjust the import path as necessary
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
  const navigate = useNavigate();

  const navigateToWork = (websiteName: string) => {
    switch (websiteName.toLowerCase()) {
      case "mvsir.in":
        navigate("/mvsir");
        break;
      case "caption point":
        navigate("/captionPoint");
        break;
      case "shahiethnicware.in":
        navigate("/shahi");
        break;
      case "sobujpotro.com":
        navigate("/sobujPutra");
        break;
      case "apsthreeai.ai":
        navigate("/threeAi");
        break;
      default:
        console.error(`No route found for website name: ${websiteName}`);
    }
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
    <div className="flex flex-col pt-12 lg:min-h-screen justify-between">
      <div className="flex flex-col lg:flex-row justify-around items-center bg-white p-6 lg:p-10">
        <div className="flex flex-col text-3xl lg:text-4xl my-4 lg:my-8 font-bold lg:mr-8">
          <div className="flex flex-row items-center mb-2 lg:mb-4">
            <img
              src={work1}
              className="w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mr-4"
              alt=""
            />
            <span>Smart</span>
          </div>
          <div className="flex flex-row items-center mb-2 lg:mb-4">
            <img
              src={work2}
              alt=""
              className="w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mr-4"
            />
            <span>Business aligned</span>
          </div>
          <div className="flex flex-row items-center">
            <img
              src={work3}
              alt=""
              className="w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mr-4"
            />
            <h1>
              Success Driven <span className="text-[#00CB7C]">Solutions</span>
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-[445px] flex items-start text-[#676767]">
          <span className="text-green-700 text-3xl -mt-2 lg:text-4xl">
            &ldquo;
          </span>
          <div className=" w-full lg:w-[400px] text-lg lg:text-2xl font-medium h-auto flex flex-col justify-center">
            <span className="block">
              &nbsp;We craft intuitive products aligned
            </span>
            <span className="block">
              with our client's business goals.&nbsp;
              <span className=" text-green-700 text-3xl lg:text-4xl">
                &rdquo;
              </span>
            </span>
          </div>
        </div>
      </div>

      {workItems.map((workItem, index) => (
        <div
          key={workItem.id}
          className="rounded-lg w-full mx-auto p-6 lg:p-10 overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${index % 2 === 0 ? bgimg2 : bgimg1})`,
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <div className="w-full sm:w-11/12 lg:w-1/2 mx-0 md:mx-6 rounded-2xl align-middle flex flex-col justify-center items-center ">
              <img
                src={workItem.websiteImageUrl}
                alt={workItem.websiteName}
                className="w-full mt-9 h-[412px] object-cover rounded-2xl"
              />
            </div>

            <div className="w-full h-[340px] sm:w-11/12 lg:w-full p-4 justify-center align-middle lg:p-8 shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] box-border text-white">
              <div className="h-[30px] lg:h-[40px] w-[30px] lg:w-[50px] my-2 object-fill flex justify-start items-center rounded-xl">
                <img
                  className="object-fill"
                  alt=""
                  src={workItem.logoImageUrl}
                />
              </div>
              <p
                className={`h-auto my-4 lg:my-6 text-justify text-sm md:text-[14px] ${
                  index % 2 !== 0 ? "text-black" : "text-white"
                }`}
              >
                {workItem.description}
              </p>

              <div className="flex flex-wrap space-x-2 my-4 lg:my-10">
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
                className={`bg-transparent border py-2 px-4 lg:px-6 w-full sm:w-[50%] lg:w-[30%] md:w-full sm:text-lg lg:text-xl font-bold text-lg lg:text-xl rounded-full transition duration-1000 ${
                  index % 2 === 0
                    ? "text-white border-white hover:bg-black hover:border-white"
                    : "text-black border-black hover:bg-black hover:text-white"
                }`}
                onClick={() => navigateToWork(workItem.websiteName)}
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
