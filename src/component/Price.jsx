import React from 'react';
import color from '../data/color';
import price from '../data/price';
import Caption from './Caption';


const Price = ()=>{
    return(
        <div style={{ color: color.darkTxt }} className=' capitalize mx-auto md:w-3/4'>
            <div className=' mt-8 md:my-0'>
                <Caption mid={true} dark={true} txt={'pricing'} txt2={'our best pricing'} />
            </div>
            <div className='flex flex-wrap text-center py-4 md:gap-4 lg:flex-nowrap'>
                {
                    price.map((item, idx) => <div key={idx} style={item.dark ? { backgroundColor: color.blueBg, color: 'white' } : { backgroundColor: color.grayBg }} className='bg-red-300 w-full flex flex-col space-y-4 p-8'>
                        <p className=' font-medium text-xl'>{item.title}</p>
                        <div className='flex items-end justify-center'>
                            <p className=' font-medium text-4xl font-[Rubik]'>{item.cost}</p>
                            <p className=' lowercase font-[Rubik]'>/ month</p>
                        </div>
                        <div className=' font-normal text-lg'>
                            {item.txt.map((item, idx) => <p key={idx} className=' last:border-b border-t border-[#D6D6D6] py-2'>{item}</p>)}
                        </div>
                        <button style={item.dark ? { color: color.darkTxt, background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` } : { backgroundColor: color.blueBg, color: 'white' }} className='bg-red-200 w-2/4 py-2 mx-auto font-medium rounded-sm md:w-1/3 lg:w-3/4 xl:w-2/4'>choose plan</button>
                    </div>)
                }
            </div>
        </div>
    )
}


export default Price; 