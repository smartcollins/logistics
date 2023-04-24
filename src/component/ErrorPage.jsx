import React from 'react';
import banner from '../data/banner';
import Banner from './Banner';


const ErrorPage = ()=>{
    return(
        <div>
            <div>{banner.slice(11,12).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div>
                <p>4<span>0</span>4</p>
                <p>Oops! Page not found</p>
                <p>Lets's get you to where you need to be.</p>
                <button>Back to home</button>
            </div>
        </div>
    )
}


export default ErrorPage; 