import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3, P, Span, FontAwesome, } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

const reviews = [
    {
        text: 'On the other hand, we are denounce with in righteous indignation and dislike men who are so beguiled and a demoralized by the charms of pleasure.',
        name: 'Jon Doe',
        title: 'Founder',
    },
    {
        text: 'On the other hand, we are denounce with in righteous indignation and dislike men who are so beguiled and a demoralized by the charms of pleasure.',
        name: 'Alex Smit',
        title: 'Founder',
    },
    {
        text: 'On the other hand, we are denounce with in righteous indignation and dislike men who are so beguiled and a demoralized by the charms of pleasure.',
        name: 'Jon Dow',
        title: 'Founder',
    },
]

const ClientReviewComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col xl={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle travelSectionTitle"
                            title="Review From Client"
                            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
                        />
                    </Col>
                </Row>
                <Row>
                    {reviews.map((review, i) => (
                        <Col key={i} lg={4} sm={6} xs={12}>
                            <Div className="reviewWrap">
                                <FontAwesome name="quote-left" />
                                <P>{review.text}</P>
                                <H3>{review.name}</H3>
                                <Span>{review.title}</Span>
                            </Div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </Div>
    )
}
export default ClientReviewComponent