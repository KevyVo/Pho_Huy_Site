import React from 'react'
import { Row, Col } from 'reactstrap'
import { Parallax } from 'react-scroll-parallax';

// images 
import service1 from '../../../images/app/icons/service1.svg'
import service2 from '../../../images/app/icons/service2.svg'
import service3 from '../../../images/app/icons/service3.svg'

const services = [
    {
        image: service1,
        title: 'Share',
        text: 'Launch party pitch technology user experience innovator buzz stealth MVP business model.'
    },
    {
        image: service2,
        title: 'Send Message',
        text: 'Launch party pitch technology user experience innovator buzz stealth MVP business model.'
    },
    {
        image: service3,
        title: 'Upload',
        text: 'Launch party pitch technology user experience innovator buzz stealth MVP business model.'
    },
]

const AppService = () => {
    return (
        <div className="appServiceArea" id="service">
            <div className="container">
                <div className="appServiceWrap">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-12">
                            <div className="appSectionTitle">
                                <span>How it works?</span>
                                <h2>Simple and fast</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((service, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-12">
                                <div className="serviceWrapper">
                                    <span className="serviceIcon">
                                        <img src={service.image} alt="" />
                                    </span>
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AppService