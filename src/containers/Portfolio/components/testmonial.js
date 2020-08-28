import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images 
import test from '../../../images/portfolio/test.png'

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 0,
    autoplay: true,
    autoplaySpeed: 3000,
};



const PortfolioTestmonial = () => {
    return (
        <div className="portfolioTestmonialArea" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="testImg">
                            <img src={test} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Slider {...settings}>
                            <div className="testContent">
                                <i className="fa fa-quote-left"></i>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde.</p>
                                <h5>Arthur Hansen</h5>
                                <span>CEO / Letters Inc</span>
                            </div>
                            <div className="testContent">
                                <i className="fa fa-quote-left"></i>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde.</p>
                                <h5>Arthur Hansen</h5>
                                <span>CEO / Letters Inc</span>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default PortfolioTestmonial