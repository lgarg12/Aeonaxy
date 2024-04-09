import React from 'react';

const MathComfortLevel = () => {
  const options = [
    {
      label: 'Introductory',
      example: '5 × 1/2 = ?',
      level: 'Arithmetic',
    },
    {
      label: 'Foundational',
      example: '3x + 5 = 4',
      level: 'Basic Algebra',
    },
    {
      label: 'Intermediate',
      example: 'x = (-b ± √(b^2 - 4ac)) / 2a',
      level: 'Intermediate Algebra',
    },
    {
      label: 'Advanced',
      example: '∫(0 to x) x^2 dx = ?',
      level: 'Calculus',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl font-bold mb-8">What is your math comfort level?</h2>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        Choose the highest level you feel confident in — you can always adjust later.
      </p>
      <div className="flex flex-col md:flex-row justify-center p-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`mx-2 p-4 rounded-md shadow-md border hover:shadow-lg transition-shadow duration-300 flex flex-col items-center w-[250px] gap-1 hover:border-orange-300 hover:shadow-orange`}
          >
            <div className="text-center mb-2">{option.example}</div>
            <div className='flex flex-col items-center'>
              <div className="text-sm font-medium">{option.level}</div>
              <div className="text-xs text-gray-500">{option.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathComfortLevel;