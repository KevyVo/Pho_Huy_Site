import React, { useState } from 'react'

import icon1 from '../../../images/portfolio/icon/cup.png'
import icon2 from '../../../images/portfolio/icon/star.png'
import icon3 from '../../../images/portfolio/icon/camera.png'

const PortfolioCallToAction = () => {
    return (
        <div className="agencyCallToActionArea portfolioCallToActionArea">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h2>Some of or Honors Hoping to Impress You</h2>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="callToactionWrap">
                                    <h3><img src={icon1} alt="" /> 600</h3>
                                    <p>Awards Won</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="callToactionWrap">
                                    <h3><img src={icon2} alt="" /> 589</h3>
                                    <p>Satisfied clients</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="callToactionWrap">
                                    <h3><img src={icon3} alt="" /> 82</h3>
                                    <p>Startup Crowth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PortfolioCallToAction