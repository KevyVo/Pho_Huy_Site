import React, { Component } from 'react'
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap'
import { Div, H3, P, Span, A, FontAwesome } from '../elements'
import classnames from 'classnames';
import SectionTitle from '../SectionTitle'
import './style.scss'

// images
import menuCard1 from '../../images/resturent/menu/1.jpg'
import menuCard2 from '../../images/resturent/menu/2.jpg'
import menuCard3 from '../../images/resturent/menu/3.jpg'
import menuCard4 from '../../images/resturent/menu/4.jpg'
import menuCard5 from '../../images/resturent/menu/5.jpg'
import menuCard6 from '../../images/resturent/menu/6.jpg'

const apps = [
    { image: menuCard1, title: '#1. Shrimp Cane', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard2, title: '#2. Deep Fried Spring Rolls', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard3, title: '#3 Salad Roll', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard4, title: '#4 Tossed Greeb Papaya Salad', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard5, title: '#5 Fried Vermicelli Wrapped Shrimp Rolls', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard6, title: '#6 Crispy Vegetarian Roll', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
]

const dishs = [
    { image: menuCard1, title: '#22. House Special', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard2, title: '#23. Raw beef', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard3, title: '#24. Beef and Meatballs', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard4, title: '#25. Brisket and Beef', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard5, title: '#26. Tripe and Brisket', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard6, title: '#27. Tendon and Brisket', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
]

const bevs = [
    { image: menuCard1, title: '#56. Hot Coffee', text: 'orem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard2, title: '#57. Ice Coffee', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard3, title: '#58 Coke', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard4, title: '#59 Leeche', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard5, title: '#60 Strawberry Smoothie', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { image: menuCard6, title: '#61 Avocado Smoothie', text: 'orem Ipsum is simply dummy text of the printing and typesetting industry.' },
]

class MenuCardsComponent extends Component {
    state = {
        activeTab: '2', 
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
            console.log(tab);
        }
    }
    render() {
        const { className, id } = this.props
        return (
            <Div className={className} id={id} >
                <Container>
                    <Row>
                        <Col lg={{ size: 8, offset: 2 }}>
                            <SectionTitle
                                className="sectionTitle rastaurentSectionTitle"
                                title="OUR"
                                colorText="Menu"
                                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                            />
                        </Col>
                        <Col xl={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
                            <Nav className="MenueCardsWrap" tabs>
                                <NavItem className="MenueCardsItem">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Starters
                                    </NavLink>
                                </NavItem>
                                <NavItem className="MenueCardsItem">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        Dishes
                                    </NavLink>
                                </NavItem>
                                <NavItem className="MenueCardsItem">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}
                                    >
                                        Drinks
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs={12}>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        {apps.map((menucard,i) => (
                                            <Col key={i} sm={6} xs={12}>
                                                <Div className="menuCardWrap">
                                                    <Div style={{ background: `url(${menucard.image}) no-repeat center center/ cover` }} className="menuCardImg"></Div>
                                                    <Div className="menuCardContent">
                                                        <H3>{menucard.title}</H3>
                                                        <P>{menucard.text}</P>
                                                        <Span><A href="#">Order Now <FontAwesome name="angle-double-right" /></A></Span>
                                                    </Div>
                                                </Div>
                                            </Col>
                                        ))}

                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        {dishs.map((menucard,i) => (
                                            <Col key={i} sm={6} xs={12}>
                                                <Div className="menuCardWrap">
                                                    <Div style={{ background: `url(${menucard.image}) no-repeat center center/ cover` }} className="menuCardImg"></Div>
                                                    <Div className="menuCardContent">
                                                        <H3>{menucard.title}</H3>
                                                        <P>{menucard.text}</P>
                                                        <Span><A href="#">Order Now <FontAwesome name="angle-double-right" /></A></Span>
                                                    </Div>
                                                </Div>
                                            </Col>
                                        ))}

                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        {bevs.map((menucard,i) => (
                                            <Col key={i} sm={6} xs={12}>
                                                <Div className="menuCardWrap">
                                                    <Div style={{ background: `url(${menucard.image}) no-repeat center center/ cover` }} className="menuCardImg"></Div>
                                                    <Div className="menuCardContent">
                                                        <H3>{menucard.title}</H3>
                                                        <P>{menucard.text}</P>
                                                        <Span><A href="#">Order Now <FontAwesome name="angle-double-right" /></A></Span>
                                                    </Div>
                                                </Div>
                                            </Col>
                                        ))}

                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </Div>
        )
    }
}
export default MenuCardsComponent