import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Work from '../component/Work';


const About = ()=>{
    return(
        <div>
            <div>{banner.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{background: color.grayBg}} className=''>
                <div className='text-center py-8 mx-auto w-3/4'>
                    <Work/>
                </div>
            </div>
        </div>
    )
}


export default About; 