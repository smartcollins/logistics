import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const Contact = ()=>{
    return(
        <div>
            <div>{banner.slice(9, 10).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default Contact; 