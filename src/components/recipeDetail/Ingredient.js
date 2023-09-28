import React, { useState } from 'react'
import radio from '../../asset/images/radio.svg'
import isCheck from '../../asset/images/radioIscheck.svg'

const Ingredient = () => {
    const mainDish = [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
    ]
    const sauce = [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
    ]
    const [mainDishIndex,setMainDishIndex] = useState(-1)
    const [sauceIndex,setSauceIndex] = useState(-1)

    return (
        <div className='w-full'>
            <p className='text-[36px] font-[600] tracking-[-1.44px] text-black '>Ingredients</p>
            <div>   
                <p className='text-[24px] font-[600] tracking-[-0.96px] text-black mt-[30px] '>For main dish</p>
                <div>
                    {mainDish.map((item, index) => (
                        <>
                        <div className='flex gap-[10px] py-[27px]'>
                            <img src={mainDishIndex === index? isCheck : radio} alt=''
                            onClick={() => setMainDishIndex(index)}
                            />
                            <p className={`${ mainDishIndex === index?'line-through text-[rgba(0,0,0,0.30)]':''}`}>{item}</p>
                        </div>
                        <hr/>
                        </>
                    ))}
                </div>
            </div>

            <div>   
                <p className='text-[24px] font-[600] tracking-[-0.96px] text-black mt-[30px]'>For the sauce</p>
                <div>
                    {sauce.map((item, index) => (
                        <>
                        <div className='flex gap-[10px] py-[27px]'>
                            <img src={sauceIndex === index? isCheck : radio} alt=''
                            onClick={() => setSauceIndex(index)}
                            />
                            <p className={`${ sauceIndex === index?'line-through text-[rgba(0,0,0,0.30)]':''}`}>{item}</p>
                        </div>
                        <hr/>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ingredient
