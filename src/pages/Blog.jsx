import React from 'react';
import Caption from '../component/Caption';
import News from '../component/News';


const Blog = () => {
    return (
        <div className=' overflow-x-clip'>
            <Caption mid={true} dark={true} txt={'our blog'} txt2={'our latest news'} />
            <div className=' space-y-4 mx-4 lg:my-8 lg:w-3/4 lg:mx-auto xl:w-3/5'>
                <News/>
            </div>
        </div>
    )
}


export default Blog;