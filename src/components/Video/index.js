import React, { useState } from 'react'
import { Div, Image, Span } from '../elements'
import { Container, Row, Col } from 'reactstrap'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import SectionTitle from '../SectionTitle'
import './style.scss'


// images
import videoBg from '../../images/book/bg/3.png'
import videoImg from '../../images/book/video.jpg'
import videoIcon from '../../images/book/video.png'
const VideoComponent = ({ className, id }) => {
    const [video, setVideo] = useState(false)
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

                    <Col xs={12}>
                        <Div className="videoWrap">
                            <Image src={videoBg} alt="" />
                            <Div className="videoImages">
                                <Row>
                                    <Col lg={{ size: 10, offset: 1 }}>
                                        <Image src={videoImg} alt="" />
                                        <Span onClick={() => setVideo(true)} >
                                            <Image src={videoIcon} alt="video" />
                                        </Span>
                                    </Col>
                                </Row>
                            </Div>
                        </Div>
                    </Col>
                </Row>
            </Container>
            <ModalVideo
                channel='youtube'
                isOpen={video}
                videoId="L61p2uyiMSo"
                onClose={() => setVideo(false)}
            />
        </Div>
    )
}
export default VideoComponent