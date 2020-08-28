import React from 'react'
import { Parallax } from 'react-scroll-parallax';

// images 
import shape from '../../../images/application/shape/shape3.svg'
import shape2 from '../../../images/application/shape/shape4.svg'

const ApplicationContent = () => {
    return (
        <div className="applicationContentArea" id="about" >
            <div className="container">
                <div className="row align-items-center  pb-100">
                    <div className="col-lg-6">
                        <Parallax
                            className="bannerImg"
                            x={[-5, 5]}
                            tagOuter="div">
                            <img src={shape} />
                        </Parallax>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <Parallax
                            className="bannerContent"
                            x={[5, -5]}
                            tagOuter="div">
                            <h2>Find what you need quickly</h2>
                            <p>We proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one.</p>
                            <p>It was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale.</p>
                        </Parallax>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 offset-lg-1">
                        <Parallax
                            className="bannerContent"
                            x={[5, -5]}
                            tagOuter="div">
                            <h2>Find what you need quickly</h2>
                            <p>We proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one.</p>
                            <p>It was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale.</p>
                        </Parallax>
                    </div>
                    <div className="col-lg-6">
                        <Parallax
                            className="bannerImg"
                            x={[-5, 5]}
                            tagOuter="div">
                            <img src={shape2} />
                        </Parallax>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ApplicationContent