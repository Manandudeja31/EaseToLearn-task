"use client"
import React from 'react';

const steps = [
  { id: 1, title: 'Form Selection' },
  { id: 2, title: 'Set up' },
  { id: 3, title: 'Form Creation' },
  { id: 4, title: 'Review' },
];

const Topbar = ({ selectedTemplate }) => {
  return (
    <div className="flex items-center justify-end gap-5 px-6 py-4 bg-white border-b">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {/* Step circle with checkmark */}
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 flex ${selectedTemplate < step.id && "items-center"} justify-center text-center rounded-full border 
                ${selectedTemplate >= step.id ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-400 text-gray-500'}`}
            >
              {selectedTemplate >= step.id ? (
                <p className="w-4 h-4">
                    🗸
                </p> 
              ) : (
                <span className="text-xs">{index + 1}</span>
              )}
            </div>
            <span className="text-sm text-black">{step.title}</span>
          </div>

          {/* Line between steps */}
          {index !== steps.length - 1 && (
            <div className="w-16 h-px bg-gray-300" />
          )}
        </React.Fragment>
      ))}

      {/* Close button */}
      <div className="ml-auto cursor-pointer text-gray-600 hover:text-black text-xl">
        X
      </div>
    </div>
  );
};

export default Topbar;
