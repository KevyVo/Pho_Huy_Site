import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from "react-slick";
import { P, H2, A, Div, Span } from '../elements'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin:0,
    autoplay: true,
    autoplaySpeed: 3000,
};


const sliders = [
    {
        image: 'sliderImg1',
        title: 'Courage is grace under ',
        subtitle: 'pressure',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.',
        button: 'Click Here'
    },
    {
        image: 'sliderImg2',
        title: 'Courage is grace under ',
        subtitle: 'pressure',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.',
        button: 'Click Here'
    },
    {
        image: 'sliderImg1',
        title: 'Courage is grace under',
        subtitle: 'pressure',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.',
        button: 'Click Here'
    },
]

const HeroSliderComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Slider {...settings}>
                {sliders.map((slider, i) => (
                    <Div
                        key={i}
                        className={`slideWrapper ${slider.image}`}
                    >
                        <Container>
                            <Row>
                                <Col xl={5} lg={6} md={9} xs={12}>
                                    <H2>{slider.title}<Span>{slider.subtitle}</Span></H2>
                                    <P>{slider.text}</P>
                                    <A href="#">{slider.button}</A>
                                </Col>
                            </Row>
                        </Container>
                    </Div>
                ))}
            </Slider>
        </Div>

    )
}
export default HeroSliderComponent