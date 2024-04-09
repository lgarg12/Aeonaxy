import React from 'react';

const options = [
  { label: 'Learning specific skills to advance my career', icon: '📈' },
  { label: 'Exploring new topics I\'m interested in', icon: '🌐' },
  { label: 'Refreshing my math foundations', icon: '✖️' },
  { label: 'Exercising my brain to stay sharp', icon: '🎯' },
  { label: 'Something else', icon: '📚' },
];

const Interest = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4">Which are you most interested in?</h2>
      <p className="text-gray-600 mb-8">Choose just one. This will help us get you started (but won't limit your experience).</p>
      <div className="space-y-4 w-1/2">
        {options.map((option, index) => (
          <button
            key={index}
            className="border border-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 flex items-center w-full"
          >
            <span role="img" aria-label={option.label} className="mr-2">
              {option.icon}
            </span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Interest;