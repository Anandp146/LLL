import React from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaLink } from "react-icons/fa";
import blogbanner1 from "../assets/blogbanner1.png";
import blogImage1 from "../assets/blogImage1.png";
import blogcenter from "../assets/blogcenter.png";
import blogcenter2 from "../assets/blogcenter2.png";
import blogartical1 from "../assets/blogartical1.png";
import blogartical2 from "../assets/blogartical2.png";
import blogartical3 from "../assets/blogartical3.png";
import BlogCard from "./BlogCard";

type CategoryProps = {
  name: string;
  isHighlighted: boolean;
};

const Category: React.FC<CategoryProps> = ({ name, isHighlighted }) => {
  return (
    <article
      className={`text-sm sm:text-base hover:text-[#006D43] hover:underline text-gray-600 md:text-lg mt-2  font-semibold tracking-tight underline  text-opacity-70 ${
        isHighlighted ? "text-emerald-800" : ""
      }`}
    >
      {name}
    </article>
  );
};

type TagProps = {
  text: string;
  className: string;
};

const Tag: React.FC<TagProps> = ({ text, className }) => (
  <div
    className={`justify-center px-5 py-1.5 rounded bg-opacity-30 ${className}`}
  >
    {text}
  </div>
);

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const Blog: React.FC = () => {
  const tags: TagProps[] = [
    { text: "Web Dev", className: "bg-stone-300" },
    { text: "Featured", className: "bg-emerald-500" },
  ];
  const articles: {
    imageSrc: string;
    title: string;
    readTime: string;
    date: string;
  }[] = [
    {
      imageSrc: blogartical1,
      title: "Engaging Digital UI/UX Strategies",
      readTime: "3 Min read",
      date: "27 May 2024",
    },
    {
      imageSrc: blogartical2,
      title: "Building Robust,Scalable Apps ",
      readTime: "3 Min read",
      date: "27 May 2024",
    },
    {
      imageSrc: blogartical3,
      title: "Responsive Design Best Practices",
      readTime: "3 Min read",
      date: "27 May 2024",
    },
    {
      imageSrc: blogartical2,
      title: "Engaging Digital UI/UX Strategies",
      readTime: "3 Min read",
      date: "27 May 2024",
    },
  ];
  const categories: CategoryProps[] = [
    { name: "Web Dev", isHighlighted: true },
    { name: "UI/UX", isHighlighted: false },
    { name: "App Dev", isHighlighted: false },
  ];
  return (
    <div>
      <div
        className=" flex justify-center  items-center mt-12 px-10 py-16 backdrop-blur-[175px] max-md:px-5 w-full bg-center bg-cover  h-72 sm:h-96 md:h-[25rem] lg:flex-row sm:flex-col  "
        style={{ backgroundImage: `url(${blogbanner1})` }}
      >
        <div className="flex gap-5 justify-between items-start w-full max-w-[1230px] max-md:flex-wrap max-md:max-w-full">
          <header className="flex flex-col max-md:max-w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#006D43]  tracking-tighter  max-md:max-w-full max-md:text-4xl">
              Blogs
            </h1>
            <p className="mt-4 text-sm sm:text-base font-medium md:text-lg text-[#505050] tracking-tight  max-md:max-w-full">
              Checkout the insightful blogs crafted by Laugh Logic Labs
            </p>
          </header>
          <aside className="flex items-center mx-auto space-x-10 text-lg lg:space-x-0 lg:mx-0 lg:flex-col">
            {categories.map((category, index) => (
              <Category
                key={index}
                name={category.name}
                isHighlighted={category.isHighlighted}
              />
            ))}
          </aside>
        </div>
      </div>

      <section className="justify-between w-full px-4 lg:px-8 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row">
          <Image
            src={blogImage1}
            alt="CRM Power with Web"
            className="w-full shadow-sm md:w-2/3 lg:mx-16 md:mt-10"
          />
          <div className="flex flex-col mx-2 lg:mx-4 md:ml-0 md:w-full lg:w-1/3">
            <div className="flex flex-col px-5 mt-1 text-black grow md:mt-10 md:max-w-full">
              <div className="flex mb-4 space-x-4 text-black">
                <span>May 30, 2024</span>
                <span>5 min read</span>
              </div>
              <h1 className="mt-5 text-3xl font-bold leading-10 tracking-tighter md:text-4xl md:leading-9">
                Unleashing CRM Power with Web
              </h1>
              <div className="flex self-end gap-2 mt-12 text-xs max-md:mt-10 max-md:mr-2">
                {tags.map((tag) => (
                  <Tag
                    key={tag.text}
                    text={tag.text}
                    className={tag.className}
                  />
                ))}
              </div>
              <div className="shrink-0 mt-1.5 h-px bg-emerald-800 border border-emerald-800 border-solid md:max-w-full" />
              <p className="mt-10 text-base leading-9 text-justify text-black text-opacity-80 md:max-w-full">
                In today's digital landscape, businesses are constantly seeking
                ways to enhance customer relationships and streamline their
                operations. One powerful approach that has gained significant
                traction is leveraging web technologies to supercharge Customer
                Relationship Management (CRM) systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full text-justify lg:px-10 lg:flex-row md:flex-row lg:gap-5 md:gap-3 lg:mt-16 md:mt-10 md:flex-wrap md:max-w-full">
        <div className="flex flex-col w-full px-10 text-base leading-9 text-black grow shrink-0 lg:px-20 basis-0 text-opacity-80 md:max-w-full">
          <p className="md:max-w-full">
            By integrating CRM with web-based solutions, companies can unlock a
            world of possibilities and gain a competitive edge. At the core of
            this powerful combination lies the ability to provide a seamless and
            consistent experience across multiple touch points. Web-based CRM
            solutions enable customers to interact with businesses through
            various channels, including websites, mobile apps, and social media
            platforms. This multichannel approach ensures that customers can
            access the information they need, make inquiries, or initiate
            transactions seamlessly, regardless of their preferred communication
            channel.
          </p>
          <br />
          <p className="md:max-w-full">
            One of the key advantages of web-based CRM is its scalability and
            flexibility. As businesses grow, their CRM systems can easily adapt
            and scale to accommodate increasing customer volumes and data loads.
            Cloud-based solutions further enhance this flexibility by
            eliminating the need for costly on-premises infrastructure and
            enabling seamless updates and enhancements.
          </p>
          <Image
            src={blogcenter}
            alt="Real-time data synchronization and accessibility"
            className="self-center mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />
          <p className="mt-10 md:max-w-full">
            Moreover, web-based CRM systems empower businesses with real-time
            data synchronization and accessibility. Sales teams can access
            up-to-date customer information, account histories, and interaction
            records from anywhere, at any time. This level of accessibility
            fosters better collaboration, informed decision-making, and
            ultimately, improved customer service.
            <br />
            Additionally, web technologies open up a world of integration
            possibilities for CRM systems. By leveraging APIs and web services,
            businesses can seamlessly integrate their CRM with other essential
            tools and platforms, such as marketing automation software,
            e-commerce platforms, and business intelligence systems. This
            integration enables a holistic view of customer data, streamlines
            processes, and optimizes operations.
          </p>
          <Image
            src={blogcenter2}
            alt="Real-time data synchronization and accessibility"
            className="self-center mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />
          <div className="mt-3 italic text-center text-zinc-500">
            Quality Control
          </div>
          <p className="mt-10 md:max-w-full">
            In conclusion, unleashing the power of CRM with web technologies is
            a game-changer for businesses seeking to enhance customer
            relationships, improve operational efficiency, and stay ahead of the
            competition. By embracing this powerful combination, companies can
            unlock new opportunities for growth, foster customer loyalty, and
            position themselves as industry leaders in an ever-evolving digital
            landscape.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center self-start justify-center px-4 my-10 mt-4 space-x-4 text-lg font-bold leading-9 text-emerald-800 mx-7 md:text-base md:flex-col md:items-start md:space-x-0 md:space-y-3 lg:space-y-4 md:leading-7">
  <div className="flex flex-col items-center w-full lg:items-center">
    <h2 className="self-stretch mx-auto mb-4 text-center lg:mb-0 lg:text-left md:text-xl">
      Share this article
    </h2>
    <div className="flex items-center justify-center mt-4 space-x-10 lg:mt-4">
      <div className="w-10 h-10 bg-[#EDEDED] rounded-full flex items-center justify-center">
        <FaLink size={24} className="text-[#006D43]" />
      </div>
      <div className="w-10 h-10 bg-[#EDEDED] rounded-full flex items-center justify-center">
        <FaLinkedin size={24} className="text-[#006D43]" />
      </div>
      <div className="w-10 h-10 bg-[#EDEDED] rounded-full flex items-center justify-center">
        <FaWhatsapp size={24} className="text-[#006D43]" />
      </div>
      <div className="w-10 h-10 bg-[#EDEDED] rounded-full flex items-center justify-center">
        <FaTwitter size={24} className="text-[#006D43]" />
      </div>
    </div>
  </div>
</div>

      <div className="flex-col py-2 mx-10 ">
        <h1 className=" font-inter mx-3 lg:text-4xl my-3 text-[#006D43] text-2xl font-bold">
          Checkout Trending articles
        </h1>

        <div className="flex justify-center py-4 md:overflow-y-scroll lg:overflow-x-scroll hide-scrollbar md:space-y-4 lg:space-x-4">
          <div className="flex flex-col space-x-4 lg:flex-row ">
            {articles.map((blog, index) => (
              <BlogCard
                key={index}
                imageSrc={blog.imageSrc}
                title={blog.title}
                readTime={blog.readTime}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
