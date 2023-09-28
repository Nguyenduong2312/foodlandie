import React from 'react'
import fork from '../../asset/images/ForkKnife.svg'
import time from '../../asset/images/Timer.svg'

const RecipeTag = (props) => {
    
    return (
        <div className='max-w-[290px]'>
            <img src={props.img} alt='' className='rounded-[20px]'/>
            <div className='mt-[24px]'>
                <p>{props.title}</p>
                <div className='flex gap-[24px] mt-[27px]'>
                    <div className='flex gap-[10px]'>
                        <img src={time} alt=''/>
                        <p className='text-[#00000099]'>{props.time}</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <img src={fork} alt=''/>
                        <p className='text-[#00000099]'>{props.type}</p>
                    </div>
                </div>
            </div>
        </div>
    )}

export default RecipeTag
