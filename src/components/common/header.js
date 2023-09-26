import React from 'react'
import logo from '../../asset/images/logo.svg'
import facebook from '../../asset/images/fbIcon.svg'
import twitter from '../../asset/images/twitterIcon.svg'
import instagram from '../../asset/images/instagramIcon.svg'

const Header = () => {
    return (
        <div className='w-full flex justify-between items-center py-[40px] px-[80px] border-b-[1px] border-[#0000001A] '>
            <img width={130} src={logo} alt='' /> 
            <div className='flex gap-[60px] text-black text-[16px] font-[500] tracking-[-0.32px] '>
                <p>Home</p>
                <p>Recipes</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>About us</p>
            </div>
            <div className='flex gap-[40px] '>
                <img height={22} src={facebook} alt=''/>
                <img width={22} src={twitter} alt=''/>
                <img width={22} src={instagram} alt=''/>
            </div>
        </div>
    )
}

export default Header
