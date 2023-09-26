import React from 'react'
import post1 from '../../asset/images/Post1.png'
import post2 from '../../asset/images/Post2.png'
import post3 from '../../asset/images/Post3.png'
import post4 from '../../asset/images/Post4.png'
import Instagram from '../../asset/images/instagram.svg'

const Checkout = () => {
    const data = [
        {img: post1},
        {img: post2},
        {img: post3},
        {img: post4},
    ]
    return (
        <div className='py-[80px] max-w-[1340px] mx-auto mt-[140px]'
        style={{background:'linear-gradient(180deg, rgba(231, 249, 253, 0.00) 0%, #E7F9FD 100%)'}}
        >
            <p className='text-black text-[48px] font-[600] tracking-[-1.92px] text-center'>Check out @foodieland on Instagram</p>
            <p className='text-[#00000099] text-[16px] font-[400] leading-[28px] mt-[24px] max-w-[840px] mx-auto text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
            </p>
            <div className='grid grid-cols-4 max-[1340px]:grid-cols-2  gap-[40px] mx-auto w-fit mt-[80px]'>
                {data.map((item, index) => (
                    <img src={item.img} alt=''/>
                ))}
            </div>
            <button className='flex gap-[10px] justify-center items-center w-[229px] h-[60px] rounded-[16px] bg-black mt-[80px] mx-auto text-white'>
                <p>Visit our Instagram</p>
                <img src={Instagram} alt=''/>
            </button>
        </div>
    )
}

export default Checkout