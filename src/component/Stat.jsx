import React from 'react';
import stat from '../data/stat';
import color from '../data/color';
import Carousel from './Carousel';


const Stat = () => {
    const items = stat.map((item, idx) => <div key={idx} style={{ color: color.darkTxt }} className='!flex !items-center !justify-center gap-2 capitalize w-full first:border-x-none last:border-x-none border py-4'>
        <p className='font-bold text-lg lg:text-4xl'>{item.txt}</p>
        <span style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' w-3 h-3'></span>
        <p className='truncate text-ellipsis w-2/4 lg:w-auto'>{item.txt2}</p>
    </div>)
    return (
        <div>
            <div style={{ color: color.darkTxt }} className='hidden justify-between my-8 lg:flex bg-red-200'>
                {items}
            </div>
            <div className='w-3/4 mx-auto mb-4 lg:hidden'>
                <Carousel items={items} dot={false} show={2} scroll={1} />
            </div>
        </div>
    )
}


export default Stat; 