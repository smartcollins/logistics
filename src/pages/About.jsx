import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import card from '../data/card';
import Banner from '../component/Banner';
import Card from '../component/Card';
import Work from '../component/Work';


const About = ()=>{
    return(
        <div>
            <div>{banner.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{background: color.grayBg}} className=''>
                <div className='text-center py-8 mx-auto w-3/4'>
                    <Work/>
                </div>
                <div className="space-y-4 w-11/12 gap-8 my-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4">
                    {card.slice(0,3).map((item, idx) => <div key={idx} className='md:last:hidden xl:last:block'><Card {...item} /></div>)}
                </div>
            </div>
        </div>
    )
}


export default About; 