import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';
import Sticky from 'react-sticky-el';


import logo from '../../../images/logo2.svg'
import logoDark from '../../../images/logo.svg'

const mainMenus = ['home', 'service', 'features', 'Pricing', 'faqs']

const AppHeader = () => {
    const [responsiveMenu, setResponsiveMenu] = useState(false)
    return (
        <div className="portfolioMainArea">
            <Sticky holderCmp='header' className="headerArea agencyHeaderArea portfolioHeaderArea appHeaderArea">
                <div className="container">
                    <Row className="align-items-center">
                        <Col lg={5} sm={6} xs={6}>
                            <div className="logo">
                                <NavLink to="/">
                                    <img className="logoWhite" src={logo} alt="" />
                                    <img className="logoDark" src={logoDark} alt="" />
                                </NavLink>
                            </div>
                        </Col>
                        <Col lg={5} className={responsiveMenu ? 'responsiveMenuWrap active' : 'responsiveMenuWrap'}>
                            <ul className="agencyMainMenu">
                                {mainMenus.map((menu) => (
                                    <li key={menu}>
                                        <Link
                                            activeClass="active"
                                            spy
                                            smooth
                                            offset={0}
                                            duration={1000}
                                            to={menu}
                                        >
                                            {menu}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </Col>
                        <Col lg={2} xs={4}>
                            <button className="getApp">Get App</button>
                        </Col>
                        <Col className="d-lg-none d-block" sm={1} xs={2}>
                            <ul
                                onClick={() => setResponsiveMenu(!responsiveMenu)}
                                className={responsiveMenu ? 'responsiveMenuTigger active' : 'responsiveMenuTigger'}
                            >
                                <li className="first"></li>
                                <li className="second"></li>
                                <li className="third"></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Sticky>
        </div>
    )
}
export default AppHeader
