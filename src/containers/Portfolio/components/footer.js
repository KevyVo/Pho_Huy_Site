import React from 'react'
import logo from '../../../images/logo2.svg'

const PortfolioFooter = () => {
    return (
        <footer className="portfolioFooterArea">
            <div className="container">
                <div className="footerTop">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-3">
                            <div className="footerLogo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <ul className="footerMenu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3">
                            <ul className="footerSocila">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p>© 2018 Creation All Rights Reserved</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="footerBottomMenu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default PortfolioFooter