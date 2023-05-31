import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const About = ()=>{
    return(
        <div>
            <div>{banner.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default About; 