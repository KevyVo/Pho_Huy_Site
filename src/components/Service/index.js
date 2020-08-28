import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Slider from "react-slick";
import { Div, FontAwesome, H3, P, A } from '../elements'
import SectionTitle from '../SectionTitle'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'


const services = [
    {
        title: 'Business Advisor',
        text: 'But I must explain to you how all this mistaken idea of denouncing born and I will give you.'
    },
    {
        title: 'Business Advisor',
        text: 'But I must explain to you how all this mistaken idea of denouncing born and I will give you.'
    },
    {
        title: 'Business Advisor',
        text: 'But I must explain to you how all this mistaken idea of denouncing born and I will give you.'
    },
    {
        title: 'Business Advisor',
        text: 'But I must explain to you how all this mistaken idea of denouncing born and I will give you.'
    },
    {
        title: 'Business Advisor',
        text: 'But I must explain to you how all this mistaken idea of denouncing born and I will give you.'
    },
    {
        title: 'Business Advisor',
        text: 'But I must explain to you how all this mistaken idea of denouncing born and I will give you.'
    },
    {
        title: 'Business Advisor',
        text: 'But I must explain to you how all this mistaken idea of denouncing born and I will give you.'
    },
]

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint:768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const ServiceComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>

            <Container>
                <Row>
                    <Col lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle financeSectionTitle"
                            title="Our Awesome Services"
                            text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
                        />
                    </Col>
                    <Col xs={12}>
                        <Slider {...settings}>
                            {services.map((service, i) => (
                                <Div
                                    key={i}
                                    className="slideWrapper"
                                >
                                    <Div className="serviceMainWrap">
                                        <Div className="serviceWrap">

                                            <Div className="bgShape"></Div>
                                            <H3>{service.title}</H3>
                                            <P>{service.text}</P>
                                            <A href="#">Click Now  <FontAwesome name="angle-double-right" /></A>
                                        </Div>
                                    </Div>
                                </Div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Div >
    )
}
export default ServiceComponent