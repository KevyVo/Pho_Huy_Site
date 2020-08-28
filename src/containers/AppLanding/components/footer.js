import React from 'react'
import { Link } from 'react-router-dom'


import logo from '../../../images/logo2.svg'


const footers = [
    {
        title: 'How It Works', menus: [
            'How To Join Us', 'How It Works', 'Integrations & API', 'iOS & Android Apps'
        ]
    },
    {
        title: 'Company', menus: [
            'About', 'Customers', 'Careers', 'Contact'
        ]
    },
    {
        title: 'Support', menus: [
            'Guidelines', 'Community', 'Documents', 'Testimonials'
        ]
    },
]

const AppFooter = () => {
    return (
        <footer className="applicationFooterArea appFooterArea">
            <div className="container">
                <div className="footerTop">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="footerLogo">
                                <img src={logo} alt="" />
                                <p>It was a humorously perilous business for both of us. For, before we proceed further.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-12">
                            <div className="row">
                                {footers.map((menu, i) => (
                                    <div key={i} className="col-lg-4 col-md-4 col-12">
                                        <div className="footerMenuWrap">
                                            <h4>{menu.title}</h4>
                                            <ul>
                                                {menu.menus.map((menu, i) => (
                                                    <li key={i}><Link to="/ahgdhsgdyhg">{menu}</Link> </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerBotton">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-3">
                            <p className="copyright">© 2019 Multilan</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <ul className="footerBottomMenu">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3">
                            <ul className="socilaMenu">
                                <li><a href="#" target="_blank"><i className="fa fa-github"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default AppFooter