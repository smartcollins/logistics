import React from 'react';
import color from '../data/color';
import { ArrowLeft, ArrowRight, Quotes, Star } from 'phosphor-react';


const Review = ()=>{
    return(
        <div className=' text-left'>
            <div className='bg-red-300 flex items-end justify-between'>
                <div className='w-fit '>
                    <p style={{ borderLeft: `4px solid ${color.grdt}` }} className='bg-[#e8e8e8]/50 w-fit px-4'>testimonial</p>
                    <p className='font-[Rubik] font-semibold text-2xl/normal'>What Our Customer Say</p>
                </div>
                <div className='bg-red-400 flex items-center justify-between'>
                    <ArrowLeft size={16} color="#041c37" weight="bold" />
                    <ArrowRight size={16} color="#041c37" weight="bold" />
                </div>
            </div>
            <div className='bg-red-500 flex items-center justify-between'>
                <div className='bg-red-400'>
                    <div className='p-8 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <img src="" alt="avater" />
                            <div>
                                <p>john martin</p>
                                <p>restoration company</p>
                            </div>
                            <Quotes size={16} color="#091242" weight="bold" />
                        </div>
                        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        <div className='flex'>
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                        </div>
                    </div>
                </div>
                <div className='bg-red-400'>
                    <div className='p-8 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <img src="" alt="avater" />
                            <div>
                                <p>john martin</p>
                                <p>restoration company</p>
                            </div>
                            <Quotes size={16} color="#091242" weight="bold" />
                        </div>
                        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        <div className='flex'>
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                            <Star size={16} color="#fdaf3b" weight="fill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Review; 