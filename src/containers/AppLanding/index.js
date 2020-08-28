import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import './style.scss'

// components 
import AppHeader from './components/header'
import AppHero from './components/hero'
import AppService from './components/service'
import AppFeatured from './components/featured'
import AppPricingTable from './components/pricing'
import AppTestmonial from './components/testmonial'
import AppFaqs from './components/faqs'
import AppFooter from './components/footer'


const faqs = [
    {
        id: '1',
        title: '01. What are the advantages of purchasing a website template?',
        text: 'The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good '
    },
    {
        id: '2',
        title: '02. What are the advantages of purchasing a website template?',
        text: 'The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good '
    },
    {
        id: '3',
        title: '03. What are the advantages of purchasing a website template?',
        text: 'The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good '
    },
    {
        id: '4',
        title: '04. What are the advantages of purchasing a website template?',
        text: 'The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good '
    },
]

const AppLanding = () => {
    return (
        <ParallaxProvider>
            <div className="appArea">
                <AppHeader />
                <AppHero />
                <AppService />
                <AppFeatured />
                <AppPricingTable />
                <AppTestmonial />
                <AppFaqs />
                <AppFooter />
            </div>
        </ParallaxProvider>

    )
}
export default AppLanding