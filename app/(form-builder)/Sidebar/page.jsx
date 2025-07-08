"use client";
import React from 'react'

const data = [
    {
        id: 1,
        heading: "Details Collection",
        para: "Collect information from Candidates on their education, work experience, contact no,etc"
    },
    {
        id: 2,
        heading: "Document Collection",
        para: "Save time and efforts: Explore this template to find a set of questions required for document collection"
    },
    {
        id: 3,
        heading: "Statement of Purpose",
        para: "Start creating a new form with the wide options of fields available"
    },
    {
        id: 4,
        heading: "Interview Availability",
        para: "Start creating a new form with the wide options of fields available"
    }
]

const Sidebar = ({selectedTemplate, setSelectedTemplate}) => {

  return (
    <div className=' bg-white h-full text-black p-10'>
        <div>
            <div className='w-[350px] h-[118px] p-5 border border-[#888888] rounded-lg flex items-center justify-center gap-5'>
                <div className='w-[70px] h-[70px] bg-[#D8D8D8] rounded-sm'></div>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-[16px] font-normal'>New Form</h3>
                    <p className='w-[216px] text-[12px] font-normal text-[#595959]'>Start creating a new form with the wide options of fields available</p>
                </div>
            </div>
        </div>
        <p className='text-[14px] font-normal text-[#595959] mt-10 mb-5'>Explore the following Templates:</p>
        <div className='flex flex-col gap-5'>
            {data.map((temp) => (
                <div key={temp.id}>
                    <div className={`w-[350px] h-[118px] p-5 border rounded-lg flex items-center justify-center gap-5
                        ${selectedTemplate == temp.id ? "bg-[#EAF4FD] border-[#1A8FE64D]/30" : "border-[#888888]"}`} onClick={() => setSelectedTemplate(temp.id)}>
                        <div className={`w-[70px] h-[70px] rounded-sm ${selectedTemplate == temp.id ? "bg-[#1A8FE64D]/30" : "bg-[#D8D8D8]"}`}></div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-[16px] font-normal'>{temp.heading}</h3>
                            <p className='w-[216px] text-[12px] font-normal text-[#595959]'>{temp.para}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar