import React from 'react';
import news from '../data/news';
import Banner from '../component/Banner';
import { InstagramLogo, FacebookLogo, TwitterLogo, LinkedinLogo} from 'phosphor-react';
import Caption from '../component/Caption';


const BlogInfo = ()=>{
    return(
        <div>
            <div>{news.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='flex bg-red-500'>
                <div className=' first-letter:capitalize'>
                    <p>your logistics solutions</p>
                    <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                    <p  className=' italic'>“Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business.”</p>
                    <p>safest logistics solutions provider with integrity</p>
                    <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                    <div>
                        <img src="" alt="" />
                        <p>the cargo ship</p>
                    </div>
                    <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                    <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</p>
                    <div>
                        <div className='flex items-center justify-between w-2/5'>
                            <InstagramLogo size={20} color="#ffffff" />
                            <FacebookLogo size={20} color="#ffffff" weight="fill" />
                            <TwitterLogo size={20} color="#ffffff" weight="fill" />
                            <LinkedinLogo size={20} color="#ffffff" weight="fill" />
                        </div>   
                        <p>Category : Shipping</p>
                    </div>
                </div>
                <div>
                    <div className='capitalize'>
                        <p>categories</p>
                        <div className='flex items-center justify-between border-b border-[#d6d6d6] py-2'>
                            <p>shipping</p>
                            <p>(3)</p>
                        </div>
                        <div className='flex items-center justify-between border-b border-[#d6d6d6] py-2'>
                            <p>service</p>
                            <p>(5)</p>
                        </div>
                        <div className='flex items-center justify-between border-b border-[#d6d6d6] py-2'>
                            <p>transport</p>
                            <p>(2)</p>
                        </div>
                        <div className='flex items-center justify-between border-b border-[#d6d6d6] py-2'>
                            <p>warehouse</p>
                            <p>(5)</p>
                        </div>
                        <div className='flex items-center justify-between border-b border-[#d6d6d6] py-2'>
                            <p>transport industries</p>
                            <p>(5)</p>
                        </div>
                    </div>
                    <div className=' first-letter:capitalize'>
                        <p>how can we help</p>
                        <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</p>
                        <button>contact</button>
                    </div>
                    <div className=' capitalize'>
                        <div>
                            <Caption txt={'get in touch'}/>
                            <p>need help</p>
                            <p>(00) 112 365 489</p>
                        </div>
                        <div>
                            <p>email</p>
                            <p className=' normal-case'>contact@logistics.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogInfo; 