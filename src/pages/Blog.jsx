import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const Blog = ()=>{
    return(
        <div>
            <div>{banner.slice(7, 8).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default Blog; 