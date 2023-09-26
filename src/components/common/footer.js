import React from 'react'
import logo from '../../asset/images/logo.svg'
import facebook from '../../asset/images/fbIcon.svg'
import twitter from '../../asset/images/twitterIcon.svg'
import instagram from '../../asset/images/instagramIcon.svg'

const Footer = () => {
    return (
        <div className='max-w-[1340px] mx-auto mt-[160px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt=''/>
                    <p className='text-[#00000099] text-[16px] font-[400] leading-[28px] mt-[16px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>
                <div className='flex gap-[60px] text-black text-[16px] font-[500] tracking-[-0.32px] '>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    <p>About us</p>
                </div>
            </div>
            <div className='relative mt-[96px]'>
                <p className='text-[18px] font-[400] tracking-[-0.36px] text-[rgba(0,0,0,0.60)] text-center'>© 2020 Flowbase. Powered by <span className='text-[#FF7967]'>Webflow</span></p>
                <div className='flex gap-[40px] absolute right-0 top-0'>
                    <img height={22} src={facebook} alt=''/>
                    <img width={22} src={twitter} alt=''/>
                    <img width={22} src={instagram} alt=''/>
                </div>
            </div>
v
        </div>
    )
}

export default Footer