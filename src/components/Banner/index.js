import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H2, P, Span, A } from '../elements'
import './style.scss'

const BannerComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }} md={{ size: 10, offset: 1 }}>
                        <Div className="contentWrap">
                            <H2>We Are Waiting For Some Exciting  <Span>Moment With You.</Span></H2>
                            <P>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</P>
                            <A href="#">Book Now</A>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </Div>
    )
}
export default BannerComponent