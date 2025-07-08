"use client"
import React from 'react'
import { useFormContext } from 'react-hook-form';

const BasicDetailsForm = () => {
  const {register, formState: { errors }} = useFormContext();
  return (
      <div className='w-[515px] h-[344px] my-10'>
        <div className="mb-4">
          <label className="block text-[16px] font-medium text-gray-700 mb-1">
            1. Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            required={true}
            placeholder="Enter a Valid Salary in numbers e.g 50,000/-"
            className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-sm"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-[16px] font-medium text-gray-700 mb-1">
            2. Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Example - userid@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-[16px] font-medium text-gray-700 mb-1">
            3. Date of Birth
          </label>
          <input
            type="date"
            {...register("dob")}
            className="w-60 px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-sm"
          />
        </div>

        {/* Contact No */}
        <div>
          <label className="block text-[16px] font-medium text-gray-700 mb-1">
            4. Contact no
          </label>
          <input
            type="tel"
            {...register("contact")}
            placeholder="Enter your 10 digit contact no"
            className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-sm"
          />
        </div>
      </div>
  )
}

export default BasicDetailsForm