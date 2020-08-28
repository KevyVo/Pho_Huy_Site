import React from 'react'
import { Row, Col } from 'reactstrap'
import { Parallax } from 'react-parallax';
// images 
import hero from '../../../images/portfolio/hero.jpg'

const PortfolioHero = () => {
    return (
        <Parallax
            bgImage={hero}
            bgClassName="heroBg"
            contentClassName="heroContentWrapper"
            className="portfolioHeroArea"
            strength={100}>
            <div className="heroWrapper" id="home" >
                <div className="container">
                    <Row>
                        <Col lg={{ offset: 6, size: 6 }}>
                            <div className="heroContent">
                                <h2>Power Your <span>Brand.</span></h2>
                                <p>Duis aute irure in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <a href="#">Contact Us</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Parallax>


    )
}
export default PortfolioHero