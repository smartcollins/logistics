import React from 'react';
import banner from '../data/banner';
import ship from '../icons/ship-icon.svg'
import img from '../images/ser-info.png'
import img2 from '../images/ser-info2.png'
import img3 from '../images/ser-info3.png'
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import { ArrowRight, PlayCircle } from 'phosphor-react';
import color from '../data/color';


const ServiceInfo = ()=>{
    return(
        <div>
            <div>{banner.slice(3,4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{color: color.grayTxt}} className='mx-auto my-8 space-y-8 w-3/4'>
                <div className=' space-y-4'>
                    <img src={img} alt="sea transport" />
                    <div className='flex items-center gap-4'>
                        <img src={ship} alt="ship-icon" />
                        <p className=' text-lg font-bold capitalize text-black'>sea transport service</p>
                    </div>
                    <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    <p>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div>
                <div className='flex gap-4 h-[45vh]'>
                    <div className='w-full flex flex-col justify-between'>
                        <div>
                            <p className=' text-lg font-bold capitalize text-black'>benefit of service</p>
                            <p>Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis.</p>
                        </div>
                        <div className='flex gap-4'>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Clearance and compliance service</p>
                        </div>
                        <div className='flex gap-4'>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Saving Time to Deal with commodo iaculis</p>
                        </div>
                        <div className='flex gap-4'>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Automate your business elis tristique</p>
                        </div>
                        <div className='flex gap-4'>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Saving Time to Deal with commodo iaculis</p>
                        </div>
                    </div>
                    <img className='w-[60%]' src={img2} alt="trucks" />
                </div>
                <div className='flex items-center gap-4'>
                    {/* <img src={img3} alt="delivery" /> */}
                    <div style={{ backgroundImage: `url(${img3})` }} className="h-[45vh] w-full bg-cover bg-no-repeat bg-bottom relative">
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-white/40 bg-white/5 rounded-full">
                            <PlayCircle className="m-2" size={30} color="#ffffff" weight="fill" />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <p className=' text-lg font-bold capitalize text-black'>how it works</p>
                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, doloremque laudantium.</p>
                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default ServiceInfo; 