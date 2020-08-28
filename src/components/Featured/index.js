import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3, P } from '../elements'
import CountUp from 'react-countup';
import './style.scss'

const featureds = [
    {
        count: 16500,
        title: 'Download',
        text: 'Immediately after glancing through the first pages of the book it became obvious to me – this is a masterpiece'
    },
    {
        count: 7300,
        title: 'REVIEWS',
        text: 'Immediately after glancing through the first pages of the book it became obvious to me – this is a masterpiece'
    },
    {
        count: 1334,
        title: 'COMMENTS',
        text: 'Immediately after glancing through the first pages of the book it became obvious to me – this is a masterpiece'
    },
]

const FeaturedComponent = ({ className }) => {
    return (
        <Div className={className}>
            <Container>
                <Row>
                    {featureds.map((featured, i) => (
                        <Col key={i} lg={4} md={6} xs={12}>
                            <Div className="featuredWrap">
                                <CountUp
                                    duration={2}
                                    end={featured.count}
                                />
                                <H3>{featured.title}</H3>
                                <P>{featured.text}</P>
                            </Div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Div>
    )
}
export default FeaturedComponent