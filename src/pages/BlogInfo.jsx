import React from 'react';
import color from '../data/color';
import news from '../data/news';
import cargo from '../images/blog-info.png';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import Footer from '../component/Footer'
import { InstagramLogo, FacebookLogo, TwitterLogo, LinkedinLogo } from 'phosphor-react';


const BlogInfo = () => {
    const itemsAry = [{
        txt: 'shipping',
        amt: '3'
    }, {
        txt: 'service',
        amt: '5'
    }, {
        txt: 'transport',
        amt: '2'
    }, {
        txt: 'warehouse',
        amt: '5'
    }, {
        txt: 'transport industries',
        amt: '5'
    }]

    const items = itemsAry.map((item, idx) => <div className='flex items-center justify-between border-b border-[#d6d6d6] py-2'>
        <p className='text-[#666c89]'>{item.txt}</p>
        <p className='font-bold'>({item.amt})</p>
    </div>)

    return (
        <div>
            <div>{news.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className=' my-12 flex gap-8 w-[75%] mx-auto'>
                <div className=' first-letter:capitalize space-y-2'>
                    <p style={{ color: color.darkTxt }} className=' capitalize text-xl font-bold'>your logistics solutions</p>
                    <p className=' text-[#666c89]'>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                    <p style={{ background: color.blueBg }} className=' italic text-white p-4 text-center'>“Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business.”</p>
                    <p style={{ color: color.darkTxt }} className=' capitalize text-2xl font-bold'>safest logistics solutions provider with integrity</p>
                    <p className=' text-[#666c89]'>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                    <div className='text-center text-[#666c89] capitalize'>
                        <img className='w-full object-cover' src={cargo} alt="cargo-ship" />
                        <p>the cargo ship</p>
                    </div>
                    <div className=' text-[#666c89] space-y-4'>
                        <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                        <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</p>
                    </div>
                    <div className='flex items-center justify-between  border-y border-[#d6d6d6] py-2'>
                        <div className='flex items-center justify-between w-1/5'>
                            <InstagramLogo size={20} color="#1c1f35" />
                            <FacebookLogo size={20} color="#1c1f35" weight="fill" />
                            <TwitterLogo size={20} color="#1c1f35" weight="fill" />
                            <LinkedinLogo size={20} color="#1c1f35" weight="fill" />
                        </div>
                        <p className='text-[#666c89]'>Category : Shipping</p>
                    </div>
                </div>
                <div className=' space-y-8'>
                    <div style={{ color: color.darkTxt }} className='capitalize bg-[#eeeeee] p-4'>
                        <p className='text-xl font-bold mb-2'>categories</p>
                        {items}
                    </div>
                    <div className=' first-letter:capitalize bg-[#eeeeee] p-4 space-y-3'>
                        <p style={{ color: color.darkTxt }} className='text-xl font-bold'>how can we help</p>
                        <p className='text-[#666c89]'>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</p>
                        <button style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='py-2 text-black w-1/3 font-semibold'>contact</button>
                    </div>
                    <div style={{ background: color.blueBg, color: 'white' }} className=' capitalize space-y-4 p-4'>
                        <div>
                            <div className='w-fit'><Caption txt={'get in touch'} /></div>
                            <p>need help</p>
                            <p>(00) 112 365 489</p>
                        </div>
                        <div className='border-t border-[#1d2342] pt-4'>
                            <p>email</p>
                            <p className=' normal-case'>contact@logistics.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default BlogInfo; 