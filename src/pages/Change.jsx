import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const Change = ()=>{
    return(
        <div>
            <div>{banner.slice(12, 13).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default Change; 