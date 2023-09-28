import React from 'react'
import img1 from '../../asset/images/recipes/img1.png'
import img2 from '../../asset/images/recipes/img2.png'
import img3 from '../../asset/images/recipes/img3.png'

const OtherRecipes = () => {
    const data = [
        {img: img1,name: 'Chicken Meatball with Creamy Chees...', author: 'Andreas Paula'},
        {img: img2,name: 'The Creamiest Creamy Chicken an...', author: 'Andreas Paula'},
        {img: img3,name: 'The Best Easy One Pot Chicken and Rice', author: 'Andreas Paula'},
    ]
    return (
        <div className='max-w-[400px]'>
            <p className='text-[32px] font-[600] tracking-[-1.28px]'>Other Recipe</p>
            <div className='flex flex-col gap-[20px] mt-[32px]'>
                {data.map((item, index) => (
                    <div className='flex gap-[10px] items-center'>
                        <img src={item.img} alt='' className='w-[180px] h-[120px] object-cover rounded-[16px]'/>
                        <div className='flex flex-col gap-[16px]'>
                            <p className='text-[20px] font-[600] leading-[28px] tracking-[-0.8px]'>{item.name}</p>
                            <p className='text-[14px] font-[500] tracking-[-0.28px] text-[rgba(0,0,0,0.60)]'>By {item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherRecipes
