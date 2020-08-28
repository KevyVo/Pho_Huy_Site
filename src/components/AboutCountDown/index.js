import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3, H2, P, Li, Ul, FontAwesome } from '../elements'
import DateCountdown from 'react-date-countdown-timer';
import './style.scss'

class AboutCoundownComponent extends Component {
    constructor() {
        super()
        this.state = {
            count: 'January 01, 2020 00:00:00 GMT+03:00'
        }
    }
    render() {
        return (
            <Div className={this.props.className}>
                <Container>
                    <Row>
                        <Col lg={6} >
                            <Div className="aboutWrap">
                                <P>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</P>
                            </Div>
                        </Col>
                        <Col lg={{ size: 5, offset: 1 }}>
                            <Div className="aboutWrap">
                                <H3>Hello Designer People</H3>
                                <H2>Do it Hurry Because We Have Limited Site. </H2>
                            </Div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }} xs={12}>
                            <Div className="counterWrap">
                                <H2>The Event Will Start</H2>
                                <DateCountdown
                                    dateTo={this.state.count}
                                    locales_plural={['years', 'months', 'days', 'hours', 'minutes', 'seconds']}
                                />
                                <Ul>
                                    <Li> <FontAwesome name="map-marker" /> September 11 - 13 </Li>
                                    <Li><FontAwesome name="calendar" /> Melbourn , Australia </Li>
                                </Ul>
                            </Div>
                        </Col>
                    </Row>
                </Container>
            </Div>
        )
    }

}
export default AboutCoundownComponent