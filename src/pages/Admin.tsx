import React from "react";
import supabase from "../config/supabaseClient";

const Admin: React.FC = () => {
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: "skalaria9@gmail.com",
      });

      if (error) {
        console.error("Error logging in:", error.message);
        alert(`Login Error: ${error.message}`);
      } else {
        console.log("OTP sent successfully:", data);
        alert("OTP sent successfully. Check your email.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Unexpected error occurred during login.");
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
        alert(`Signup Error: ${error.message}`);
      } else {
        console.log("Signup successful:", data);
        alert("Signup successful. Check your email for verification.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Unexpected error occurred during signup.");
    }
  };
  const handleinvite = async () => {
    let { data, error } = await supabase.auth.admin.inviteUserByEmail(
      "skalaria9@gmail.com"
    );
    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col xl:flex-row xl:space-x-12 items-center justify-center">
      <div className="flex flex-col space-y-6 xl:space-y-0 xl:relative lg:relative lg:mt-20 lg:px-20 py-10 px-6 xl:px-0 xl:w-1/2">
        <h1 className="text-3xl font-bold text-center lg:text-left">
          Admin Dashboard
        </h1>
        <p className="text-lg text-center lg:text-left">
          Welcome back, Admin. Manage your platform efficiently.
        </p>
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 items-center justify-center lg:justify-start">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
          <button
            onClick={handleinvite}
            className="bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
