import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {  Span, Ul, Li, A, FontAwesome, Div } from '../elements'
import './style.scss'


const HeaderTopComponent = ({ className }) => {
    return (
        <Div className={className}>
            <Container>
                <Div className="headerTopWrapper">
                    <Row>
                        <Col lg={9} xs={12}>
                            <Ul className="headerTopLeft">
                                <Li>
                                    <FontAwesome name="clock-o" />
                                    <Span>Mon- Fri: 10AM - 7PM</Span>
                                    <Span>Sat- Sun: 10AM - 3PM</Span>
                                </Li>
                                <Li>
                                    <FontAwesome name="map-marker" />
                                    <Span>78 Marmora Road, Kranata </Span>
                                    <Span>Halisohor, Indonasia</Span>
                                </Li>
                                <Li>
                                    <FontAwesome name="phone" />
                                    <Span>Call Us: </Span>
                                    <Span>(+66 0 2 56 24 857 76) </Span>
                                </Li>
                            </Ul>
                        </Col>
                        <Col lg={3} className="d-none d-lg-block">
                            <Div className="getaQuote">
                                <A href="#">get a quote</A>
                            </Div>
                        </Col>
                    </Row>
                </Div>
            </Container>
        </Div>
    )
}
export default HeaderTopComponent