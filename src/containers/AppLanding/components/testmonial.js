import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images 
import test1 from '../../../images/app/test/img1.png'
import test2 from '../../../images/app/test/img2.png'
import test3 from '../../../images/app/test/img3.png'
import icon from '../../../images/app/icons/test.svg'
const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

const testimonials = [
    {
        name: 'Silvia Natalia',
        sub: 'Tanahcon, Founder',
        image: test1,
        text: 'Graphical user interface strategy lean startup ecosystem disruptive launch party interaction design infographic series A financing release innovator.'
    },
    {
        name: 'Silvia Natalia',
        sub: 'Tanahcon, Founder',
        image: test2,
        text: 'Graphical user interface strategy lean startup ecosystem disruptive launch party interaction design infographic series A financing release innovator.'
    },
    {
        name: 'Silvia Natalia',
        sub: 'Tanahcon, Founder',
        image: test3,
        text: 'Graphical user interface strategy lean startup ecosystem disruptive launch party interaction design infographic series A financing release innovator.'
    },
    {
        name: 'Silvia Natalia',
        sub: 'Tanahcon, Founder',
        image: test1,
        text: 'Graphical user interface strategy lean startup ecosystem disruptive launch party interaction design infographic series A financing release innovator.'
    },
]

const AppTestmonial = () => {
    return (
        <div className="appTestmonialArea" id="testmonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="appSectionTitle text-left">
                            <span>Pricing</span>
                            <h2>Choose Pricing plan</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <Slider {...settings}>
                            {testimonials.map((test, i) => (
                                <div key={i} className="testWrapper">
                                    <span className="icon">
                                        <img src={icon} alt="" />
                                    </span>
                                    <p>{test.text}</p>
                                    <div className="testInfo">
                                        <div className="testImg">
                                            <img src={test.image} alt="" />
                                        </div>
                                        <div className="testContent">
                                            <h4>{test.name}</h4>
                                            <span>{test.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppTestmonial