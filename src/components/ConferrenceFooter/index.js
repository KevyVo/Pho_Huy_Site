import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { P, Footer, Image } from '../elements'
import './style.scss'

// images
import footerLogo from '../../images/logo2.svg'
const ConferrenceFooter = ({ className }) => {
    return (
        <Footer className={className}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Image src={footerLogo} alt="" />
                        <P>Copyright © 2019 MultiLan. All Rights Reserved. </P>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}
export default ConferrenceFooter