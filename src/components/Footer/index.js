import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { P, Footer, Strong, Ul, Li, A, FontAwesome } from '../elements'
import './style.scss'


const FooterComponent = ({ className }) => {
    return (
        <Footer className={className}>
            <Container>
                <Row>
                    <Col lg={6} sm={7} xs={12}>
                        <P>© 2019 All Right Reserved By <Strong>MultiLan</Strong></P>
                    </Col>
                    <Col lg={6} sm={5} xs={12}>
                        <Ul className="socialIcon">
                            <Li><A href="#"><FontAwesome name="facebook" /></A></Li>
                            <Li><A href="#"><FontAwesome name="google-plus" /></A></Li>
                            <Li><A href="#"><FontAwesome name="linkedin" /></A></Li>
                            <Li><A href="#"><FontAwesome name="twitter" /></A></Li>
                            <Li><A href="#"><FontAwesome name="vimeo" /></A></Li>
                        </Ul>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}
export default FooterComponent