import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import Footer from '../component/Footer';
import card from '../data/card';
import Card from '../component/Card';
import news from '../data/news';
import News from '../component/News';


const Home = ()=>{
    return(
        <div>
            <div>{banner.slice(0, 1).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className=' space-y-4 mx-4 lg:my-8 lg:w-3/4 lg:mx-auto xl:w-3/5'>
                {news.map((item,idx)=><News key={idx} {...item}/>)}
            </div>
            <div className=' md:space-y-8'>
                <Caption mid={true} dark={true} txt="the transporters" txt2="meet expert team" />
                <div className="space-y-4 w-11/12 gap-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4">
                    {card.slice(0, 3).map((item, idx) => <div key={idx} className='md:last:hidden xl:last:block'><Card {...item} /></div>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Home; 