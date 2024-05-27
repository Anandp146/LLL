import React from 'react';
import supabase from '../config/supabaseClient';

const Admin: React.FC = () => {
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: 'skalaria9@gmail.com',
      });

      if (error) {
        console.error('Error logging in:', error.message);
        alert(`Login Error: ${error.message}`);
      } else {
        console.log('OTP sent successfully:', data);
        alert('OTP sent successfully. Check your email.');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Unexpected error occurred during login.');
    }
  };

  const handleSignup = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: 'skalaria9@gmail.com',
        password: 'sahilkalu@123',
      });

      if (error) {
        console.error('Error signing up:', error.message);
        alert(`Signup Error: ${error.message}`);
      } else {
        console.log('Signup successful:', data);
        alert('Signup successful. Check your email for verification.');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Unexpected error occurred during signup.');
    }
  };
  const handleinvite = async () => {
let { data, error } = await supabase.auth.admin.inviteUserByEmail('skalaria9@gmail.com');
     if(data){
        console.log(data);
     }
     else if(error){
       console.log(error)
     }
  };

  return (
    <div className="items-center justify-center lg:min-h-screen flex flex-col xl:flex-row xl:space-x-12">
      <div className="px-14 flex items-center justify-center flex-col space-y-1 xl:relative lg:relative lg:mt-20 lg:px-20 py-10 pt-10">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleinvite}>invite</button>
      </div>
    </div>
  );
};

export default Admin;
