import React, { Fragment, useState } from 'react'
import { Link } from 'react-scroll';
import { Div, Image,  Ul, Li, FontAwesome, A } from '../elements'
import './style.scss'

// image
import logo from '../../images/logo-sidebar.svg'

const menus = ['home', 'about', 'offer', 'faq', 'review', 'contact']

const MenuSidebarComponent = ({ className, id }) => {
    const [addClass, setAddClass] = useState(false)
    return (
        <Fragment>
            <Ul onClick={() => setAddClass(!addClass)} className={addClass ? 'menu active' : 'menu'}>
                <Li className="first"></Li>
                <Li className="second"></Li>
                <Li className="third"></Li>
            </Ul>
            <Div className={addClass ? `${className} active` : className} id={id}>
                <Div className="sidebarMenuImg">
                    <Image src={logo} alt="" />
                </Div>
                <Ul className="sidebarMenu">
                    {menus.map(menu => (
                        <Li key={menu}>
                            <Link
                                activeClass="active"
                                spy
                                smooth
                                offset={0}
                                duration={1000}
                                to={menu}
                                onClick={() => setAddClass(false)}
                            >
                                {menu}
                            </Link>
                        </Li>
                    ))}
                </Ul>
                <Ul className="sidebarMenuMeddia">
                    <Li><A href="#"><FontAwesome name="facebook" /></A></Li>
                    <Li><A href="#"><FontAwesome name="twitter" /></A></Li>
                    <Li><A href="#"><FontAwesome name="linkedin" /></A></Li>
                    <Li><A href="#"><FontAwesome name="google-plus" /></A></Li>
                </Ul>
            </Div>
        </Fragment>
    )
}
export default MenuSidebarComponent