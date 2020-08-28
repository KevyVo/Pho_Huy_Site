import React, { Fragment } from 'react'
import HeaderComponent from '../../components/Header'
import HeroSliderComponent from '../../components/RestaurentHeroSlider'
import RastaurentAboutComponent from '../../components/RastaurentAbout'
import HotDisesComponent from '../../components/HotDises'
import MenuCardsComponent from '../../components/MenuCards'
import RestaurentProjectComponent from '../../components/RestaurentProject'
import BookTable from '../../components/BookTable'
import RastaurentBlogComponent from '../../components/RastaurentBlog'
import RastaurentContactComponent from '../../components/RastaurentContact'
import RastaurentFooterComponent from '../../components/RastaurendFooter'
// images
import logo from '../../images/logo.svg'

const menus = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'HOT DISHES', id: 'hotDishes' },
    { name: 'MENU', id: 'menu' },
    { name: 'GALLARY', id: 'gallary' },
    { name: 'BLOG', id: 'blog' },
    { name: 'CONTACT', id: 'contact' },
]

const ResturentLanding = () => {
    return (
        <Fragment>
            <HeaderComponent
                menus={menus}
                className="financeHeaderArea restaurentHeaderArea"
                logo={logo}
            />
            <HeroSliderComponent
                className="reastaurentSliderArea"
                id="home"
            />
            <RastaurentAboutComponent
                className="rastaurentAboutArea"
                id="about"
            />
            <HotDisesComponent
                className="hotDisesArea"
                id="hotDishes"
            />
            <MenuCardsComponent
                className="menuCardsArea"
                id="menu"
            />
            <RestaurentProjectComponent
                className="restaurentProjectArea"
                id="gallary"
            />
            <BookTable
                className="bookTableArea"
            />
            <RastaurentBlogComponent
                className="rastaurentBlogArea"
                id="blog"
            />
            <RastaurentContactComponent
                className="rastaurentContactArea"
                id="contact"
            />
            <RastaurentFooterComponent
                className="rastaurentFooterArea"
            />
        </Fragment>
    )
}
export default ResturentLanding