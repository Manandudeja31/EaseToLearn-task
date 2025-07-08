import React from 'react'
import { useFormContext } from 'react-hook-form'
 
const InterviewAvailabilityForm = () => {
  const {register, formState: { errors }} = useFormContext();
  return (
    <div className='flex flex-col gap-5 my-10'>
      {/* 1. Email */}
      <div>
        <label className="block text-[16px] font-medium text-gray-800 mb-1">
          1. Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          {...register("interview", { required: "Email is required" })}
          placeholder="Example - userid@gmail.com"
          className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        {errors.interview && <p className="text-red-500 text-sm">{errors.interview.message}</p>}
      </div>

      {/* 2. Location */}
      <div>
        <label className="block text-[16px] font-medium text-gray-800 mb-1">
          2. Location
        </label>
        <input
          type="text"
          {...register("location")}
          placeholder="Search or enter your location"
          className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* 3. Interview Date */}
      <div>
        <label className="block text-[16px] font-medium text-gray-800 mb-1">
          3. Interview Date
        </label>
        <input
          type="date"
          {...register("interview-date")}
          className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* 4. Interview Time */}
      <div>
        <label className="block text-[16px] font-medium text-gray-800 mb-1">
          4. Interview Time
        </label>
        <input
          type="time"
          {...register("interview-time")}
          className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* 5. Time Zone */}
      <div>
        <label className="block text-[16px] font-medium text-gray-800 mb-1">
          5. Time Zone
        </label>
        <select {...register("time-zone")} className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200">
          <option value="" defaultValue={true}>Search or Select a time zone from below</option>
          <option value="IST">IST (India Standard Time)</option>
          <option value="EST">EST (Eastern Standard Time)</option>
          <option value="PST">PST (Pacific Standard Time)</option>
        </select>
      </div>

      {/* 6. Interview Medium */}
      <div>
        <label className="block text-[16px] font-medium text-gray-800 mb-1">
          6. Interview Medium
        </label>
        <select {...register("medium")} className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200">
          <option value="" defaultValue={true}>Search or Select medium of Interview from below</option>
          <option>Online</option>
        </select>
      </div>
    </div>
  )
}

export default InterviewAvailabilityForm