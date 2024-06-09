import * as React from "react";
import s from "../assets/service.png";

type InputFieldProps = {
  label: string;
  id: string;
  type: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, id, type }) => (
  <div className="flex flex-col mt-12 ml-5 max-md:mt-10 max-md:ml-2.5">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={label}
      className="mt-3.5 rounded-3xl bg-zinc-100 bg-opacity-60 h-[58px] max-md:max-w-full"
      aria-label={label}
    />
  </div>
);

function ServiceSubmit() {
  return (
    <div className="flex justify-center w-full min-h-screen items-center px-4 py-12 md:px-0 bg-emerald-500 bg-opacity-10">
      <div className="w-full max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col self-stretch my-auto text-center md:text-left md:text-5xl font-bold tracking-tighter text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b536f8022e67d600757b2a1c2c082a8051e4787a772d5d69d704826e739c9e4f?apiKey=269233b1bf574b0686a7b412b7b3ae53&"
                alt=""
                className="aspect-square w-[45px] mx-auto md:mx-0"
              />
              <div className="mt-8 md:mt-16">
                <span className="text-4xl text-neutral-700">
                  Submit your details,{" "}
                </span>
                <br />
                <span className="text-5xl text-black">
                  Receive a quote in 24 hr!
                </span>
              </div>
              <img
                loading="lazy"
                src={s}
                alt=""
                className="mt-8 w-full aspect-[1.41] md:mt-24"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-6/12 md:ml-5">
            <form className="flex flex-col grow px-4 py-16 md:px-16 md:py-16 w-full text-lg md:text-2xl font-medium tracking-tighter bg-white rounded-xl shadow-sm text-neutral-700">
              <InputField label="Name" id="name" type="text" />
              <InputField label="Email" id="email" type="email" />
              <InputField label="Phone" id="phone" type="tel" />
              <InputField label="Share your idea" id="idea" type="text" />
              <button
                className="justify-center items-center self-center px-16 py-5 mt-8 md:mt-20 max-w-full text-white bg-emerald-800 rounded-3xl border border-emerald-800 border-solid w-full md:w-[353px]"
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
