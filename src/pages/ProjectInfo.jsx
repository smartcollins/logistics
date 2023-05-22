import React from 'react';
import Banner from '../component/Banner';
import banner from '../images/br-project2.png'
import img from '../images/1.png'
import color from '../data/color';
import { ArrowRight } from 'phosphor-react';


const ProjectInfo = ()=>{
    const listAry = [{
        txt: 'customer',
        txt2: 'david warner'
    },{
        txt: 'category',
        txt2: 'warehouse transportation'
    },{
        txt: 'date',
        txt2: '12 december, 2022'
    },{
        txt: 'status',
        txt2: 'completed'
    },{
        txt: 'tags',
        txt2: 'life style travel, best delivery'
    }]

    const list = listAry.map((item,idx)=><div key={idx} className='flex items-center gap-4'>
    <p className=' font-medium'>{item.txt}</p>
    <span>:</span>
    <p>{item.txt2}</p>
</div>)

const list2Ary = [{
    txt: 'national customer service center - 24 hours a day.'
},{
    txt: 'online shipping navigator lets you quote, book, and track shipments '
},{txt: 'your logistics needs are at thr heart of our business'},{txt: 'very carefull handling of valueable goods'},{txt:'time saving and convenient transportation service in your area'}]

const list2 = list2Ary.map((item,idx)=><div key={idx} className='flex items-center gap-4 font-medium capitalize'>
<ArrowRight size={16} color='#000000'/>
<p>{item.txt}</p>
</div>)

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
                        <div className='mt-4 space-y-4'>
                            {list}
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-8 space-y-4'>
                <p className=' text-2xl font-bold capitalize'>wharehouse transportation</p>
                <p className=' text-sm text-[#666c89]'>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</p>
                <div className=' space-y-4'>
                    {list2}
                </div>
            </div>
        </div>
    )
}


export default ProjectInfo; 