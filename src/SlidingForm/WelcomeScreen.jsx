import React from 'react';
import image from '../assets/welcomeImage.png';

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center">
    <div className='flex flex-col md:flex-row items-center'>
      <img src={image} alt='welcomeImage'/>
      <div>
        <h2 className="text-2xl font-bold mb-4">You're in the right place</h2>
        <p className="text-gray-600 mb-8 max-w-md">
        Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
        </p>
      </div>
    </div>
  </div>
  );
};

export default WelcomeScreen;