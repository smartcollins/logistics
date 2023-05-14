import React from 'react';
import color from '../data/color';
import avt from '../images/avater.png';
import avt2 from '../images/avater2.png';
import { ArrowLeft, ArrowRight, Quotes, Star } from 'phosphor-react';


const Review = () => {
    const itemsAry = [{
        img: avt,
        name: 'kathleen smith',
        job: 'fuel company',
        star: [Star, Star, Star, Star, Star]
    }, {
        dark: true,
        img: avt2,
        name: 'john martin',
        job: 'restoration company',
        star: [Star, Star, Star, Star, Star]
    }]
    const items = itemsAry.map((item, idx) => (
        <div key={idx}>
            <div style={item.dark ? { color: 'white', background: color.blueBg } : { color: '#666c89' }} className='p-8 space-y-2'>
                <div style={item.dark ? { color: 'white' } : { color: '#091242' }} className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img className='h-16' src={item.img} alt="avater" />
                        <div>
                            <p className=' text-lg font-medium'>{item.name}</p>
                            <p className=' text-sm'>{item.job}</p>
                        </div>
                    </div>
                    <Quotes style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' p-2 rounded-full h-12 w-12' size={16} color="#091242" weight="bold" />
                </div>
                <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <div className='flex'>
                    {
                        item.star.map((item, idx) => ((
                            React.createElement(item, {
                                key: idx, color: "#fdaf3b", size: 16, weight: 'fill'
                            })
                        )))
                    }
                </div>
            </div>
        </div>
    ))
    return (
        <div className=' text-left'>
            <div className='flex items-end justify-between mb-8'>
                <div className='md:w-fit w-full'>
                    <p style={{ borderLeft: `4px solid ${color.grdt}` }} className='bg-[#e8e8e8]/50 w-fit px-4'>testimonial</p>
                    <p className='font-[Rubik] font-semibold text-2xl/normal'>What Our Customer Say</p>
                </div>
                <div className='hidden md:flex items-center justify-between gap-2'>
                    <ArrowLeft style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='h-8 w-8 p-2 rounded-full' size={16} color="#091242" weight="bold" />
                    <ArrowRight style={{ background: color.blueBg }} className='h-8 w-8 p-2 rounded-full' size={16} color="#ffffff" weight="bold" />
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between md:flex-nowrap'>
                {items}
            </div>
        </div>
    )
}


export default Review; 