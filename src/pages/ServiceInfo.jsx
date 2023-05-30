import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const ServiceInfo = ()=>{
    return(
        <div>
            <div>{banner.slice(4, 3).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default ServiceInfo; 