import React, { useEffect } from 'react';
import { Steps, useSteps } from 'react-step-builder';
import WelcomeScreen from './SlidingForm/WelcomeScreen';
import Option from './SlidingForm/Option';
import Interest from './SlidingForm/Interest';
import MathComfortLevel from './SlidingForm/MathComfortLevel';
import SuccessMessage from './SlidingForm/SuccessMessage';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { IoIosArrowBack } from "react-icons/io";
import Recommendation from './SlidingForm/recommendation';
import Paths from './SlidingForm/Paths';
import { useState } from 'react';

function App() {
  const { prev, next, total, current, progress } = useSteps();
  const [showRecommendation, setShowRecommendation] = useState(false);

  useEffect(() => {
    if (current === 6) {
      const timerId = setTimeout(() => {
        setShowRecommendation(true);
      }, 2000);

      return () => clearTimeout(timerId);
    }else {
      setShowRecommendation(false);
    }
  }, [current]);

  
  return (
    <div className="">
     { current > 1 &&
      <button onClick={() => prev()}>
        <IoIosArrowBack/>
      </button>
     }
      <ProgressBar percent={progress*100} spinner={false}/>
      {
        current < 6 ? <div className='flex flex-col items-center h-screen mt-10 gap-10'> 
        <div className='w-9/12 mx-auto flex flex-col items-center justify-center'>
          <Steps>
            <Option />
            <Interest />
            <MathComfortLevel />
            <WelcomeScreen />
            <SuccessMessage />
            <Recommendation />
          </Steps>
        </div> 
        <div>
          <button onClick={() => next()} className='bg-black text-white hover:bg-gray-300 px-4 rounded-lg transition-all duration-300 py-2 w-25'>Continue</button>
        </div>
        </div>
          : 
        <div className=''>
        {showRecommendation ? <Paths/> : <Recommendation/>}
        </div>
      }
    </div>
  );
}

export default App;
