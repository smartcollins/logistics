import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import color from '../data/color';


const Project = ()=>{
    const endAry = [{
        txt: '24',
        txt2: 'our location'
    },{
        txt: '1294',
        txt2: 'delivered package'
    },{
        txt: '3594',
        txt2: 'satisfied clients'
    },{
        txt: '247+',
        txt2: 'owned vehicles'
    }]

    const end = endAry.map((item,idx)=><div key={idx} className='flex items-center justify-center gap-2 capitalize w-full first:border-x-none last:border-x-none border py-4'>
    <p className='font-bold text-4xl'>{item.txt}</p>
    <span style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' w-3 h-3'></span>
    <p>{item.txt2}</p>
</div>)
    return(
        <div>
            <div>{banner.slice(4, 5).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{color: color.darkTxt}} className='flex justify-between'>
                {end}
            </div>
        </div>
    )
}


export default Project; 