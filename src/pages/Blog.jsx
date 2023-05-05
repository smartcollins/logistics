import React from 'react';
import banner from '../data/banner';
import news from '../data/news';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import News from '../component/News';
import Footer from '../component/Footer';


const Blog = () => {
    const items = news.map((item, idx) => <News key={idx} {...item} />)
    return (
        <div>
            <div>{banner.slice(6, 7).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <Caption mid={true} dark={true} txt={'our blog'} txt2={'our latest news'} />
            <div className=' space-y-4 my-8 w-3/5 mx-auto'>
                {items}
            </div>
            <Footer />
        </div>
    )
}


export default Blog; 