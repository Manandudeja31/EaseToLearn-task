"use client";
import BasicDetailsForm from '@/app/components/BasicDetailsForm'
import DocumentCollectionForm from '@/app/components/DocumentCollectionForm'
import InterviewAvailabilityForm from '@/app/components/InterviewAvailabilityForm'
import SOPForm from '@/app/components/SOPForm'
import React from 'react'


const FormPreview = ({template}) => {
  const renderForm = () => {
    switch (template) {
      case 2:
        return <DocumentCollectionForm />;
      case 3:
        return <SOPForm />;
      case 4:
        return <InterviewAvailabilityForm />;
      default:
        return <BasicDetailsForm />;
    }
  };
  return (
    <div className='bg-[#F5F5F5] w-full min-h-[810px] h-full py-10 px-20'>
      <h1 className='text-[20px] font-semibold text-[#414141]'>Preview</h1>
      <p className='text-[16px] font-normal text-[#414141]'>You will be able to customize the fields in the later stage</p>
      <div className='mt-5'>
        {/* form-description */}
        <div className='bg-[#1A8FE626] p-10'>
          <h2 className='text-[20px] font-semibold text-[#414141]'>Basic Details</h2>
          <p className='text-[14px] font-normal text-[#414141]'>Please Provide Baisc Details About You.</p>
          <p className='text-[14px] font-normal text-[#414141] pt-3'>Provide the following information to process your application</p>
        </div>
        {/* forms */}
        <div className='bg-white flex flex-col justify-center items-center rounded-b-xl'>
          {renderForm()};
        </div>
      </div>
    </div>
  )
}

export default FormPreview