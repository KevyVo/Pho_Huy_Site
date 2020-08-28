import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import './style.scss'
import ApplicationHeader from './components/header'
import ApplicationHero from './components/hero'
import ApplicationFeatured from './components/featured'
import ApplicationBanner from './components/banner'
import ApplicationContent from './components/content'
import ApplicationBlog from './components/blog'
import ApplicationFooter from './components/footer'
const ApplicationLanding = () => {
    return (
        <ParallaxProvider>
            <ApplicationHeader />
            <ApplicationHero />
            <ApplicationFeatured />
            <ApplicationBanner />
            <ApplicationContent />
            <ApplicationBlog />
            <ApplicationFooter />
        </ParallaxProvider>

    )
}
export default ApplicationLanding