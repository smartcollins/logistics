import React from 'react';
import news from '../data/news';
import Banner from '../component/Banner';
import { InstagramLogo, FacebookLogo, TwitterLogo, LinkedinLogo} from 'phosphor-react';


const BlogInfo = ()=>{
    return(
        <div>
            <div>{news.slice(1, 2).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='flex bg-red-500'>
                <div>
                    <p>your logistics solutions</p>
                    <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                    <p>“Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business.”</p>
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
                        <p>category : shipping</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}


export default BlogInfo; 