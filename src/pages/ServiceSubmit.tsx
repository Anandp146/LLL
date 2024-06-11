import * as React from "react";
import s from "../assets/service.png";

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type }) => {
  return (
    <div className="flex flex-col mb-6">
      <label
        htmlFor={id}
        className="mb-2 text-lg md:text-xl font-medium text-[#444444]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="p-3 border border-gray-300 bg-[#F0F0F0] rounded-2xl focus:outline-none focus:border-emerald-500"
        required
      />
    </div>
  );
};

function ServiceSubmit() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4 py-12 md:px-0 bg-emerald-500 bg-opacity-10">
      <div className="w-full max-w-screen-xl">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col self-stretch my-auto font-bold tracking-tighter text-center text-black md:text-left md:text-5xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b536f8022e67d600757b2a1c2c082a8051e4787a772d5d69d704826e739c9e4f?apiKey=269233b1bf574b0686a7b412b7b3ae53&"
                alt=""
                className="aspect-square w-[45px] mx-auto md:mx-0"
              />
              <div className="my-6 md:my-12">
                <span className="text-3xl text-neutral-700">
                  Submit your details,{" "}
                </span>
                <br />
                <span className="text-4xl text-black">
                  Receive a quote in 24 hr!
                </span>
              </div>
              <img
                loading="lazy"
                src={s} // Adjust the image source
                alt=""
                className="mt-8 w-full aspect-[1.41] md:mt-24"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-6/12 md:ml-5">
            <form className="flex flex-col w-full px-4 py-16 text-lg font-medium tracking-tighter bg-white shadow-sm grow md:px-16 md:py-16 md:text-2xl rounded-xl text-neutral-700">
              <InputField label="Name" id="name" type="text" />
              <InputField label="Email" id="email" type="email" />
              <InputField label="Phone" id="phone" type="tel" />
              <InputField label="Share your idea" id="idea" type="text" />
              <button
                className="justify-center items-center self-center px-10 py-4 font-sans font-medium mt-8 md:mt-20 max-w-full text-white bg-emerald-800 rounded-3xl border border-emerald-800 border-solid w-full md:w-[353px]"
                type="submit"
              >
                Get your Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSubmit;
