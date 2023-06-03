import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import card from '../data/card';
import sponsor from "../images/client_logo.png";
import Banner from '../component/Banner';
import Work from '../component/Work';
import Card from '../component/Card';
import Review from '../component/Review'
import Price from '../component/Price';
import Asked from '../component/Asked';



const About = ()=>{
    return(
        <div>
            <div>{banner.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{background: color.grayBg}} className=''>
                <div className='text-center py-8 mx-auto w-3/4'>
                    <Work/>
                </div>
            </div>
            <div className="space-y-4 w-11/12 gap-8 my-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4">
                {card.slice(0,3).map((item, idx) => <div key={idx} className='md:last:hidden xl:last:block'><Card {...item} /></div>)}
            </div>
            <div style={{background: color.grayBg}} className=''>
                <div className='text-center py-8 mx-auto w-3/4'>
                    <Review/>
                </div>
            </div>
            <Price/>
            <Asked/>
            <div className="my-8 xl:my-8">
                <img className=" mx-auto h-16 w-11/12 md:object-cover md:h-full xl:w-3/4" src={sponsor} alt="delivery"/>
            </div>
        </div>
    )
}


export default About; 