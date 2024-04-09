import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const Recommendation = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
        <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#F2B034', '#F2B034', '#F2B034', '#F2B034', '#F2B034']}
        />

        <div className='text-2xl font-bold'>
            Finding learning path recommendations for you based on your responses
        </div>
    </div>
  )
}

export default Recommendation;
