import React from 'react'
import { Div, P, Span, H3 } from '../elements'
import { Container, Row, Col } from 'reactstrap'
import SectionTitle from '../SectionTitle'
import './style.scss'


const testmonials = [
    {
        name: 'Robert K Merton',
        subTitle: 'CEO , Hambulgar',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.There are many variations of passages of Lorem Ipsum available'
    },
    {
        name: 'Robert K Merton',
        subTitle: 'CEO , Hambulgar',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.There are many variations of passages of Lorem Ipsum available'
    },
]

const TestmonialComponent = ({ className,id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }}>
                        <SectionTitle
                            className="sectionTitle"
                            title="Testimonials From Our Supporters"
                            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    </Col>
                    {testmonials.map((testmonial, i) => (
                        <Col key={i} lg={6}>
                            <Div className="testWrap">
                                <H3>{testmonial.name}</H3>
                                <Span>{testmonial.subTitle}</Span>
                                <P>{testmonial.text}</P>
                            </Div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </Div>
    )
}
export default TestmonialComponent