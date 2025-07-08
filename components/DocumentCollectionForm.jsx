"use client"
import React from 'react'
import { useFormContext } from 'react-hook-form'

const DocumentCollectionForm = () => {
  const {register, formState: { errors }} = useFormContext();
  return (
    <div className='flex flex-col my-10 gap-5'>
      {/* 1. 10th Marksheet */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          1. 10th Marksheet<span className="text-red-500">*</span>
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("marksheet", { required: "Document is required" })}/>
        </label>
        {errors.marksheet && <p className="text-red-500 text-sm">{errors.marksheet.message}</p>}
      </div>

      {/* 2. 12th Marksheet */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          2. 12th Marksheet<span className="text-red-500">*</span>
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("12th", { required: "Document is required" })}/>
        </label>
        {errors.marksheet && <p className="text-red-500 text-sm">{errors.marksheet.message}</p>}
      </div>

      {/* 3. Graduation Marksheet */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          3. Graduation Marksheet<span className="text-red-500">*</span>
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("graduation", { required: "Document is required" })}/>
        </label>
        {errors.graduation && <p className="text-red-500 text-sm">{errors.graduation.message}</p>}
      </div>

      {/* 4. Post Graduation Marksheet */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          4. Post Graduation Marksheet
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("post-graduation")}/>
        </label>
      </div>

      {/* 5. Offer Letter */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          5. Offer Letter<span className="text-red-500">*</span>
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("offer", { required: "Document is required" })}/>
        </label>
        {errors.offer && <p className="text-red-500 text-sm">{errors.offer.message}</p>}
      </div>

      {/* 6. Salary Slips */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          6. Salary Slips<span className="text-red-500">*</span>
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("salary", { required: "Document is required" })}/>
        </label>
        {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
      </div>

      {/* 7. Bank Statement */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          7. Bank Statement<span className="text-red-500">*</span>
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("bank", { required: "Document is required" })}/>
        </label>
        {errors.bank && <p className="text-red-500 text-sm">{errors.bank.message}</p>}
      </div>

      {/* 8. Increment Letter (if any) */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          8. Increment Letter (if any)
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("increment")}/>
        </label>
      </div>

      {/* 9. Others (if any) */}
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          9. Others (if any)
        </label>
        <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm text-gray-400">
          <p>📎</p>
          <span>Attach file upto 5kb</span>
          <input type="file" className="hidden" {...register("others")}/>
        </label>
      </div>
    </div>
  )
}

export default DocumentCollectionForm