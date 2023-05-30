import React from 'react';
import banner from '../data/banner';
import ship from '../icons/ship-icon.svg'
import Banner from '../component/Banner';
import { ArrowRight } from 'phosphor-react';
import Footer from '../component/Footer';


const ServiceInfo = ()=>{
    return(
        <div>
            <div>{banner.slice(3,4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <img src={ship} alt="ship-icon" />
                        <p>sea transport service</p>
                    </div>
                    <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    <p>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div>
                <div>
                    <div>
                        <p>benefit of service</p>
                        <p>Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis.</p>
                        <div>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Clearance and compliance service</p>
                        </div>
                        <div>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Saving Time to Deal with commodo iaculis</p>
                        </div>
                        <div>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Automate your business elis tristique</p>
                        </div>
                        <div>
                            <ArrowRight size={20} color='#000000'/>
                            <p>Saving Time to Deal with commodo iaculis</p>
                        </div>
                    </div>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>how it works</p>
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