import React, { useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Masonry from 'react-masonry-component';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import { Div, Image, Span, FontAwesome, H3 } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

import gallery1 from '../../images/conferrence/gallary/1.jpg'
import gallery2 from '../../images/conferrence/gallary/2.jpg'
import gallery3 from '../../images/conferrence/gallary/3.jpg'
import gallery4 from '../../images/conferrence/gallary/4.jpg'
import gallery5 from '../../images/conferrence/gallary/5.jpg'
import gallery6 from '../../images/conferrence/gallary/6.jpg'

const gallerys = [
    { image: gallery1, title: 'Title Here', video: 'sBws8MSXN7A' },
    { image: gallery2, title: 'Title Here', video: 'sBws8MSXN7A' },
    { image: gallery3, title: 'Title Here', video: 'sBws8MSXN7A' },
    { image: gallery4, title: 'Title Here', video: 'sBws8MSXN7A' },
    { image: gallery5, title: 'Title Here', video: 'sBws8MSXN7A' },
    { image: gallery6, title: 'Title Here', video: 'sBws8MSXN7A' },
]
const imagesLoadedOptions = { background: '.my-bg-image-el' }
const GalleryComponent = ({ className, id }) => {
    const [video, setVideo] = useState(false)
    return (
        <Div className={className} id={id}>

            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }} xs={12}>
                        <SectionTitle
                            className="sectionTitle conferrenceSectionTitle"
                            title="Image Gallery"
                            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    </Col>
                </Row>
            </Container>
            <Div className="container-fluid">
                <Masonry
                    className='galleryWrapper row'
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {gallerys.map((gallery, i) => (
                        <Col xl={3} lg={4} sm={6} xs={12} key={i}>
                            <Div className="galleryItem">
                                <Image src={gallery.image} alt="" />
                                <Div className="gallaryContent">
                                    <Span onClick={() => setVideo(true)}>
                                        <FontAwesome name="play" />
                                    </Span>
                                    <H3>Your Title here</H3>
                                </Div>
                            </Div>
                            <ModalVideo
                                channel='youtube'
                                isOpen={video}
                                videoId={gallery.video}
                                onClose={() => setVideo(false)}
                            />
                        </Col>
                    ))}
                </Masonry>
            </Div >
        </Div >
    )
}
export default GalleryComponent