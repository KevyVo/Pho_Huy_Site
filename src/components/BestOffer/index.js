import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3,  P, Span, A } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

// images
import offer1 from '../../images/travel/offer/1.jpg'
import offer2 from '../../images/travel/offer/2.jpg'
import offer3 from '../../images/travel/offer/3.jpg'

const offers = [
    { title: 'Hiller Side River', country: 'Australia', newPrice: '$ 2250', oldPrice: '$ 3450', image: offer1 },
    { title: 'Hiller Side River', country: 'Australia', newPrice: '$ 2250', oldPrice: '$ 3450', image: offer2, className: 'active' },
    { title: 'Hiller Side River', country: 'Australia', newPrice: '$ 2250', oldPrice: '$ 3450', image: offer3 },
]

const BestOfferComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col xl={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle travelSectionTitle"
                            title="Best Offer"
                            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
                        />
                    </Col>
                </Row>
                <Row>
                    {offers.map((offer, i) => (
                        <Col key={i} lg={4} md={6} xs={12}>
                            <Div style={{ background: `url(${offer.image}) no-repeat center center / cover` }} className={`offerWrap ${offer.className}`}>
                                <Div className="offerContent">
                                    <H3>{offer.title}</H3>
                                    <P>{offer.country}</P>
                                    <Span>{offer.newPrice} <del>{offer.oldPrice}</del></Span>
                                    <A href="#">Book Now</A>
                                </Div>
                            </Div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </Div>
    )
}
export default BestOfferComponent