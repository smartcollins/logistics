import React from 'react';
import Banner from '../component/Banner';
import banner from '../images/br-project2.png'
import img from '../images/1.png'
import color from '../data/color';


const ProjectInfo = ()=>{
    return(
        <div>
            <Banner img={banner} txt={'warehouse transportation'} info={'air cargo transportataion'} />
            <div style={{background: color.blueBg}} className='h-full py-12'>
                <div className='flex items-center gap-8 w-3/4 mx-auto bg-red-500 capitalize'>
                    <div className='bg-red-300 w-3/4'>
                        <img className='w-full object-cover' src={img} alt="project detail" />
                    </div>
                    <div className='w-full'>
                        <p className=' font-bold text-xl'>project details</p>
                        <div className='my-4 space-y-4'>
                            <div className='flex items-center gap-4'>
                                <p className=' font-medium'>customer</p>
                                <span>:</span>
                                <p>david warner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectInfo; 