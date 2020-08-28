import React, { Component } from 'react'
import { Container, Row, Col, Input } from 'reactstrap'
import { Div, Button } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

class BookTable extends Component {
    state = {
        name: '',
        email: '',
        guest: '',
        phone: '',
        form: '',
        to: ''
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Div className={this.props.className} id={this.props.id}>
                <Container>
                    <Row>
                        <Col lg={{ size: 8, offset: 2 }}>
                            <SectionTitle
                                className="sectionTitle rastaurentSectionTitle"
                                title="BOOK A"
                                colorText="Table Now"
                                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                            />
                        </Col>
                    </Row>
                    <Row className="bookingForm">
                        <Col lg={4} sm={6} xs={12}>
                            <Input
                                name="name"
                                value={this.state.name}
                                onChange={this.changeHandler}
                                placeholder="name"
                            />
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <Input
                                name="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                                placeholder="Email"
                            />
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <Input
                                name="phone"
                                value={this.state.phone}
                                onChange={this.changeHandler}
                                placeholder="Phone"
                            />
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <Input
                                name="guest"
                                value={this.state.guest}
                                onChange={this.changeHandler}
                                placeholder="Number Of guest"
                            />
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <Input
                                name="form"
                                value={this.state.form}
                                onChange={this.changeHandler}
                                placeholder="Form"
                            />
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <Input
                                name="to"
                                value={this.state.to}
                                onChange={this.changeHandler}
                                placeholder="To"
                            />
                        </Col>
                        <Col lg={{ size: 6, offset: 3 }}>
                            <Button>Book Now</Button>
                        </Col>
                    </Row>
                </Container>
            </Div>
        )
    }
}
export default BookTable