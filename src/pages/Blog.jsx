import React from 'react';
import banner from '../data/banner';
// import color from '../data/color';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import News from '../component/News';


const Blog = () => {
    return (
        <div>
            <div>{banner.slice(6, 7).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <Caption mid={true} dark={true} txt={'our blog'} txt2={'our latest news'}/>
            <News/>
        </div>
    )
}


export default Blog; 