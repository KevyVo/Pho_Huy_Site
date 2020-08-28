import React, { Component } from 'react'
import { Container, Row, Col, Input } from 'reactstrap'
import { Div, H3, Span, FontAwesome, Ul, Li, Form, Button, P } from '../elements'
import SectionTitle from '../SectionTitle'
import Joi from 'joi-browser'
import './style.scss'


class RastaurentContactComponent extends Component {
    state = {
        massage: '',
        name: '',
        email: '',
        subject: '',
        error: {},
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
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
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
                massage: '',
                name: '',
                email: '',
                subject: '',
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
                        {this.props.travel ? <Col xl={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
                            <SectionTitle
                                className="sectionTitle travelSectionTitle"
                                title="Contact With Us"
                                text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
                            />
                        </Col> : <Col lg={{ size: 8, offset: 2 }}>
                                <SectionTitle
                                    className="sectionTitle rastaurentSectionTitle"
                                    title="CONTACT"
                                    colorText="With Us"
                                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                                />
                            </Col>}

                    </Row>
                    <Row>
                        <Col lg={4} xs={12}>
                            <Div className="contactInfo">
                                <H3>Contact Info</H3>
                                <Ul>
                                    <Li>
                                        <FontAwesome name="phone" />
                                        <Span>+88 012 345 678 87</Span>
                                        <Span>+88 013 439 596 78</Span>
                                    </Li>
                                    <Li>
                                        <FontAwesome name="envelope" />
                                        <Span>info@multilan.com</Span>
                                        <Span>contact@multilan.com</Span>
                                    </Li>
                                    <Li>
                                        <FontAwesome name="map-marker" />
                                        <Span>35 Rahim Plaza , Shakpara </Span>
                                        <Span> Khulna , Bangladesh</Span>
                                    </Li>
                                </Ul>
                            </Div>
                        </Col>
                        <Col lg={8} xs={12}>
                            <Div className="contactForm">
                                <H3>Get In Touch</H3>
                                <Form onSubmit={this.submitHandler}>
                                    <Row>
                                        <Col lg={6}>
                                            <Div className="inputForm">
                                                <Input
                                                    className={this.state.error.name ? "error" : ''}
                                                    type="text"
                                                    placeholder="Name"
                                                    value={this.state.name}
                                                    onChange={this.changeHandler}
                                                    name="name"
                                                />
                                                {this.state.error.name && <P>{this.state.error.name}</P>}
                                            </Div>

                                        </Col>
                                        <Col lg={6}>
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
                                        </Col>
                                        <Col xs={12}>
                                            <Div className="inputForm">
                                                <Input
                                                    className={this.state.error.subject ? "error" : ''}
                                                    type="text"
                                                    placeholder="Subject"
                                                    value={this.state.subject}
                                                    onChange={this.changeHandler}
                                                    name="subject"
                                                />
                                                {this.state.error.subject && <P>{this.state.error.subject}</P>}
                                            </Div>
                                        </Col>
                                        <Col xs={12}>
                                            <Div className="inputForm">
                                                <Input
                                                    className={this.state.error.message ? "error" : ''}
                                                    type="textarea"
                                                    value={this.state.massage}
                                                    onChange={this.changeHandler}
                                                    name="massage"
                                                />
                                                {this.state.error.message && <P>{this.state.error.message}</P>}
                                            </Div>
                                        </Col>
                                        <Col xs={12} className="text-right">
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Div>
                        </Col>
                    </Row>
                </Container>
            </Div>
        )
    }
}
export default RastaurentContactComponent