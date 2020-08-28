import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3, P, Span, FontAwesome, H2, A } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'


const RastaurentAboutComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle rastaurentSectionTitle"
                            title="ABOUT OUR"
                            colorText="Restaurent"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                        />
                    </Col>
                </Row>
            </Container>
            <Div className="aboutWrapper">
                <Container>
                    <Row>
                        <Col lg={{ size: 6, offset: 6 }}>
                            <Div className="aboutContent">
                                <H3>I’m <Span>MultiLan</Span></H3>
                                <H2>Welcome To My Restaurant</H2>
                                <P>A putrid, nicotine-shaded mist loomed over Beijing on Thursday after a massive sandstorm slam med into the Chinese capital bringing the latest airpocalypse to this smog-choked city. Dozens of flights were reportedly cancelled at Beijing’s airport, the world’s second busiest, and authorities urged residents to stay.</P>
                                <P>Airpocalypse to this smog-choked city. Dozens of flights were reportedly cancelled at Beijing’s airport, the world’s second busiest, and authorities urged residents to stay.</P>
                                <A href="#">See Menu Card  <FontAwesome name="angle-double-right" /></A>
                            </Div>
                        </Col>
                    </Row>
                </Container>
                <Div className="aboutImg d-none d-lg-block"></Div>
            </Div>
        </Div>
    )
}
export default RastaurentAboutComponent