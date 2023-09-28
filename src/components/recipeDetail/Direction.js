import React from 'react'
import direct from '../../asset/images/direct.png'
import Inbox from '../common/inbox'
const Direction = () => {
    return (
        <div className='max-w-[1440px] mx-auto mt-[80px]'>
            <div className='max-w-[930px]'>
                <p className='text-[36px] font-[600] tracking-[-1.44px] text-black'>Directions</p>
                <div className='flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[24px] mt-[32px]'>
                        <p className='text-[24px] font-[600] tracking-[-0.48px] text-black'>1. Lorem ipsum dolor sit amet </p>
                        <p className='text-[16px] font-[400] leading-[26px] tracking-[-0.32px] text-[rgba(0,0,0,0.60)]'>
                            Nemo enim ipsam voluptatem quia voluptas sit 
                            aspernatur aut odit aut fugit, sed quia consequuntur 
                            magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            Neque porro quisquam est, qui dolorem ipsum quia dolor 
                            sit amet, consectetur, adipisci velit, sed quia non numquam 
                            eius modi tempora incidunt ut labore et dolore magnam 
                            aliquam quaerat voluptatem.
                        </p>
                        <img src={direct} alt=''/>
                        <p className='text-[16px] font-[400] leading-[26px] tracking-[-0.32px] text-[rgba(0,0,0,0.60)]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                            aut odit aut fugit, sed quia consequuntur magni dolores 
                            eos qui ratione voluptatem sequi nesciunt. Neque porro 
                            quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            consectetur, adipisci velit, sed quia non numquam eius 
                            modi tempora incidunt ut labore et dolore magnam aliquam 
                            quaerat voluptatem.
                        </p>
                    </div>
                    <div className='flex flex-col gap-[24px] mt-[32px]'>
                        <p className='text-[24px] font-[600] tracking-[-0.48px] text-black'>2. Lorem ipsum dolor sit amet </p>
                        <p className='text-[16px] font-[400] leading-[26px] tracking-[-0.32px] text-[rgba(0,0,0,0.60)]'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores 
                            eos qui ratione voluptatem sequi nesciunt. Neque porro 
                            quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            consectetur, adipisci velit, sed quia non numquam eius 
                            modi tempora incidunt ut labore et dolore magnam aliquam 
                            quaerat voluptatem.
                        </p>
                    </div>
                    <div className='flex flex-col gap-[24px] mt-[32px]'>
                        <p className='text-[24px] font-[600] tracking-[-0.48px] text-black'>3. Lorem ipsum dolor sit amet</p>
                        <p className='text-[16px] font-[400] leading-[26px] tracking-[-0.32px] text-[rgba(0,0,0,0.60)]'>
                            Nemo enim ipsam voluptatem quia voluptas sit 
                            aspernatur aut odit aut fugit, sed quia consequuntur 
                            magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            Neque porro quisquam est, qui dolorem ipsum quia dolor 
                            sit amet, consectetur, adipisci velit, sed quia non numquam 
                            eius modi tempora incidunt ut labore et dolore magnam 
                            aliquam quaerat voluptatem.
                        </p>
                    </div>
                </div>
            </div>
            <Inbox/>
        </div>

    )
}

export default Direction
