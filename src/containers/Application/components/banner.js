import React from 'react'
import { Parallax } from 'react-scroll-parallax';

// images 
import mobile from '../../../images/application/mobile.png'

const ApplicationBanner = () => {
    return (
        <div className="applicationBannerArea" id="home" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                        <Parallax
                            className="bannerContent"
                            x={[10, -10]}
                            tagOuter="div">
                            <h2>Brand New iPhone X</h2>
                            <span>In the tumultuous business of cutting-in and attending.</span>
                            <p>It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one.</p>
                        </Parallax>
                    </div>
                    <div className="col-lg-7 col-12">
                        <Parallax
                            className="bannerImg"
                            x={[-10, 10]}
                            tagOuter="div">
                            <img src={mobile} />
                        </Parallax>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ApplicationBanner