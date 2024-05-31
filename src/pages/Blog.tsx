import React from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaLink } from "react-icons/fa";
import blogbanner1 from "../assets/blogbanner1.png";
import blogImage1 from "../assets/blogImage1.png";
import blogcenter from "../assets/blogcenter.png";
import blogcenter2 from "../assets/blogcenter2.png";
import blogartical1 from "../assets/blogartical1.png";
import blogartical2 from "../assets/blogartical2.png";
export const Blog = () => {
  return (
    <div>
      <div
        className="relative w-full bg-center bg-cover h-80"
        style={{ backgroundImage: `url(${blogbanner1})` }}
      >
        <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
          <h1 className="ml-14 text-6xl font-bold text-[#006D43]">Blogs</h1>
          <h6 className="ml-14 mt-2 text-lg text-[#505050]">
            Checkout the insightful blogs crafted by Laugh Logic Labs
          </h6>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 text-[#505050]">
          <h5 className="text-lg mr-14">Web Dev</h5>
          <h5 className="text-lg mr-14">UI/UX</h5>
          <h5 className="text-lg mr-14">App Dev</h5>
        </div>
      </div>

      <div className="flex pb-10 mt-10">
        <img src={blogImage1} alt="Blog" className="w-2/3 h-72 ml-14" />
        <div className="flex-grow ml-6 mr-14">
          <div className="flex mb-4 space-x-4 text-black">
            <span>May 30, 2024</span>
            <span>5 min read</span>
          </div>
          <h2 className="mb-2 text-2xl font-bold">
            Unleashing CRM Power with Web
          </h2>
          <div
            className="border-b-2 border-[#006D43] mb-4"
            style={{ width: "40%" }}
          ></div>
          <p className="text-justify mr-14">
            In today's digital landscape, businesses are constantly seeking ways
            to enhance customer relationships and streamline their operations.
            One powerful approach that has gained significant traction is
            leveraging web technologies to supercharge Customer Relationship
            Management (CRM) systems.
          </p>
        </div>
      </div>

      <div className="flex flex-row pb-10 mt-10 ml-14 mr-14">
        <div className="flex flex-col w-1/2 mt-20 text-[#006D43]">
          <h3 className="mb-4 text-xl font-bold">Share this article</h3>
          <div className="flex flex-col p-4 mt-2 space-y-2">
            <FaLinkedin size={30} />
            <FaTwitter size={30} />
            <FaWhatsapp size={30} />
            <FaLink size={30} />
          </div>
        </div>
        <div className="ml-6 text-justify mr-14">
          <p>
            By integrating CRM with web-based solutions, companies can unlock a
            world of possibilities and gain a competitive edge. At the core of
            this powerful combination lies the ability to provide a seamless and
            consistent experience across multiple touch points. Web-based CRM
            solutions enable customers to interact with businesses through
            various channels, including websites, mobile apps, and social media
            platforms. This multichannel approach ensures that customers can
            access the information they need, make inquiries, or initiate
            transactions seamlessly, regardless of their preferred communication
            channel.<br></br>
            <br></br>
            One of the key advantages of web-based CRM is its scalability and
            flexibility. As businesses grow, their CRM systems can easily adapt
            and scale to accommodate increasing customer volumes and data loads.
            Cloud-based solutions further enhance this flexibility by
            eliminating the need for costly on-premises infrastructure and
            enabling seamless updates and enhancements.
          </p>
        </div>
      </div>
      <div className="flex-col ml-8 mb-14">
        <img src={blogcenter} alt="" className="mx-auto mb-4 -mt-4" />
        <div className="text-justify ml-60 mr-28">
          <p>
            Moreover, web-based CRM systems empower businesses with real-time
            data synchronization and accessibility. Sales teams can access
            up-to-date customer information, account histories, and interaction
            records from anywhere, at any time. This level of accessibility
            fosters better collaboration, informed decision-making, and
            ultimately, improved customer service.
            <br></br>
            <br></br>
            Additionally, web technologies open up a world of integration
            possibilities for CRM systems. By leveraging APIs and web services,
            businesses can seamlessly integrate their CRM with other essential
            tools and platforms, such as marketing automation software,
            e-commerce platforms, and business intelligence systems. This
            integration enables a holistic view of customer data, streamlines
            processes, and optimizes operations.
          </p>
        </div>
      </div>
      <div className="flex-col mb-6 ml-8">
        <img src={blogcenter2} alt="" className="mx-auto mb-4 -mt-4" />
        <div className="text-justify ml-60 mr-28">
          <p>
            In conclusion, unleashing the power of CRM with web technologies is
            a game-changer for businesses seeking to enhance customer
            relationships, improve operational efficiency, and stay ahead of the
            competition. By embracing this powerful combination, companies can
            unlock new opportunities for growth, foster customer loyalty, and
            position themselves as industry leaders in an ever-evolving digital
            landscape.
          </p>
        </div>
      </div>
      <div className="flex-col pb-32 ml-14">
        <h1 className=" text-[#006D43] text-4xl font-bold">
          Checkout Trending articles
        </h1>
        <div className="flex py-4 overflow-x-scroll">
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-4 min-w-[300px]">
            <img
              src={blogartical1}
              alt="Article"
              className="object-cover w-full rounded-md h-60"
            />
            <div className="flex flex-row items-center justify-between mt-4">
              <h2 className="w-1/2 text-lg font-bold text-black ">
                Engaging Digital UI/UX Strategies
              </h2>
              <div className="flex flex-col items-end">
                <div className="flex flex-row text-sm text-gray-600">
                  <span>May 30, 2024</span>
                  <span className="ml-2">•</span>
                  <span className="ml-2">5 min read</span>
                </div>
                <div className="flex flex-row items-center text-[#006D43] mt-2">
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
