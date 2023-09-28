import React from 'react'
import fork from '../../asset/images/ForkKnife.svg'
import time from '../../asset/images/Timer.svg'
import avatar from '../../asset/images/avatar.png'
import play from '../../asset/images/play.svg'
import print from '../../asset/images/printer.svg'
import recipe from '../../asset/images/recipeDt.png'
import share from '../../asset/images/share.svg'

const MainContent = () => {
    const data = {
        author: 'John Smith',
        date: '15 March 2023',
        preTime: '30 Minutes',
        cookTime: '30 Minutes',
        type: 'Chicken',
        nutrition: [
            {name: 'calories', value: '219.9'},
            {name: 'totalFat', value: '10.7'},
            {name: 'protein', value: '7.9'},
            {name: 'carbohydrate', value: '22.3'},
            {name: 'cholesterol', value: '37.4'},
        ]
    }
    return (
        <div className='max-w-[1440px] mx-auto max-[1340px]:px-[20px] flex flex-col gap-[50px] mt-[80px]'
        style={{fontFamily: 'Inter'}}
        >
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[64px] font-[600] tracking-[-2.56] text-black'>Health Japanese Fried Rice</p>
                    <div className='flex justify-between max-w-[720px] mt-[50px]'>
                        <div className='flex items-center gap-[10px]'>
                            <img src={avatar} alt='' />
                            <div>
                                <p>{data.author}</p>
                                <p>{data.date}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <img src={time} alt='' />
                            <div>
                                <p>PREP TIME</p>
                                <p>{data.preTime}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <img src={time} alt='' />
                            <div>
                                <p>COOK TIME</p>
                                <p>{data.cookTime}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-[10px]'>
                            <img src={fork} alt='' />
                            <p>{data.type}</p>
                        </div>

                    </div>
                </div>

                <div className='flex gap-[32px]'>
                    <div>
                        <div className='p-[28px] bg-[#E7FAFE] rounded-[50px]'>
                            <img width={24} height={24} src={print} alt='' />
                        </div>
                        <p className='text-center mt-[10px]'>Print</p>
                    </div>

                    <div>
                        <div className='p-[28px] bg-[#E7FAFE] rounded-[50px]'>
                            <img width={24} height={24} src={share} alt='' />
                        </div>
                        <p className='text-center mt-[10px]'>Share</p>
                    </div>
                </div>
            </div>

            <div className='flex max-[1340px]:flex-col gap-[30px] justify-between'>
                <div className='relative'>
                    <img src={recipe} alt='' className='w-full h-full object-cover rounded-[30px]'/>
                    <img src={play} alt='' className='absolute left-0 right-0 top-0 bottom-0 m-auto'/>
                </div>
                <div className='flex flex-col justify-between w-[570px] max-[1340px]:w-full h-[600px] max-[1340px]:h-[500px] bg-[#E7FAFE] p-[32px] rounded-[30px]'>
                    <div>
                        <p className='text-[24px] font-[600px] tracking-[-0.96px] mb-[8px]'>Nutrition Information</p>
                        {data.nutrition.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-between py-[16px] capitalize'>
                                    <p className='text-[18px] font-[500px] tracking-[-0.72px] text-[rgba(0,0,0,0.60)]'>{item.name}</p>
                                    <p className='text-[18px] font-[500px] tracking-[-0.72px] text-black'>{item.value}</p>
                                </div>
                                <hr/>
                            </div>
                        )) }
                    </div>
                    <p className='text-center text-[16px] font-[400] leading-[28px] text-[rgba(0,0,0,0.60)] '>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>

            <p className='text-[16px] font-[400] leading-[28px] text-[rgba(0,0,0,0.60)] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </div>
    )
}

export default MainContent