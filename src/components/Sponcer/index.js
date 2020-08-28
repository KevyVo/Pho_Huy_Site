import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Div, Image, A } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

// images
import sponsor1 from '../../images/conferrence/sponsor/1.png'
import sponsor2 from '../../images/conferrence/sponsor/2.png'
import sponsor3 from '../../images/conferrence/sponsor/3.png'
import sponsor4 from '../../images/conferrence/sponsor/4.png'

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4]

const SponsorComponent = ({ className }) => {
    return (
        <Div className={className}>
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }} xs={12}>
                        <SectionTitle
                            className="sectionTitle conferrenceSectionTitle"
                            title="Sponcer"
                            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    </Col>
                </Row>
                <Row>
                    {sponsors.map((sponsor, i) => (
                        <Col key={i} lg={3} sm={6} xs={12}>
                            <A href="#">
                                <Image src={sponsor} alt="" />
                            </A>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Div>
    )
}
export default SponsorComponent