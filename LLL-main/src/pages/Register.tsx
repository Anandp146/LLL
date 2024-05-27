import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const registerSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  role: z.enum(['admin', 'user'], { message: 'Role must be either admin or user' }),
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const response = await axios.post('/auth/register', data);
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
          <input
            {...register('username')}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            {...register('password')}
            type="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Register</button>
      </form>
    </div>
  </div>
  )
}
