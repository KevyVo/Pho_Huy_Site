import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3, P, Image, Span } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

// images
import about1 from '../../images/book/about/1.jpg'
import about2 from '../../images/book/about/3.jpg'

const abouts = [
    {
        image: about1,
        title: 'Established Companies',
        text: 'Startuppers inspired with their ideas need some help to implement their ects.Startuppers inspired need some.',
    },
    {
        image: about2,
        title: 'Established Companies',
        text: 'Startuppers inspired with their ideas need some help to implement their ects.Startuppers inspired need some.',
        className: 'order-last',
        left: 'aboutContent2'
    },
]
const AboutComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }}>
                        <SectionTitle
                            className="sectionTitle"
                            title="You Need To Know About Us"
                            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    </Col>
                </Row>
                {abouts.map((about, i) => (
                    <Div key={i} className="AboutWrap">
                        <Row noGutters>
                            <Col className={about.className && about.className} lg={6} md={6}>
                                <Div className="aboutImg">
                                    <Image src={about.image} alt="" />
                                </Div>
                            </Col>
                            <Col lg={6} md={6}>
                                <Div className={!about.left ? 'aboutContent' : `aboutContent ${about.left}`}>
                                    <H3>{about.title} <Span className="line"></Span></H3>
                                    <P>{about.text}</P>
                                </Div>
                            </Col>
                        </Row>
                    </Div>
                ))}

            </Container>
        </Div>
    )
}
export default AboutComponent