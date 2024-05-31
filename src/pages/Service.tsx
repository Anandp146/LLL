import * as React from "react";

type SectionProps = {
  title: string;
  iconSrc: string;
  description: string;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  title,
  iconSrc,
  description,
  children,
}) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full border border-solid border-black border-opacity-0 min-h-[723px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={iconSrc}
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <div className="flex relative flex-col mt-28 mb-52 max-w-full w-[741px] max-md:my-10">
        <div className="flex gap-5 text-7xl font-bold tracking-tighter text-black max-md:flex-wrap max-md:text-4xl">
          {children}
        </div>
        <p className="mt-16 text-2xl text-emerald-800 max-md:mt-10 max-md:max-w-full">
          {description}
        </p>
      </div>
    </section>
  );
};

type VisionCraftCodeProps = {
  titleParts: { part: string; iconSrc: string }[];
  description: string;
};

const VisionCraftCode: React.FC<VisionCraftCodeProps> = ({
  titleParts,
  description,
}) => {
  return (
    <Section
      iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/58abf2fb86e81637c9d9623b122dceec0f4f2b136e236d29165631246c9c9caa?apiKey=d4948a4ed41848e8a0448a26948a1d1a&"
      description={description}
    >
      {titleParts.map((item, index) => (
        <React.Fragment key={index}>
          <div className="grow max-md:text-4xl">{item.part} </div>
          <img
            loading="lazy"
            src={item.iconSrc}
            className="shrink-0 my-auto aspect-square w-[30px]"
            alt=""
          />
        </React.Fragment>
      ))}
    </Section>
  );
};

const Service: React.FC = () => {
  return (
    <main className="flex flex-col">
      <div className="w-full border border-solid bg-gray-500 bg-opacity-30 border-gray-500 border-opacity-30 min-h-[1px] max-md:max-w-full" />
      <VisionCraftCode
        titleParts={[
          {
            part: "Vision",
            iconSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/55730e8dae828c5d217a690bcaf4cf44f95cb9f0f3093d184c1b58737c44950d?apiKey=d4948a4ed41848e8a0448a26948a1d1a&",
          },
          {
            part: "Craft",
            iconSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/55730e8dae828c5d217a690bcaf4cf44f95cb9f0f3093d184c1b58737c44950d?apiKey=d4948a4ed41848e8a0448a26948a1d1a&",
          },
          {
            part: "Code",
            iconSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/55730e8dae828c5d217a690bcaf4cf44f95cb9f0f3093d184c1b58737c44950d?apiKey=d4948a4ed41848e8a0448a26948a1d1a&",
          },
        ]}
        description="From brainstorming breakthrough ideas to scaling your vision, we craft software solutions that empower your business journey."
      />
    </main>
  );
};

export default Service;
