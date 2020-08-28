import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Div, H3, P } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

const faqs = [
    {
        title: 'Q 1:  It is a long established fact that a reader will be distracted ?',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracte'
    },
    {
        title: 'Q 2:  It is a long established fact that a reader will be distracted ?',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracte'
    },
    {
        title: 'Q 3:  It is a long established fact that a reader will be distracted ?',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracte'
    },
    {
        title: 'Q 4:  It is a long established fact that a reader will be distracted ?',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracte'
    },
]

const ConferrenceFaq = ({ className }) => {
    return (
        <Div className={className}>
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }} xs={12}>
                        <SectionTitle
                            className="sectionTitle conferrenceSectionTitle"
                            title="Faqs"
                            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    </Col>
                    {faqs.map((faq, i) => (
                        <Col key={i} lg={6} xs={12}>
                            <Div className="faqWrap">
                                <H3>{faq.title}</H3>
                                <P>{faq.text}</P>
                            </Div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Div>
    )
}
export default ConferrenceFaq