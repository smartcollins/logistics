import React from 'react';
import banner from '../data/banner';
import news from '../data/news';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import News from '../component/News';


const Blog = () => {
    const items  = news.map((item,idx)=><News key={idx} {...item}/>)
    return (
        <div>
            <div>{banner.slice(6, 7).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <Caption mid={true} dark={true} txt={'our blog'} txt2={'our latest news'}/>
            {items}
        </div>
    )
}


export default Blog; 