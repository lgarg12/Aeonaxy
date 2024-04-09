import React from 'react'
import image from '../assets/math.png';

const Paths = () => {
  return (
    <div className='text-center flex flex-col gap-3 w-9/12 mx-auto mt-20'> 
        <div className='text-2xl font-bold'>
            Finding learning path recommendations for you based on your responses
        </div>
        <div className='text-xl text-gray-400'>
            choose one to get started. You can switch anytime.
        </div>
        <div className='flex gap-2 mt-10'>
            <div className='flex gap-2 items-center mx-2 p-4 rounded-md shadow-md border hover:shadow-lg transition-all duration-300 hover:border-orange-300 hover:shadow-orange relative'>
                <div className='bg-[#EFB337] rounded-full px-4 py-1 absolute bottom-[93%] left-1/2 transform -translate-x-1/2'>
                    MOST POPULAR
                </div>
                <div>
                    <span className='font-bold'>Foundational Math</span> build your foundational skill in algebra, geometry and probability.
                </div>
                <img src={image} alt='math' className='h-[200px] w-[200px]'/>
            </div>
    
            <div className='flex gap-2 items-center mx-2 p-4 rounded-md shadow-md border hover:shadow-lg transition-all duration-300 hover:border-orange-300 hover:shadow-orange'>
                <div>
                    <span className='font-bold'>Foundational Math</span> build your foundational skill in algebra, geometry and probability.
                </div>
                <img src={image} alt='math' className='h-[200px] w-[200px]'/>
            </div>
        </div>
    </div>
  )
}

export default Paths
