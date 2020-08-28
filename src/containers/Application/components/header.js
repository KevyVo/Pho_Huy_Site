import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';
import Sticky from 'react-sticky-el';


import logo from '../../../images/logo2.svg'
import logoDark from '../../../images/logo.svg'

const mainMenus = ['home', 'service', 'about', 'Contact']

const ApplicationHeader = () => {
    const [responsiveMenu, setResponsiveMenu] = useState(false)
    return (
        <div className="portfolioMainArea">
            <Sticky holderCmp='header' className="headerArea agencyHeaderArea portfolioHeaderArea applicationHeaderArea">
                <div className="container">
                    <Row>
                        <Col lg={6} sm={11} xs={8}>
                            <div className="logo">
                                <NavLink to="/">
                                    <img className="logoWhite" src={logo} alt="" />
                                    <img className="logoDark" src={logoDark} alt="" />
                                </NavLink>
                            </div>
                        </Col>
                        <Col lg={6} className={responsiveMenu ? 'responsiveMenuWrap active' : 'responsiveMenuWrap'}>
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
                        <Col className="d-lg-none d-block" sm={1} xs={4}>
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
export default ApplicationHeader
