import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Div, Image, H3, P, A, H4 } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

// images
import test from '../../images/finance/test/1.png'


const ClientComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle financeSectionTitle"
                            title="Our Awesome Client"
                            text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
                        />
                    </Col>
                    <Col lg={6} xs={12}>
                        <Div className="testmonialImg">
                            <Image src={test} alt="" />
                        </Div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <Div className="testContent">
                            <H3>Its Really Great For Us</H3>
                            <H4>We Already Work More than 500 Clients All Over The world</H4>
                            <P>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.denouncing pleasure and praising pain was born and I will give you.</P>
                            <Div>
                                <A className="readmoreBtn" href="#">Be Our Client</A>
                            </Div>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </Div >
    )
}
export default ClientComponent