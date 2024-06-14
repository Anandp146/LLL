import React from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaLink } from "react-icons/fa";
import blogbanner1 from "../../assets/blogbanner1.png";
import blogImage1 from "../../assets/blog2Image.png";
import blogcenter from "../../assets/blog2 image2.png";
import blogcenter2 from "../../assets/blog2 image3.png";
// import blogcenter3 from "../../assets/blog1center3.png";
// import blogcenter4 from "../../assets/blog1center4.png";
import blogartical1 from "../../assets/blogartical1.png";
import blogartical2 from "../../assets/blogartical2.png";
import blogartical3 from "../../assets/blogartical3.png";
import BlogCard from "../BlogCard";

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

const Blog2: React.FC = () => {
  const tags: TagProps[] = [
    { text: "Web Dev", className: "bg-stone-300" },
    { text: "Featured", className: "bg-emerald-500" },
  ];
  const articles: {
    imageSrc: string;
    title: string;
    readTime: string;
    date: string;
    link: string;
  }[] = [
    {
      imageSrc: blogartical1,
      title: "Engaging Digital UI/UX Strategies",
      readTime: "3 Min read",
      date: "27 May 2024",
      link: "/articles/blog1",
    },
    {
      imageSrc: blogartical2,
      title: "Building Robust,Scalable Apps",
      readTime: "3 Min read",
      date: "27 May 2024",
      link: "/articles/blog2",
    },
    {
      imageSrc: blogartical3,
      title: "Responsive Design Best Practices",
      readTime: "3 Min read",
      date: "27 May 2024",
      link: "/articles/blog3",
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
            className="w-full rounded-xl md:w-2/3 lg:mx-16 shadow-sm md:mt-10"
          />
          <div className="flex flex-col mx-2 lg:mx-4 md:ml-0 md:w-full lg:w-1/3">
            <div className="flex flex-col px-5 mt-1 text-black grow md:mt-10 md:max-w-full">
              <div className="flex mb-4 space-x-4 text-black">
                <span>May 30, 2024</span>
                <span>5 min read</span>
              </div>
              <h1 className="mt-5 text-3xl font-bold leading-10 tracking-tighter md:text-4xl md:leading-9">
                2.How Custom Software Development Can Boost Your Business
                Efficiency?
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
                In today’s fast-paced business environment, efficiency is a key
                determinant of success. Custom software development offers
                tailored solutions that address your unique business challenges,
                streamline operations, and enhance productivity. Here’s how
                custom software development can significantly boost your
                business efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full text-justify lg:px-10 lg:flex-row md:flex-row lg:gap-5 md:gap-3 lg:mt-16 md:mt-10 md:flex-wrap md:max-w-full">
        <div className="flex flex-col w-full px-10 text-base leading-9 text-black grow shrink-0 lg:px-20 basis-0 text-opacity-80 md:max-w-full">
          <p className="md:max-w-full">
            <strong>1. Tailored to Your Specific Needs</strong>
            <br />
            Custom software is designed to meet the specific requirements of
            your business. Unlike off-the-shelf solutions, which often come with
            unnecessary features and limitations, custom software provides
            exactly what you need. This means better alignment with your
            workflows, improved integration with existing systems, and enhanced
            user experience.
          </p>
          <p>
            <strong>2. Scalability</strong>
            <br />
            As your business grows, your software needs will evolve. Custom
            software can be designed with scalability in mind, allowing you to
            easily add new features, users, and capabilities as needed. This
            flexibility ensures that your software remains relevant and
            efficient as your business expands.
          </p>
          <br />
          <Image
            src={blogcenter}
            alt="Real-time data synchronization and accessibility"
            className="self-center rounded-xl mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />
          <p className="mt-10 md:max-w-full">
            <p>
              <strong>3. Increased Productivity</strong>
              <br />
              By automating repetitive tasks and optimizing workflows, custom
              software can significantly increase productivity. Employees can
              focus on high-value activities instead of getting bogged down by
              manual processes. This leads to faster turnaround times, higher
              output, and improved overall efficiency.
            </p>
            <p>
              <strong>4. Enhanced Data Management</strong>
              <br />
              Effective data management is crucial for making informed business
              decisions. Custom software can provide advanced data collection,
              analysis, and reporting capabilities tailored to your specific
              needs. This ensures that you have access to accurate, real-time
              information, enabling better decision-making and strategic
              planning.
            </p>
          </p>
          <p className="mt-10 md:max-w-full">
            <p>
              <strong>5. Improved Integration</strong>
              <br />
              Many businesses use multiple software systems to manage different
              aspects of their operations. Custom software can be designed to
              integrate seamlessly with your existing systems, reducing data
              silos and ensuring a smooth flow of information across the
              organization. This improves coordination and reduces the risk of
              errors.
            </p>
            <p>
              <strong>6. Competitive Advantage</strong>
              <br />
              Custom software gives you a competitive edge by providing unique
              functionalities that off-the-shelf solutions can’t offer. It
              allows you to implement innovative features that differentiate
              your business from competitors, enhance customer satisfaction, and
              drive growth.
            </p>
            <br />
          </p>

          <p className="mt-10 md:max-w-full">
            <p>
              <strong>7. Cost-Effectiveness</strong>
              <br />
              While the initial investment in custom software development may be
              higher than purchasing off-the-shelf solutions, it can be more
              cost-effective in the long run. Custom software reduces the need
              for multiple software licenses, minimizes the costs associated
              with workarounds, and lowers the risk of downtime and
              inefficiencies.
            </p>
          </p>
          <Image
            src={blogcenter2}
            alt="Real-time data synchronization and accessibility"
            className="self-center rounded-xl mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />

          <p className="mt-10 md:max-w-full">
            Custom software development is a strategic investment that can lead
            to substantial improvements in business efficiency. By providing
            tailored solutions that address your unique needs, custom software
            enhances productivity, data management, and overall operational
            effectiveness. In a competitive market, this can be the key to
            sustaining growth and achieving long-term success. Ready to explore
            custom software solutions for your business? Let’s connect and
            discuss how we can help you boost efficiency and drive growth.
            #CustomSoftware #BusinessEfficiency #SoftwareDevelopment
            #Productivity #BusinessGrowth
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
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
