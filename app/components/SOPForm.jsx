import React from 'react'
import { useFormContext } from 'react-hook-form'

const SOPForm = () => {
  const {register} = useFormContext();
  return (
    <div className='my-10 flex flex-col gap-5'>
      {/* Question 1 */}
      <div>
        <label className="block text-[16px] w-[511px] font-medium text-[#595959] mb-2">
          1. Tell me about a time you were asked to do something you had never done before.
          How did you react? What did you learn?
        </label>
        <textarea
          rows={4}
          {...register("question1")}
          placeholder="Enter a description for the long answer"
          className="w-full border h-[68px] text-black border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200 resize-none"
        ></textarea>
        <p className="text-right text-xs text-gray-400 mt-1">300 word limit</p>
      </div>

      {/* Question 2 */}
      <div>
        <label className="block text-[16px] w-[511px] font-medium text-[#595959] mb-2">
          2. Tell me about the last time something significant didn’t go according to plan at work.
          What was your role? What was the outcome?
        </label>
        <textarea
          rows={4}
          {...register("question2")}
          placeholder="Enter a description for the long answer"
          className="w-full border h-[68px] text-black border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200 resize-none"
        ></textarea>
        <p className="text-right text-xs text-gray-400 mt-1">300 word limit</p>
      </div>

      {/* Question 3 */}
      <div>
        <label className="block text-[16px] w-[511px] font-medium text-[#595959] mb-2">
          3. What are the three things that are most important to you in a job?
        </label>
        <textarea
          rows={4}
          {...register("question3")}
          placeholder="Enter a description for the long answer"
          className="w-full border h-[68px] text-black border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200 resize-none"
        ></textarea>
        <p className="text-right text-xs text-gray-400 mt-1">300 word limit</p>
      </div>
    </div>
  )
}

export default SOPForm