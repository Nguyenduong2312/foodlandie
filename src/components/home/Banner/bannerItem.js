import React from 'react'
import food from '../../../asset/images/food.png'
import icon from '../../../asset/images/icon1.svg'
import time from '../../../asset/images/Timer.svg'
import fork from '../../../asset/images/ForkKnife.svg'
import avartar from '../../../asset/images/avatar.png'
import play from '../../../asset/images/PlayCircle.svg'
import bagde from '../../../asset/images/Badge.svg'

const BannerItem = () => {
    return (
        <div className='max-w-[1280px] mx-auto mt-[40px] h-[640px] bg-[#E7FAFE] rounded-[32px]  relative'>
            <div className='absolute top-[50px] left-[50px] max-w-[620px] z-[20]'>
                <div className='flex gap-[13px] items-center w-fit py-[11px] px-[20px] bg-white rounded-[32px] '>
                    <img src={icon} alt='' />
                    <p>Hot Recipes</p>
                </div>
                <p className='text-[70px] font-[700] translate-[-2.56px] text-black font-sans mt-[32px] leading-[80px] '>Spicy delicious chicken wings</p>
                <p className='text-[16px] font-[400] leading-[24px] text-[#00000099] font-sans mt-[24px] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='mt-[30px] flex gap-[16px]'>
                    <button className='flex gap-[10px] py-[8px] px-[16px] rounded-[32px] bg-[#0000000D] '>
                        <img width={24} height={24} src={time} alt=''/>
                        <p>30 Minutes</p>
                    </button>
                    <button className='flex gap-[10px] py-[8px] px-[16px] rounded-[32px] bg-[#0000000D] '>
                        <img width={24} height={24} src={fork} alt=''/>
                        <p>chicken</p>
                    </button>
                </div>
                <div className='flex justify-between mt-[100px] max-h-[50px] '>
                    <div className='flex gap-[16px]'>
                        <img width={50} height={50} src={avartar} alt='' className='' />
                        <div>
                            <p className='text-[16px] font-[700] translate-[-0.32px] text-black font-sans'>John Smith</p>
                            <p className='text-[14px] font-[500] translate-[-0.28px] text-black font-sans mt-[8px]'>15 March 2022</p>
                        </div>
                    </div>
                    <button className='w-[200px] h-[60px] flex gap-[15px] bg-black rounded-[20px] items-center justify-center'>
                        <p className='text-[14px] font-[600] translate-[-0.28px] text-white font-sans'>View Recipes</p>
                        <img width={24} height={24} src={play} alt=''/>
                    </button>
                </div>
            </div>

            <img src={food} alt='' className='absolute right-0 top-0 max-lg:hidden'/>
            <img src={bagde} alt='' className='absolute left-[570px] top-[50px] z-20'/>
        </div>
    )
}

export default BannerItem
