import React from 'react'
import { Row, Col } from 'reactstrap'
import { Parallax } from 'react-scroll-parallax';

// images 
import shape from '../../../images/application/shape/hero.svg'
import hero from '../../../images/application/hero.svg'

const ApplicationHero = () => {
    return (
        <div className="applicationHeroArea" id="home" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <Parallax className="hero" x={[20, -20]} tagOuter="div">
                            <div className="heroContent">
                                <h2>We Love Developers</h2>
                                <p>So strongly and metaphysically did I conceive of my situation then, that while earnestly.</p>
                                <ul>
                                    <li><button>Discover</button></li>
                                    <li><button>Contact <i className="fa fa-comments"></i></button></li>
                                </ul>
                            </div>
                        </Parallax>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Parallax className="heroImage text-right" x={[-20, 20]} tagOuter="div">
                            <img src={hero} />
                        </Parallax>
                    </div>
                </div>
            </div>
            <div className="heroShape">
                <img src={shape} alt="" />
            </div>
        </div>
    )
}
export default ApplicationHero