import React from 'react'
import img1 from '../../asset/images/ib1.png'
import img2 from '../../asset/images/ib2.png'
import img3 from '../../asset/images/ib3.png'

const Inbox = () => {
    return (
        <div className='max-w-[1340px] h-[442px] mx-auto bg-[#E7F9FD] rounded-[60px] pt-[80px] relative mt-[140px]'>
            <p className='text-black text-[48px] font-[700] leading-[50px] tracking-[-1.92px] text-center'>Deliciousness to your inbox</p>
            <p className='max-w-[620px] mx-auto text-[#00000099] text-[16px] font-[400] leading-[28px] mt-[24px] text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqut enim ad minim 
            </p>
            <div className='bg-white rounded-[24px] p-[10px] mt-[64px] max-w-[480px] mx-auto flex justify-between'>
                <input
                placeholder='Your email address...'
                />
                <button className='w-[160px] h-[60px] rounded-[16px] bg-black text-white'>Subscribe</button>
            </div>
            <img src={img1} alt='' className='absolute bottom-0 left-0 max-xl:hidden'/>
            <img src={img2} alt='' className='absolute bottom-0 right-0 max-lg:hidden'/>
            <img src={img3} alt='' className='absolute top-[249px] right-[245px] max-xl:hidden'/>
        </div>
    )
}

export default Inbox