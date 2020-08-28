import React, { Component } from 'react'
import { GoogleMap, LoadScript, GroundOverlay } from '@react-google-maps/api';
import { Row, Col, Container, Input } from 'reactstrap'
import { Div, P, Span, H3, Form, Button } from '../elements'
import SectionTitle from '../SectionTitle'
import Joi from 'joi-browser'
import './style.scss'


class ContactComponent extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        error: {},
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = "Email can No be empty";
                        break;
                    case "string.email":
                        err.message = "Email Mast be a Valid email";
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        name: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = "Name can No be empty";
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        subject: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = "Subject can No be empty";
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        phone: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = "massage can No be empty";
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        massage: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = "massage can No be empty";
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            email: this.state.email,
            name: this.state.name,
            subject: this.state.subject,
            phone: this.state.phone,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = (e) => {
        e.preventDefault();
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            })
        }
    }
    render() {
        return (
            <Div
                className={this.props.className}
                id={this.props.id}>
                <Container>
                    <Row>
                        <Col lg={{ size: 6, offset: 3 }} xs={12}>
                            <SectionTitle
                                className="sectionTitle conferrenceSectionTitle"
                                title="Contact Us"
                                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Div className={this.state.error.name || this.state.error.email || this.state.error.phone ? 'contactForm scroll' : 'contactForm'}>
                                <H3>Get a quote</H3>
                                <Form onSubmit={this.submitHandler}>
                                    <Div className="inputForm">
                                        <Input
                                            className={this.state.error.name ? "error" : ''}
                                            placeholder="Name"
                                            value={this.state.name}
                                            onChange={this.changeHandler}
                                            name="name"
                                        />
                                        {this.state.error.name && <P>{this.state.error.name}</P>}
                                    </Div>
                                    <Div className="inputForm">
                                        <Input
                                            className={this.state.error.email ? "error" : ''}
                                            type="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.changeHandler}
                                            name="email"
                                        />
                                        {this.state.error.email && <P>{this.state.error.email}</P>}
                                    </Div>
                                    <Div className="inputForm">
                                        <Input
                                            type="tel"
                                            className={this.state.error.phone ? "error" : ''}
                                            placeholder="Phone"
                                            value={this.state.phone}
                                            onChange={this.changeHandler}
                                            name="phone"
                                        />
                                        {this.state.error.phone && <P>{this.state.error.phone}</P>}
                                    </Div>
                                    <Div className="inputForm">
                                        <Input
                                            placeholder="Subject"
                                            className={this.state.error.subject ? "error" : ''}
                                            value={this.state.subject}
                                            onChange={this.changeHandler}
                                            name="subject"
                                        />
                                        {this.state.error.subject && <P>{this.state.error.subject}</P>}
                                    </Div>
                                    <Div className="inputForm">
                                        <Input
                                            className={this.state.error.message ? "error" : ''}
                                            type="textarea"
                                            value={this.state.massage}
                                            onChange={this.changeHandler}
                                            name="massage"
                                        />
                                    </Div>
                                    <Button>Send</Button>
                                </Form>
                            </Div>
                        </Col>
                        <Col lg={8}>
                            <Div className="contactInfo">
                                <Row>
                                    <Col lg={4}>
                                        <H3>Address</H3>
                                        <P>Level 13, 2 Elizabeth St, Melbourne, 3000, USA</P>
                                    </Col>
                                    <Col lg={4}>
                                        <H3>E-mail</H3>
                                        <P>info@yourdomain.com <Span>support@yourdomain.com</Span></P>
                                    </Col>
                                    <Col lg={4}>
                                        <H3>Call us</H3>
                                        <P>+01 000 0000 000 <Span> +44 000 0000 000</Span></P>
                                    </Col>
                                </Row>
                                <LoadScript
                                    id="script-loader"
                                    googleMapsApiKey="AIzaSyAl4MhQsDTMNst0C9PlNg_91AHMM31-68M"
                                >
                                    <GoogleMap
                                        id="circle-example"
                                        zoom={2}
                                        center={{
                                            lat: 40.740,
                                            lng: -74.18
                                        }}
                                    >
                                        <GroundOverlay
                                            key={'url'}
                                            bounds={{
                                                north: 40.773941,
                                                south: 40.712216,
                                                east: -74.12544,
                                                west: -74.22655
                                            }}
                                        />
                                    </GoogleMap>
                                </LoadScript >
                            </Div>
                        </Col>
                    </Row>
                </Container >
            </Div >
        )
    }

}
export default ContactComponent