import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const Liecenses = ()=>{
    return(
        <div>
            <div>{banner.slice(13, 14).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default Liecenses; 