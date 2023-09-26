import React from 'react'
import cata1 from '../../asset/images/cata1.svg'
import cata2 from '../../asset/images/cata2.svg'
import cata3 from '../../asset/images/cata3.svg'
import cata4 from '../../asset/images/cata4.svg'
import cata5 from '../../asset/images/cata5.svg'
import cata6 from '../../asset/images/cata6.svg'

const Categories = () => {
    const data = [
        {img: cata1, title: 'Breakfast'},
        {img: cata2, title: 'Vegan'},
        {img: cata3, title: 'Meat'},
        {img: cata4, title: 'Dessert'},
        {img: cata5, title: 'Lunch'},
        {img: cata6, title: 'Chocolate'},
    ]
    return (
        <div className='py-[150px] max-w-[1340px] mx-auto'>
            <div className='flex justify-between'>
                <p className='text-[48px] font-[600] tracking-[-1.92px]'>Categories</p>
                <button className='text-[16px] font-[600] tracking-[-0.32px] text-black py-[20px] px-[27px] bg-[#E7FAFE] h-[60px] rounded-[16px] '>View All Categories</button>
            </div>
            <div className='flex gap-[40px] first-letter overflow-x-scroll'>
                {data.map((item, index) => (
                    <div className='mt-[130px]'>
                    <div key={index} className='w-[180px] h-[152px] rounded-[30px] relative'
                    style={{background:'linear-gradient(180deg, rgba(112, 130, 70, 0.00) 0%, rgba(112, 130, 70, 0.10) 100%)'}}
                    >
                        <img src={item.img} alt='' className='w-[100px] h-[100px] object-cover absolute bottom-[102px] right-0 left-0 mx-auto z-20' /> 
                        <img width={100}  src={item.img} alt='' className='absolute  bottom-[80px] right-0 left-0 mx-auto blur-[10px]'/> 
                        <p className='text-black text-center absolute bottom-[30px] left-0 right-0 mx-auto'>{item.title}</p>                        
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories