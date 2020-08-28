import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3, P, Image, Span, FontAwesome, } from '../elements'
import SectionTitle from '../SectionTitle'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import './style.scss'


// images

import hotDises1 from '../../images/resturent/dise/1.jpg'
import hotDises2 from '../../images/resturent/dise/2.jpg'
import hotDises3 from '../../images/resturent/dise/3.jpg'
import hotDises4 from '../../images/resturent/dise/4.jpg'
import hotDises5 from '../../images/resturent/dise/5.jpg'


const HotDisesComponent = ({ className, id }) => {
    const [video, setVideo] = useState(false)
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle rastaurentSectionTitle"
                            title="OUR HOTS"
                            colorText="Dises"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6} xs={12}>
                        <Div className="hotdiseWrap">
                            <Div className="hotdiseItem">
                                <Div className="hotdiseImg">
                                    <Image src={hotDises1} alt="" />
                                </Div>
                                <Div className="hotdiseContent">
                                    <H3>Athenian Grouper</H3>
                                    <P>Lorem Ipsum is simply dummy text of the</P>
                                    <Span>$20.00</Span>
                                </Div>
                            </Div>
                            <Div className="hotdiseItem mb-0">
                                <Div className="hotdiseImg">
                                    <Image src={hotDises2} alt="" />
                                </Div>
                                <Div className="hotdiseContent">
                                    <H3>Athenian Grouper</H3>
                                    <P>Lorem Ipsum is simply dummy text of the</P>
                                    <Span>$20.00</Span>
                                </Div>
                            </Div>
                        </Div>
                    </Col>
                    <Col lg={4} className="d-none d-lg-block ">
                        <Div className="hotdiseImage">
                            <Image src={hotDises3} alt="" />
                            <Span onClick={() => setVideo(true)} >
                                <FontAwesome name="play" />
                            </Span>
                            <ModalVideo
                                channel='youtube'
                                isOpen={video}
                                videoId="L61p2uyiMSo"
                                onClose={() => setVideo(false)}
                            />
                        </Div>
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <Div className="hotdiseWrap">
                            <Div className="hotdiseItem">
                                <Div className="hotdiseImg">
                                    <Image src={hotDises4} alt="" />
                                </Div>
                                <Div className="hotdiseContent">
                                    <H3>Athenian Grouper</H3>
                                    <P>Lorem Ipsum is simply dummy text of the</P>
                                    <Span>$20.00</Span>
                                </Div>
                            </Div>
                            <Div className="hotdiseItem mb-0">
                                <Div className="hotdiseImg">
                                    <Image src={hotDises5} alt="" />
                                </Div>
                                <Div className="hotdiseContent">
                                    <H3>Athenian Grouper</H3>
                                    <P>Lorem Ipsum is simply dummy text of the</P>
                                    <Span>$20.00</Span>
                                </Div>
                            </Div>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </Div>
    )
}
export default HotDisesComponent