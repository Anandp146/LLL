import React from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaLink } from "react-icons/fa";
import blogbanner1 from "../assets/blogbanner1.png";
import blogImage1 from "../assets/blogImage1.png";
import blogcenter from "../assets/blogcenter.png";
import blogcenter2 from "../assets/blogcenter2.png";
import blogartical1 from "../assets/blogartical1.png";
import blogartical2 from "../assets/blogartical2.png";
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
  const articles: { imageSrc: string; title: string }[] = [
    {
      imageSrc: blogartical1,
      title: "Engaging Digital UI/UX Strategies",
    },
    {
      imageSrc: blogartical2,
      title: "Effective Web Development Practices",
    },
    {
      imageSrc: blogartical1,
      title: "Latest Trends in Technology",
    },
    {
      imageSrc: blogartical2,
      title: "Designing for Mobile First",
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
          <aside className="flex flex-col items-center   ">
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

      <section className="w-full  lg:px-8 md:px-8 px-4 justify-between">
        <div className="flex flex-col md:flex-row gap-5">
          <Image
            src={blogImage1}
            alt="CRM Power with Web"
            className="w-full md:w-2/3 lg:mx-16 shadow-sm md:mt-10"
          />
          <div className="flex flex-col lg:mx-4 mx-2 md:ml-0  md:w-full lg:w-1/3">
            <div className="flex flex-col grow px-5 mt-1 text-black md:mt-10 md:max-w-full">
              <div className="flex mb-4 space-x-4 text-black">
                <span>May 30, 2024</span>
                <span>5 min read</span>
              </div>
              <h1 className="mt-5 md:text-4xl font-bold tracking-tighter leading-10 text-3xl md:leading-9">
                Unleashing CRM Power with Web
              </h1>
              <div className="flex gap-2 self-end mt-12 text-xs max-md:mt-10 max-md:mr-2">
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

      <section className="flex lg:px-10 lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-5 md:gap-3 lg:mt-16 md:mt-10 w-full text-justify md:flex-wrap  md:max-w-full">
        <aside className="flex flex-col  items-center lg:items-start lg:justify-start justify-center self-start px-4 my-10 text-lg font-bold leading-9 text-emerald-800 mx-7 md:text-base md:leading-7">
          <h2 className="self-stretch text-center lg:text-left md:text-xl">
            Share this article
          </h2>

          <div className="flex flex-row items-center space-x-4 mt-4 md:flex-col md:items-start md:space-x-0 md:space-y-3 lg:items-center lg:space-y-4">
            <FaLinkedin size={24} className="w-6 h-6" />
            <FaTwitter size={24} className="w-6 h-6" />
            <FaWhatsapp size={24} className="w-6 h-6" />
            <FaLink size={24} className="w-6 h-6" />
          </div>
        </aside>
        <div className="flex flex-col grow shrink-0 lg:px-20 px-10 text-base leading-9 basis-0 text-black text-opacity-80 w-full md:max-w-full">
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
          <div className="mt-3 italic text-zinc-500 text-center">
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

      <div className="flex-col py-20 mx-14 ">
        <h1 className=" font-inter mx-3 lg:text-4xl my-6 text-[#006D43] text-2xl font-bold">
          Checkout Trending articles
        </h1>

        <div className="overflow-x-auto whitespace-nowrap hide-scrollbar py-4">
          <div className="flex flex-row space-x-4 ">
            {articles.map((blog, index) => (
              <BlogCard
                key={index}
                imageSrc={blog.imageSrc}
                title={blog.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
