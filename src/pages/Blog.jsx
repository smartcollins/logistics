import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Caption from '../component/Caption';


const Blog = () => {
    return (
        <div>
            <div>{banner.slice(6, 7).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className=' mx-auto w-fit'>
                <Caption
                    dark={true}
                    txt={'our blog'}
                    txt2={'our latest news'}
                />
            </div>
        </div>
    )
}


export default Blog; 