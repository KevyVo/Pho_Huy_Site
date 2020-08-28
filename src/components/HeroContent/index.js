import React, { useState } from 'react'
import { Div, H2, P, A, Ul, Li, Image, Span, H4 } from '../elements'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
// images
import videoImg from '../../images/book/video.png'
const HeroContents = ({ title, text, showVideo, subTitle, colorText, button }) => {
    const [video, setVideo] = useState(false)
    return (
        <Div className="heroWrapper">
            {subTitle && <H4>{subTitle}</H4>}
            {title && <H2>{title} {colorText && <Span>{colorText}</Span>}</H2>}
            {text && <P>{text}</P>}
            {button && <Ul>
                <Li><A className="knowMore" href="#">{button}</A></Li>
                {showVideo && <Li className="heroVideo">
                    <Span onClick={() => setVideo(true)} >
                        <Image src={videoImg} alt="video" />
                    </Span>
                </Li>}
            </Ul>}

            <ModalVideo
                channel='youtube'
                isOpen={video}
                videoId={showVideo}
                onClose={() => setVideo(false)}
            />
        </Div>
    )
}
export default HeroContents