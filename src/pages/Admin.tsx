// import React from "react";
// import supabase from "../config/supabaseClient";

// const Admin: React.FC = () => {
// const handleLogin = async () => {
//   try {
//     const { data, error } = await supabase.auth.signInWithOtp({
//       email: "skalaria9@gmail.com",
//     });

//     if (error) {
//       console.error("Error logging in:", error.message);
//       alert(`Login Error: ${error.message}`);
//     } else {
//       console.log("OTP sent successfully:", data);
//       alert("OTP sent successfully. Check your email.");
//     }
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     alert("Unexpected error occurred during login.");
//   }
// };

// const handleSignup = async () => {
//   try {
//     const { data, error } = await supabase.auth.signUp({
//       email: "skalaria9@gmail.com",
//       password: "sahilkalu@123",
//     });

//     if (error) {
//       console.error("Error signing up:", error.message);
//       alert(`Signup Error: ${error.message}`);
//     } else {
//       console.log("Signup successful:", data);
//       alert("Signup successful. Check your email for verification.");
//     }
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     alert("Unexpected error occurred during signup.");
//   }
// };
// const handleinvite = async () => {
//   let { data, error } = await supabase.auth.admin.inviteUserByEmail(
//     "skalaria9@gmail.com"
//   );
//   if (data) {
//     console.log(data);
//   } else if (error) {
//     console.log(error);
//   }
// };

//   return (
//     <div className="min-h-screen flex flex-col xl:flex-row xl:space-x-12 items-center justify-center">
//       <div className="flex flex-col space-y-6 xl:space-y-0 xl:relative lg:relative lg:mt-20 lg:px-20 py-10 px-6 xl:px-0 xl:w-1/2">
//         <h1 className="text-3xl font-bold text-center lg:text-left">
//           Admin Dashboard
//         </h1>
//         <p className="text-lg text-center lg:text-left">
//           Welcome back, Admin. Manage your platform efficiently.
//         </p>
//         <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 items-center justify-center lg:justify-start">
//           <button
//             onClick={handleLogin}
//             className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//           <button
//             onClick={handleSignup}
//             className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition duration-300"
//           >
//             Sign Up
//           </button>
// <button
//   onClick={handleinvite}
//   className="bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
// >
//   Invite
// </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;
// import React, { useState, useEffect } from "react";
// import supabase from "../config/supabaseClient";
// import UpdateModal from "./updateModal";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Admin: React.FC = () => {
//   const [workItems, setWorkItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedWorkItem, setSelectedWorkItem] = useState(null);

//   useEffect(() => {
//     fetchWorkItems();
//   }, []);

//   const fetchWorkItems = async () => {
//     try {
//       setLoading(true);
//       const { data, error } = await supabase.from("work").select("*");
//       if (error) {
//         throw error;
//       }
//       setWorkItems(data);
//     } catch (error: any) {
//       console.error("Error fetching data:", error.message);
//       toast.error(`Error fetching data: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

// const handleDelete = async (id: string) => {
//   try {
//     const { error } = await supabase.from("work").delete().eq("id", id);
//     if (error) {
//       throw error;
//     }
//     toast.success("Item deleted successfully!");
//     fetchWorkItems(); // Refresh the list
//   } catch (error: any) {
//     console.error("Error deleting item:", error.message);
//     toast.error(`Error deleting item: ${error.message}`);
//   }
// };

// const handleEdit = (item: any) => {
//   setSelectedWorkItem(item);
// };

// const handleCloseModal = () => {
//   setSelectedWorkItem(null);
// };

// const handleUpdate = () => {
//   fetchWorkItems();
// };

//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-gray-100">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         Admin Dashboard
//       </h1>
//       {loading ? (
//         <div className="flex justify-center items-center h-full">
//           <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//             <thead>
//               <tr className="bg-blue-500 text-white">
//                 <th className="py-3 px-4 border-b">ID</th>
//                 <th className="py-3 px-4 border-b">Website Name</th>
//                 <th className="py-3 px-4 border-b">Description</th>
//                 <th className="py-3 px-4 border-b">Tags</th>
//                 <th className="py-3 px-4 border-b">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {workItems.map((item) => (
//                 <tr key={item.id} className="hover:bg-gray-100">
//                   <td className="py-3 px-4 border-b text-center">{item.id}</td>
//                   <td className="py-3 px-4 border-b text-center">
//                     {item.websiteName}
//                   </td>
//                   <td className="py-3 px-4 border-b text-left">
//                     {item.description}
//                   </td>
//                   <td className="py-3 px-4 border-b text-center">
//                     {item.tags}
//                   </td>
//                   <td className="py-3 px-4 flex border-b text-center space-x-2">
//                     <button
//                       onClick={() => handleEdit(item)}
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       {selectedWorkItem && (
//         <UpdateModal
//           workItem={selectedWorkItem}
//           onClose={handleCloseModal}
//           onUpdate={handleUpdate}
//         />
//       )}
//     </div>
//   );
// };

// export default Admin;

import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import { User } from "@supabase/supabase-js";
import UpdateModal from "./updateModal";
import WebsiteForm from "./WebsiteForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin: React.FC = () => {
  const [workItems, setWorkItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedWorkItem, setSelectedWorkItem] = useState(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  useEffect(() => {
    checkUser();
    fetchWorkItems();
  }, []);

  const checkUser = async () => {
    const session = supabase.auth.session();
    if (session) {
      setUser(session.user);
    } else {
      console.log("No user logged in");
      setUser(null);
    }
  };

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: "skalaria9@gmail.com",
      });

      if (error) {
        console.error("Error logging in:", error.message);
        if (error.message.includes("Email rate limit exceeded")) {
          alert("Too many login attempts. Please try again later.");
        } else {
          alert(`Login Error: ${error.message}`);
        }
      } else {
        console.log("OTP sent successfully:", data);
        alert("OTP sent successfully. Check your email.");
        setIsAuthenticated(true);
      }
      toast.success("Logged in successfully!");
      checkUser();
    } catch (error: any) {
      console.error("Unexpected error:", error);
      alert("Unexpected error occurred during login.");
      toast.error(`Error Login: ${error.message}`);
    }
  };

  const handleSignup = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: "skalaria9@gmail.com",
        password: "sahilkalu@123",
      });

      if (error) {
        console.error("Error signing up:", error.message);
        if (error.message.includes("Email rate limit exceeded")) {
          alert("Too many sign-up attempts. Please try again later.");
        } else {
          alert(`Signup Error: ${error.message}`);
        }
      } else {
        console.log("Signup successful:", data);
        alert("Signup successful. Check your email for verification.");
        setIsAuthenticated(true);
      }
      toast.success(
        "Signed up successfully! Please check your email for verification."
      );
    } catch (error: any) {
      console.error("Unexpected error:", error);
      alert("Unexpected error occurred during signup.");
      toast.error(`Error signing up: ${error.message}`);
    }
  };

  const handleInvite = async () => {
    try {
      let { data, error } = await supabase.auth.admin.inviteUserByEmail(
        "skalaria9@gmail.com"
      );
      if (data) {
        console.log(data);
      } else if (error) {
        console.log(error);
      }
    } catch (error: any) {
      console.error("Error inviting user:", error.message);
      if (error.message.includes("Email rate limit exceeded")) {
        alert("Too many invitation attempts. Please try again later.");
      } else {
        alert(`Invite Error: ${error.message}`);
      }
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      toast.success("Logged out successfully!");
      checkUser();
    } catch (error: any) {
      console.error("Error logging out:", error.message);
      toast.error(`Error logging out: ${error.message}`);
    }
  };

  const fetchWorkItems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("work").select("*");

      if (error) {
        throw error;
      }

      setWorkItems(data);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
      toast.error(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("work").delete().eq("id", id);
      if (error) {
        throw error;
      }
      toast.success("Item deleted successfully!");
      fetchWorkItems(); // Refresh the list
    } catch (error: any) {
      console.error("Error deleting item:", error.message);
      toast.error(`Error deleting item: ${error.message}`);
    }
  };

  const handleEdit = (item: any) => {
    setSelectedWorkItem(item);
  };

  const handleCloseModal = () => {
    setSelectedWorkItem(null);
  };

  const handleUpdate = () => {
    fetchWorkItems();
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    // <div className="min-h-screen flex flex-col  p-6 bg-gradient-to-br my-12 justify-center items-center from-blue-100 to-gray-100">
    //   <ToastContainer />
    //   {isAuthenticated ? (
    //     <>
    //       <button
    //         onClick={handleLogout}
    //         className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition duration-300"
    //       >
    //         Logout
    //       </button>
    //       <div className="my-6">
    //         <button
    //           onClick={toggleFormVisibility}
    //           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
    //         >
    //           {showForm ? "Hide Form" : "Add Website"}
    //         </button>
    //         {showForm && <WebsiteForm onAdd={fetchWorkItems} />}
    //       </div>
    //       {loading ? (
    //         <div className="flex justify-center items-center h-full">
    //           <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    //         </div>
    //       ) : (
    //         <div className="">
    //           {workItems.map((item) => (
    //             <div
    //               key={item.id}
    //               className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-4"
    //             >
    //               <div className="flex justify-between items-center">
    //                 <div className="text-xl font-bold text-gray-800">
    //                   {item.websiteName}
    //                 </div>
    //                 <div className="flex space-x-2">
    //                   <button
    //                     onClick={() => handleEdit(item)}
    //                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
    //                   >
    //                     Edit
    //                   </button>
    //                   <button
    //                     onClick={() => handleDelete(item.id)}
    //                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
    //                   >
    //                     Delete
    //                   </button>
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="text-gray-600">{item.description}</div>
    //                 <div className="mt-2 text-sm text-gray-500">
    //                   Tags: {item.tags}
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //       {selectedWorkItem && (
    //         <UpdateModal
    //           item={selectedWorkItem}
    //           onClose={handleCloseModal}
    //           onUpdate={handleUpdate}
    //         />
    //       )}
    //     </>
    //   ) : (
    //     <div className="flex flex-col items-center justify-center h-screen">
    //       <h1 className="text-3xl font-bold mb-6">Admin Login/Signup</h1>
    //       <div className="flex space-x-4">
    //         <button
    //           onClick={handleLogin}
    //           className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
    //         >
    //           Login
    //         </button>
    //         <button
    //           onClick={handleSignup}
    //           className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition duration-300"
    //         >
    //           Signup
    //         </button>
    //         <button
    //           onClick={handleInvite}
    //           className="bg-purple-500 text-white px-8 py-3 rounded-md hover:bg-purple-600 transition duration-300"
    //         >
    //           Invite
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-gray-100">
      <ToastContainer />
      {!isAuthenticated ? (
        <>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full my-20">
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mb-8">
                <h2 className="text-3xl font-bold text-blue-700 mb-4 md:mb-0">
                  Admin Dashboard
                </h2>
                <div className="flex space-x-4">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="my-6">
                <button
                  onClick={toggleFormVisibility}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  {showForm ? "Hide Form" : "Add Website"}
                </button>
                {showForm && <WebsiteForm onAdd={fetchWorkItems} />}
              </div>
              {workItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-gray-800">
                      {item.websiteName}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600">{item.description}</div>
                    <div className="mt-2 text-sm text-gray-500">
                      Tags: {item.tags}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedWorkItem && (
            <UpdateModal
              workItem={selectedWorkItem}
              onClose={handleCloseModal}
              onUpdate={handleUpdate}
            />
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center xl:relative lg:relative lg:mt-20 py-10 px-6 xl:px-0 xl:w-1/2 mx-auto">
          <h1 className="text-3xl font-bold text-center lg:text-left mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-center lg:text-left mb-8">
            Welcome back, Admin. Manage your platform efficiently.
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center lg:justify-start">
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
            <button
              onClick={handleSignup}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
            <button
              onClick={handleInvite}
              className="bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Invite
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
