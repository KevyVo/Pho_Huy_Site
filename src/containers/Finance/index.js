import React, { Fragment } from 'react'
import HeaderComponent from '../../components/Header'
import HeaderTopComponent from '../../components/HeaderTop'
import HeroSliderComponent from '../../components/HeroSlider'
import FinanceAboutComponent from '../../components/FinanceAbout'
import ServiceComponent from '../../components/Service'
import ProjectComponent from '../../components/Project'
import ClientComponent from '../../components/Client'
import FinanceNewsLetter from '../../components/FinanceNewsLetter'
import NewsComponent from '../../components/News'
import FinanceContact from '../../components/FinanceContact'
import FinanceFooterComponent from '../../components/FinanceFooter'
// images
import logo from '../../images/logo.svg'

const menus = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SERVICES', id: 'service' },
    { name: 'PROJECTS', id: 'project' },
    { name: 'BLOG', id: 'blog' },
    { name: 'CONTACT', id: 'contact' },
]

const FinanceLanding = () => {
    return (
        <Fragment>
            <HeaderTopComponent
                className="headerTopArea"
            />
            <HeaderComponent
                menus={menus}
                className="financeHeaderArea"
                logo={logo}
            />
            <HeroSliderComponent
                className="sliderArea"
                id="home"
            />
            <FinanceAboutComponent
                className="financeAboutArea"
                id="about"
                masonry={true}
            />
            <FinanceAboutComponent
                className="financeAboutArea bg"
                picture={true}
            />
            <ServiceComponent
                className="sarviceArea"
                id="service"
            />
            <ProjectComponent
                className="projectArea"
                id="project"
            />
            <ClientComponent
                className="clientArea"
                id="client"
            />
            <FinanceNewsLetter
                className="financeNewsLetter"
            />
            <NewsComponent
                className="newsArea bg-f9f9f9"
                id="blog"
            />
            <FinanceContact
                className="financeContactArea"
                id="contact"
            />
            <FinanceFooterComponent
                className="financeFooterArea"
            />
        </Fragment>
    )
}
export default FinanceLanding