import React from 'react'
import { Container, Row, Col } from 'reactstrap'


// images 
import icon1 from '../../../images/agency/icon/service4.png'
import icon2 from '../../../images/agency/icon/service1.png'
import icon3 from '../../../images/agency/icon/service2.png'

const services = [
    {
        icon: icon1,
        title: 'Photograph',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        icon: icon2,
        title: 'Truing',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        icon: icon3,
        title: 'Photoprinting',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
]

const PortfolioService = () => {
    return (
        <div className="agencyServiceArea" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="agencySectionTitle">
                            <h2>Elaborate Service</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                    </div>
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-12">
                            <div className="agencyServiceWrap text-center">
                                <img src={service.icon} alt="" />
                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}
export default PortfolioService