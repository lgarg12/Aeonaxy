import React from 'react';

const options = [
  { label: 'Student or soon to be enrolled', icon: '👨‍🎓', ariaLabel: 'Student' },
  { label: 'Professional pursuing a career', icon: '👩‍💼', ariaLabel: 'Professional' },
  { label: 'Parent of a school-age child', icon: '👦', ariaLabel: 'Parent' },
  { label: 'Lifelong learner', icon: '👴', ariaLabel: 'Lifelong learner' },
  { label: 'Teacher', icon: '👩‍🏫', ariaLabel: 'Teacher' },
  { label: 'Other', icon: '👱‍♂️', ariaLabel: 'Other' },
];

const Option = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4">Which describes you best?</h2>
      <p className="text-gray-600 mb-8">This will help us personalize your experience.</p>
      <div className="space-y-4 w-1/2">
        {options.map((option, index) => (
          <button
            key={index}
            className="border border-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 flex items-center w-full"
          >
            <span role="img" aria-label={option.ariaLabel} className="mr-2">
              {option.icon}
            </span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Option;