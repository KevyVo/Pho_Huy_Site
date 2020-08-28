import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import './style.scss'
const NotFoundPage = () => {
    return (
        <div className="notfoundArea">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>404</h1>
                        <h3>page not found</h3>
                        <Link to="/">Back To Home</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default NotFoundPage