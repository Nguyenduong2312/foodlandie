import React from 'react'
import img1 from '../../asset/images/recipes/re1.png'
import img2 from '../../asset/images/recipes/re2.png'
import img3 from '../../asset/images/recipes/re3.png'
import img4 from '../../asset/images/recipes/re4.png'
import img5 from '../../asset/images/recipes/re5.png'
import img6 from '../../asset/images/recipes/re6.png'
import img7 from '../../asset/images/recipes/re7.png'
import img8 from '../../asset/images/recipes/re8.png'
import time from '../../asset/images/Timer.svg'
import fork from '../../asset/images/ForkKnife.svg'


const RecipesList = () => {
    const data = [
        {img: img1, title: 'Mixed Tropical Fruit Salad with Superfood Boosts ', time:'30 Minutes', type:'Healthy'},
        {img: img2, title: 'Big and Juicy Wagyu Beef Cheeseburger', time:'30 Minutes', type:'Western'}, 
        {img: img3, title: 'Healthy Japanese Fried Rice with Asparagus', time:'30 Minutes', type:'Healthy'},
        {img: img4, title: 'Cauliflower Walnut Vegetarian Taco Meat', time:'30 Minutes', type:'Eastern'},
        {img: img5, title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing', time:'30 Minutes', type:'Healthy'},
        {img: img6, title: 'Barbeque Spicy Sandwiches with Chips ', time:'30 Minutes', type:'Snack'},
        {img: img7, title: 'Firecracker Vegan Lettuce Wraps - Spicy! ', time:'30 Minutes', type:'Seafood'},
        {img: img8, title: 'Chicken Ramen Soup with Mushroom ', time:'30 Minutes', type:'Japanese'},
    ]

    return (
        <div className='max-w-[1340px] mx-auto mt-[140px]'>
            <div className='flex justify-between'>
                <p className='max-w-[40%] text-black text-[48px] font-[700] leading-[50px] tracking-[-1.92px]'>Try this delicious recipe to make your day</p>
                <p className='max-w-[40%] text-[#00000099] text-[16px] font-[400] leading-[28px] mt-[24px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqut enim ad minim 
                </p>
            </div>
            <div className='grid lg:grid-cols-4 md:maxlg:grid-cols-3 grid-cols-2 gap-[40px] mt-[60px]'>
                {data.map((item, index) => (
                    <div>
                        <img src={item.img} alt='' className='rounded-[20px]'/>
                        <div className='mt-[24px]'>
                            <p>{item.title}</p>
                            <div className='flex gap-[24px] mt-[27px]'>
                                <div className='flex gap-[10px]'>
                                    <img src={time} alt=''/>
                                    <p className='text-[#00000099]'>{item.time}</p>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <img src={fork} alt=''/>
                                    <p className='text-[#00000099]'>{item.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipesList