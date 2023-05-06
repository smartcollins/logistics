import React from 'react';
import news from '../data/news';
import Banner from '../component/Banner';


const BlogInfo = ()=>{
    return(
        <div>
            <div>{news.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default BlogInfo; 