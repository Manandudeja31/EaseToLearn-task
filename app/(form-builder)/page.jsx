"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar/page';
import FormPreview from '../../components/FormPreview';
import { FormProvider, useForm } from 'react-hook-form';
import Topbar from '../../components/Topbar';

const FormBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const methods = useForm();
  
  const onSubmit = (data) => {
    console.log("Data: ", data);
    methods.reset();
    setSelectedTemplate(1)
  }

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setSelectedTemplate((prev) => prev + 1);
    }
  };

  return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col'>
          <div>
            <Topbar selectedTemplate={selectedTemplate}/>
          </div>
          <div className='flex'>
            <Sidebar selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate}/>
            <FormPreview template={selectedTemplate}/>
          </div>
          <div className='bg-white border border-[#D8D8D8] shadow-2xl p-5 flex justify-end w-full h-full'>
            <button type={selectedTemplate == 5 ? 'submit' : 'button'}
            onClick={handleNext
            }
            className={` bg-[#1A8FE6] px-8 py-2 text-white text-[14px] font-semibold` }>
              {selectedTemplate < 4 ? "Next" : "Submit"}
            </button>
          </div>
        </form>
      </FormProvider>
  )
}

export default FormBuilder;