import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';


const Blog = ()=>{
    return(
        <div>
            <div>{banner.slice(6, 7).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='my-4 capitalize'>
                <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 w-fit px-4 mx-auto font-semibold'>our blog</p>
                <p className='font-[Rubik] font-bold text-4xl/normal mx-auto w-fit'>our latest news</p>
            </div>
        </div>
    )
}


export default Blog; 