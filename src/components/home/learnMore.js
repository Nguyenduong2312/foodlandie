import React from 'react'
import chef from '../../asset/images/chef.png'
const LearnMore = () => {
    return (
        <div className='max-w-[1340px] mt-[140px] mx-auto relative'>
            <img src={chef} alt='' className='absolute top-0 right-[0px] z-[-1] max-lg:hidden'/>
            <div className='lg:max-w-[526px] w-full pt-[150px] px-[30px]'>
                <p className='text-[48px] font-[600] tracking-[-1.92px] text-black'>Everyone can be a chef in their own kitchen</p>
                <p className='mt-[24px] text-[16px] font-[400] leading-[28px] text-[rgba(0,0,0,0.60)]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
                </p>
                <button className=' w-[180px] h-[60px] rounded-[16px] bg-black mt-[72px] text-white'>Learn more</button>
            </div>
        </div>
    )
}

export default LearnMore