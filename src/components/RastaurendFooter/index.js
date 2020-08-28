import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { P, Footer,Image } from '../elements'
import './style.scss'

// images
import logo from '../../images/logo.svg'


const RastaurentFooterComponent = ({ className }) => {
    return (
        <Footer className={className}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Image src={logo} alt="" />
                        <P>Copyright &copy; 2019 MultiLan. All Rights Reserved. </P>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}
export default RastaurentFooterComponent