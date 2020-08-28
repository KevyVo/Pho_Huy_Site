import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, Image } from '../elements'
import HeroContents from '../HeroContent'
// images
import hero from '../../images/book/hero/1.png'

import './style.scss'
const HeroArea = ({
    className,
    id,
    books,
    title,
    text,
    showVideo,
    button,
    subTitle,
    conferrence
}) => {
    return (
        <Div className={`heroArea ${className}`} id={id}>
            <Container>
                <Row>
                    {books && <Col lg={7} xs={12}>
                        <HeroContents
                            title={title}
                            text={text}
                            showVideo={showVideo}
                            button={button}
                            subTitle={subTitle}
                        />
                    </Col>}
                    {conferrence && <Col lg={{ size: 10, offset: 1 }} xs={12}>
                        <HeroContents
                            title={title}
                            text={text}
                            showVideo={showVideo}
                            button={button}
                            subTitle={subTitle}
                        />
                    </Col>}
                </Row>
            </Container>
            {books && <Div
                className="heroImage"
            >
                <Image src={hero} alt="Hero" />

            </Div>}
        </Div>
    )
}
export default HeroArea