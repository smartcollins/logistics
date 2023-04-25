import React from 'react';
import color from '../data/color';
import banner from '../data/banner';
import Banner from './Banner';


const Protection = ()=>{
    <div>
        <div>{banner.slice(11, 12).map((item, idx) => <Banner key={idx} {...item} />)}</div>
    </div>
}


export default Protection; 