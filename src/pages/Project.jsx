import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Caption from '../component/Caption';


const Project = ()=>{
    return(
        <div>
            <div>{banner.slice(4, 5).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <Caption mid={true} dark={true} txt={'our blog'} txt2={'our latest news'} />
        </div>
    )
}


export default Project; 