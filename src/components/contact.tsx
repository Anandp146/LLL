import React, { useState } from "react";
import contact from "../assets/Frame 5.webp";
import { FaHeart, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  return (
    <div className="mx-auto  md:py-20  bg-[#D0D0D0]">
      <div className="flex justify-center items-center h-auto">
        <div className="flex my-10 mx-8 lg:mx-10  flex-col md:flex-row  rounded-lg overflow-hidden shadow-xl ">
          <img
            src={contact}
            alt="Contact Image"
            className="w-full md:w-1/2 h-auto md:h-[400px] object-cover mb-4 md:mb-0"
          />
          <div className="bg-white p-6 flex flex-col justify-center items-center w-full h-auto md:w-1/2">
            <h2 className="text-3xl font-sans lg:flex-row items-center flex-col gap-3 text-center justify-center font-semibold flex  mb-6">
              We would{"  "}
              <span className="text-green-600">
                <FaHeart />
              </span>
              {"  "}
              to hear from you
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 p-4 w-full">
              <div className="flex flex-col md:flex-row md:space-x-4 w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full md:w-1/2 text-[12px] font-bold text-[#505050] h-[50px] md:h-[auto] border-[#006D43] border-2 rounded-md"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full md:w-1/2 text-[12px] font-bold text-[#505050] h-[50px] md:h-[auto] border-[#006D43] border-2 rounded-md"
                  placeholder="Your Email"
                  required
                />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 p-2 w-full border-[#006D43] text-[12px] font-bold text-[#505050] border-2   rounded-md resize-none"
                placeholder="Your Message"
                required
              />
              <div className="relative">
                <button
                  type="submit"
                  className="bg-[#006D43] hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full md:w-[167px] h-[40px]"
                >
                  Submit
                </button>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2 mr-2">
                  <FaLinkedinIn className="text-[#006D43] text-2xl md:text-xl sm:text-lg" />
                  <FaInstagram className="text-[#006D43] text-2xl md:text-xl sm:text-lg" />
                  <FaWhatsapp className="text-[#006D43] text-2xl md:text-xl sm:text-lg" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// import React, { useState } from "react";
// import axios from "axios";
// import contact from "../assets/Frame 5.webp";
// import { FaHeart, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3000/send-email", formData);
//       toast.success("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       toast.error("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className="mx-auto md:py-20 bg-[#D0D0D0]">
//       <div className="flex justify-center items-center h-auto">
//         <div className="flex my-10 mx-10 flex-col md:flex-row rounded-lg overflow-hidden shadow-xl">
//           <img
//             src={contact}
//             alt="Contact Image"
//             className="w-full md:w-1/2 h-auto md:h-[400px] object-cover rounded-l-lg mb-4 md:mb-0"
//           />
//           <div className="bg-white p-6 flex flex-col justify-center items-center w-full h-auto md:w-1/2 rounded-r-lg">
//             <h2 className="text-3xl font-sans lg:flex-row items-center flex-col gap-3 text-center justify-center font-semibold flex mb-6">
//               We would{" "}
//               <span className="text-green-600">
//                 <FaHeart />
//               </span>{" "}
//               to hear from you
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4 p-4 w-full">
//               <div className="flex flex-col md:flex-row md:space-x-4 w-full">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full md:w-1/2 text-[12px] font-bold text-[#505050] h-[50px] md:h-[auto] border-[#006D43] border-2 rounded-md"
//                   placeholder="Your Name"
//                   required
//                 />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full md:w-1/2 text-[12px] font-bold text-[#505050] h-[50px] md:h-[auto] border-[#006D43] border-2 rounded-md"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 className="mt-1 p-2 w-full border-[#006D43] text-[12px] font-bold text-[#505050] border-2 rounded-md resize-none"
//                 placeholder="Your Message"
//                 required
//               />
//               <div className="relative">
//                 <button
//                   type="submit"
//                   className="bg-[#006D43] hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full md:w-[167px] h-[40px]"
//                 >
//                   Submit
//                 </button>
//                 <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2 mr-2">
//                   <FaLinkedinIn className="text-[#006D43] text-2xl md:text-xl sm:text-lg" />
//                   <FaInstagram className="text-[#006D43] text-2xl md:text-xl sm:text-lg" />
//                   <FaWhatsapp className="text-[#006D43] text-2xl md:text-xl sm:text-lg" />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ContactForm;
