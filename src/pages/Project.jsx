import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import color from '../data/color';


const Project = ()=>{
    return(
        <div>
            <div>{banner.slice(4, 5).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{color: color.darkTxt}}>
                <div className='flex items-center gap-2 capitalize bg-red-400'>
                    <p className=' font-bold text-4xl'>24</p>
                    <span style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' w-3 h-3'></span>
                    <p>our location</p>
                </div>
            </div>
        </div>
    )
}


export default Project; 