import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import { NavLink } from 'react-router-dom';
 

const AboutPage = () => {
    return (
        <div className='grid h-full flex align-content-center'>
            <div className='col-12 lg:col-6' style={{ height: '700px' }}>
                <Fieldset legend="About Us" className='h-full text-2xl'>
                    <p>
                        Ccl Group is a locally owned (Perth) and registered business that specializes in steel fabrication and welding, especially for <span className='font-semibold' style={{ display:'inline-block' }}>mining site equipments</span>.
                    </p>
                    <p>
                        With over <span className='font-semibold' style={{ display:'inline-block' }}>15 years experience in the mining steel fabrication and welding industry</span> (having completed different various qualifications in Metal Fabrication and Welding), 
                        Ccl Group extensive experience in the fabrication of steel and other metal  <span className='font-semibold' style={{ display:'inline-block' }}>mining site equipments</span>.
                    </p>
                    <p>
                        We provide both <span className='font-semibold' style={{ display:'inline-block' }}>mobile and on site services</span> but we also could bring your projects to our workshop if you can not provide a working site.
                    </p>
                </Fieldset>
            </div>
           <div className='col-12 lg:col-6' style={{ height: '700px' }}>
                <Fieldset legend="Our Goal" className='h-full text-2xl'>
                    <p>
                        As a Perth based steel fabrication and welding services provider, we are committed finding local industrial companies and
                        provide the services which can help solving <span className='font-semibold' style={{ display:'inline-block' }}>short term stuff shortage</span> or <span className='font-semibold' style={{ display:'inline-block' }}>tight project schedule problem</span>. 
                    </p>

                    <p>
                        With over 15 years experience we can provide the competent team needed to meet partner engineering requirements, <span className='font-semibold' style={{ display:'inline-block' }}>regardless of time or location.</span>
                    </p>
                    <p>
                        No matter the size of your project, the length of the project period, do not hesitate to <NavLink data-pr-tooltip=' Contact Us' to='/contact' className='font-medium text-3xl text-primary'>Contact Us</NavLink> to see how Ccl Group can help you.
                    </p>
                </Fieldset>
           </div>
        </div>
    );
};

export default AboutPage;
