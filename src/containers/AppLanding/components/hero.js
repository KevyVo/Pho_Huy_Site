import React from 'react'
import { Row, Col } from 'reactstrap'
import { Parallax } from 'react-scroll-parallax';

// images 
import android from '../../../images/app/android.svg'
import ios from '../../../images/app/ios.svg'
import mobile from '../../../images/app/ios.png'

const AppHero = () => {
    return (
        <div className="appHeroArea" id="home" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="heroContent">
                            <h2>Discover great things with our app </h2>
                            <p>Business plan lean startup holy grail disruptive. Crowdfunding beta prototype gen-z incubator niche market.</p>
                            <ul>
                                <li><img src={android} alt="" /></li>
                                <li><img src={ios} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="heroContent text-right">
                            <img src={mobile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <span className="circleShape"></span>
        </div>
    )
}
export default AppHero