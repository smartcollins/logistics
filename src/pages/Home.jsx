import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import news from '../data/news';
import News from '../component/News';


const Home = ()=>{
    return(
        <div>
            <div>{banner.slice(0, 1).map((item, idx) => <Banner key={idx} {...item} />)}</div>\
            <div className=' space-y-4 mx-4 lg:my-8 lg:w-3/4 lg:mx-auto xl:w-3/5'>
                {news.map((item,idx)=><News key={idx} {...item}/>)}
            </div>
            <Footer/>
        </div>
    )
}


export default Home; 