import React from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaLink } from "react-icons/fa";
import blogbanner1 from "../../assets/blogbanner1.png";
import blogImage1 from "../../assets/blog1 image.png";
import blogcenter from "../../assets/blog1center.png";
import blogcenter2 from "../../assets/blog1center2.png";
import blogcenter3 from "../../assets/blog1center3.png";
import blogcenter4 from "../../assets/blog1center4.png";
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

const Blog1: React.FC = () => {
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
      title: "Designing for Mobile First",
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

      <section className="w-full  lg:px-6 md:px-6 px-4 justify-between">
        <div className="flex flex-col md:flex-row gap-3">
          <Image
            src={blogImage1}
            alt="CRM Power with Web"
            className="w-full md:w-2/3 lg:mx-16 shadow-sm md:mt-10"
          />
          <div className="flex flex-col lg:mx-3 mx-1 md:ml-0  md:w-full lg:w-[40%]">
            <div className="flex flex-col grow px-5 mt-1 text-black md:mt-10 md:max-w-full">
              <div className="flex mb-4 space-x-4 text-black">
                <span>May 30, 2024</span>
                <span>5 min read</span>
              </div>
              <h1 className="mt-5 md:text-3xl font-bold tracking-tighter leading-10 text-2xl md:leading-9">
                Why User Experience Design (UED) Matters More Than Ever
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
                In today’s digital age, user experience design (UED) has become
                a crucial component for the success of any digital product.
                Whether you’re developing a website, mobile app, or software,
                the way users interact with your product can significantly
                impact your business outcomes. Here’s why UED matters more than
                ever and how it can transform your digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex lg:px-10 lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-5 md:gap-3 lg:mt-16 md:mt-10 w-full text-justify md:flex-wrap  md:max-w-full">
        <aside className="flex flex-col  items-center lg:items-start lg:justify-start justify-center self-start px-4 my-10 text-lg font-bold leading-9 text-emerald-800 mx-7 md:text-base space-x-4 mt-4 md:flex-col md:items-start md:space-x-0 md:space-y-3 lg:space-y-4 md:leading-7">
          <h2 className="self-stretch text-center lg:text-left md:text-xl">
            Share this article
          </h2>

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
        </aside>
        <div className="flex flex-col grow shrink-0 lg:px-20 px-10 text-base leading-9 basis-0 text-black text-opacity-80 w-full md:max-w-full">
          <p className="md:max-w-full">
            <div className="container mx-auto py-12">
              <div className="prose prose-lg ">
                <p>
                  <strong>1. First Impressions Count</strong>
                  <br />
                  The first interaction a user has with your product can
                  determine their overall perception. A well-designed user
                  experience ensures that users have a positive first
                  impression, increasing the likelihood of them engaging further
                  with your product.
                </p>
                <p>
                  <strong>2. Increased User Satisfaction</strong>
                  <br />
                  UED focuses on understanding users' needs and behaviors to
                  create intuitive and enjoyable experiences. When users find
                  your product easy to navigate and useful, their satisfaction
                  increases, leading to higher retention rates.
                </p>
              </div>
            </div>
          </p>
          <br />
          <Image
            src={blogcenter}
            alt="Real-time data synchronization and accessibility"
            className="self-center mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />
          <p className="md:max-w-full">
            <p>
              <strong>3. Improved Accessibility</strong>
              <br />A good UED ensures that your product is accessible to a wide
              range of users, including those with disabilities. This not only
              broadens your audience but also demonstrates your commitment to
              inclusivity and diversity.
            </p>
            <p>
              <strong>4. Higher Conversion Rates</strong>
              <br />
              Effective UED can guide users seamlessly through the sales funnel,
              making it easier for them to achieve their goals. This can lead to
              higher conversion rates, whether that means more sales, sign-ups,
              or other desired actions.
            </p>
          </p>
          <Image
            src={blogcenter2}
            alt="Real-time data synchronization and accessibility"
            className="self-center mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />
          <p className="mt-10 md:max-w-full">
            <p>
              <strong>5. Reduced Development Costs</strong>
              <br />
              Investing in UED early in the development process can save time
              and money in the long run. By identifying and solving potential
              usability issues before they become costly problems, you can avoid
              expensive redesigns and ensure a smoother development process.
            </p>
            <p>
              <strong>6. Competitive Advantage</strong>
              <br />
              In a crowded digital marketplace, a superior user experience can
              set your product apart from the competition. Companies that
              prioritize UED are more likely to attract and retain customers,
              gaining a significant competitive edge.
            </p>
            <br />
          </p>
          <Image
            src={blogcenter3}
            alt="Real-time data synchronization and accessibility"
            className="self-center mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />
          <p className="mt-10 md:max-w-full">
            <p>
              <strong>7. Enhanced Brand Loyalty</strong>
              <br />
              When users have positive experiences with your product, they are
              more likely to develop loyalty to your brand. Satisfied users are
              not only more likely to return but also to recommend your product
              to others, driving organic growth.
            </p>
          </p>
          <Image
            src={blogcenter4}
            alt="Real-time data synchronization and accessibility"
            className="self-center mt-12 max-w-full aspect-[1.56] w-[544px] md:mt-10"
          />
          <p className="mt-10 md:max-w-full">
            In Conclusion User experience design is no longer a luxury but a
            necessity for any digital product. By prioritizing UED, you can
            improve user satisfaction, increase conversion rates, and gain a
            competitive advantage. In an era where user expectations are higher
            than ever, investing in a superior user experience is a smart
            strategy that can pay significant dividends.
          </p>
        </div>
      </section>

      <div className="flex-col py-20 mx-14 ">
        <h1 className=" font-inter mx-3 lg:text-4xl my-6 text-[#006D43] text-2xl font-bold">
          Checkout Trending articles
        </h1>

        <div className="flex md:overflow-y-scroll  lg:overflow-x-scroll hide-scrollbar md:space-y-4 lg:space-x-4 justify-center py-4">
          <div className="flex lg:flex-row flex-col space-x-4 ">
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

export default Blog1;
