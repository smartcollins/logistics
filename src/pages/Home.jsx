import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';


const Home = ()=>{
    return(
        <div>
            <div>{banner.slice(0, 1).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default Home; 