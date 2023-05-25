import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Footer from '../component/Footer';


const Service = ()=>{
    return(
        <div>
            <div>{banner.slice(3, 4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <Footer/>
        </div>
    )
}


export default Service; 