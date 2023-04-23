import React from 'react';
import banner from '../data/banner';
import Banner from './Banner';


const ErrorPage = ()=>{
    return(
        <div>
            {banner.slice(11,12).map((item, idx) => <Banner key={idx} {...item} />)}
        </div>
    )
}


export default ErrorPage; 