import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from "react-slick";
import { P, H2, A, FontAwesome, Div, Span, Image } from '../elements'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

// images
import sliderImg from '../../images/resturent/slider/2.png'

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};


const sliders = [
    {
        title: 'Good Food for ',
        subtitle: 'Good People',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        button: 'Know More'
    },
    {
        title: 'Good Food for ',
        subtitle: 'Good People',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        button: 'Know More'
    },
    {
        title: 'Good Food for ',
        subtitle: 'Good People',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        button: 'Know More'
    },
]

const HeroSliderComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Slider {...settings}>
                {sliders.map((slider, i) => (
                    <Div
                        key={i}
                        className="restaurentSlideWrapper"
                    >
                        <Container>
                            <Row>
                                <Col lg={{ size: 8, offset: 2 }} xs={12}>
                                    <Div className="sliderContent">
                                        <H2>{slider.title}<Span>{slider.subtitle}</Span></H2>
                                        <P>{slider.text}</P>
                                        <A href="#">{slider.button} <FontAwesome name="angle-double-right" /></A>
                                    </Div>
                                </Col>
                            </Row>
                        </Container>
                    </Div>
                ))}
            </Slider>
            <Container className="d-none d-xl-block">
                <Row>
                    <Col lg={{ size: 10, offset: 1 }}>
                        <Div className="sliderImage">
                            <Div
                                className="heroImage"
                            >
                                <Image src={sliderImg} alt="Hero" />
                            </Div>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </Div>

    )
}
export default HeroSliderComponent