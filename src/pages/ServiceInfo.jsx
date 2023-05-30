import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const ServiceInfo = ()=>{
    return(
        <div>
            <div>{banner.slice(3,4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            iguc
        </div>
    )
}


export default ServiceInfo; 