import React from 'react';
import successImg from '../assets/Success.png';

const SuccessMessage = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <img src={successImg} alt='success'/>
            <div>
                <h2 className="text-2xl font-bold mb-4">You're on your way!</h2>
                <div className="flex mb-4">
                   <span className="text-yellow-500 mr-1 text-4xl">★</span>
                   <span className="text-yellow-500 mr-1 text-4xl">★</span>
                   <span className="text-yellow-500 mr-1 text-4xl">★</span>
                   <span className="text-yellow-500 mr-1 text-4xl">★</span>
                   <span className="text-yellow-500 mr-1 text-4xl">★</span>
                </div>
                <p className="text-gray-600 mb-8 max-w-md text-center">
                "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
                </p>
                <p className="text-gray-600 font-medium">— Jacob S.</p>
            </div>
        </div>
    </div>
  );
};

export default SuccessMessage;