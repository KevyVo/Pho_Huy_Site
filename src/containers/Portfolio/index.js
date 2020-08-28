import React from 'react'
import PortfolioHeader from './components/header'
import PortfolioHero from './components/hero'
import PortfolioItem from './components/portfolio'
import PortfolioService from './components/service'
import PortfolioTestmonial from './components/testmonial'
import PortfolioCallToAction from './components/callToAction'
import PortfolioPricing from './components/pricing'
import PortfolioContact from './components/contact'
import PortfolioFooter from './components/footer'
import './style.scss'



const PortfolioLanding = () => {
    return (
        <div className="portfolioMainArea">
            <PortfolioHeader />
            <PortfolioHero />
            <PortfolioItem />
            <PortfolioService />
            <PortfolioTestmonial />
            <PortfolioCallToAction />
            <PortfolioPricing />
            <PortfolioContact />
            <PortfolioFooter />
        </div>
    )
}
export default PortfolioLanding