import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Div, H3, Ul, Li } from '../elements'
import SectionTitle from '../SectionTitle'
import 'react-modal-video/scss/modal-video.scss'
import './style.scss'


// images

import gallary1 from '../../images/resturent/gallary/1.jpg'
import gallary2 from '../../images/resturent/gallary/2.jpg'
import gallary3 from '../../images/resturent/gallary/3.jpg'
import gallary4 from '../../images/resturent/gallary/4.jpg'
import gallary5 from '../../images/resturent/gallary/5.jpg'
import gallary6 from '../../images/resturent/gallary/6.jpg'
import gallary7 from '../../images/resturent/gallary/7.jpg'
import gallary8 from '../../images/resturent/gallary/8.jpg'


const gallarys = [gallary1, gallary2, gallary3, gallary4, gallary5, gallary6, gallary7, gallary8]

const RestaurentProjectComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle rastaurentSectionTitle"
                            title="OUR BEST"
                            colorText="Dises"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                        />
                    </Col>
                </Row>
            </Container>
            <Ul className="galleryMainWrapper">
                {gallarys.map(gallary => (
                    <Li key={gallary} className="gallaryItem" style={{background:`url(${gallary})`}}>
                        <H3>the industry's standard dummy</H3>
                    </Li>
                ))}
            </Ul>
        </Div>
    )
}
export default RestaurentProjectComponent