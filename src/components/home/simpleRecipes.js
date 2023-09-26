import React from 'react'
import img1 from '../../asset/images/recipes/img1.png'
import img2 from '../../asset/images/recipes/img2.png'
import img3 from '../../asset/images/recipes/img3.png'
import img4 from '../../asset/images/recipes/img4.png'
import img5 from '../../asset/images/recipes/img5.png'
import img6 from '../../asset/images/recipes/img6.png'
import img7 from '../../asset/images/recipes/img7.png'
import img8 from '../../asset/images/recipes/img8.png'
import img9 from '../../asset/images/recipes/img9.png'
import time from '../../asset/images/Timer.svg'
import fork from '../../asset/images/ForkKnife.svg'
import pinkHeart from '../../asset/images/recipes/pinkHeart.svg'
import greyHeart from '../../asset/images/recipes/greyHeart.svg'

const Simplerecipes = () => {
    const data = [
        {img:img1,title:'Big and Juicy Wagyu Beef Cheeseburger', time: '30 Minutes', type:'Snack', isLove: true},
        {img:img2,title:'Fresh Lime Roasted Salmon with Ginger Sauce', time: '30 Minutes', type:'Healthy', isLove: false},
        {img:img3,title:'Strawberry Oatmeal Pancake with Honey Syrup', time: '30 Minutes', type:'Sweet', isLove: false},
        {img:img4,title:'Fresh and Healthy Mixed Mayonnaise Salad', time: '30 Minutes', type:'Healthy', isLove: true},
        {img:img5,title:'Chicken Meatballs with Cream Cheese', time: '30 Minutes', type:'Fish', isLove: false},
        {img:img6,title:'Chicken Meatballs with Cream Cheese', time: '30 Minutes', type:'Snack', isLove: false},
        {img:img7,title:'Fruity Pancake with Orange & Blueberry', time: '30 Minutes', type:'Meat', isLove: false},
        {img:img8,title:'The Best Easy One Pot Chicken and Rice', time: '30 Minutes', type:'Breakfast', isLove: false},
        {img:img9,title:'The Creamiest Creamy Chicken and Bacon Pasta', time: '30 Minutes', type:'Noodle', isLove: false},
    ]
    return (
        
        <div>
            <p className='text-center text-[48px] font-[600] tracking-[-1.92x] text-black'>Simple and tasty recipes</p>
            <p className='max-w-[706px] text-center mx-auto text-[16px] font-[400] leading-[20px] text-[#00000099] mt-[24px]'>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
            </p>

            <div className='grid xl:grid-cols-3 grid-cols-2  w-fit mx-auto gap-x-[72px] gap-y-[50px] mt-[100px]'>
                {data.map((item, index) => (
                    <div className='w-[400px] h-[438px] rounded-[30px] p-[16px] relative'
                    style={{background: 'linear-gradient(180deg, rgba(231, 249, 253, 0.00) 0%, #E7F9FD 100%)'}}
                    >
                        <img width={368} src={item.img} alt='' className='mx-auto rounded-[30px]'/>
                        <img src={item.isLove? pinkHeart: greyHeart} alt='' className='absolute top-[32px] right-[32px]'/>
                        <div className='mt-[24px] px-[8px]'>
                            <p className='text-[24px] font-[700] leading-[32px] '>{item.title}</p>
                            <div className='flex mt-[24px]'>
                                <div className='flex gap-[10px]'>
                                    <img width={24} height={24} src={time} alt=''/>
                                    <p>{item.time}</p>
                                </div>
                                <div className='flex gap-[10px] ml-[50px]'>
                                    <img width={24} height={24} src={fork} alt=''/>
                                    <p>{item.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Simplerecipes