import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import { Div, H3, P,  Span, FontAwesome, } from '../elements'
import SectionTitle from '../SectionTitle'
import './style.scss'

// images
import blog1 from '../../images/resturent/blog/1.jpg'
import blog2 from '../../images/resturent/blog/2.jpg'

const blogs = [
    {
        image: blog1,
        title: 'Healsy Food for healthy body',
        date: 'April 6, 2019',
        text: "Classic marinara sauce, authentic old-world pepperoni, all-natural Ita lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        image: blog2,
        title: 'Healsy Food for healthy body',
        date: 'April 6, 2019',
        text: "Classic marinara sauce, authentic old-world pepperoni, all-natural Ita lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
]

const RastaurentBlogComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 8, offset: 2 }}>
                        <SectionTitle
                            className="sectionTitle rastaurentSectionTitle"
                            title="OUR AWESOME"
                            colorText="Blog"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                        />
                    </Col>
                </Row>
                <Row>
                    {blogs.map((blog, i) => (
                        <Col key={i} lg={6} xs={12}>
                            <Div style={{ background: `url(${blog.image}) no-repeat center center / cover` }} className="blogWrap">
                                <Div className="blogContent">
                                    <H3>{blog.title}</H3>
                                    <Span><FontAwesome name="clock-o" /> {blog.date}</Span>
                                    <P>{blog.text}</P>
                                    <Div><Link to="/blog-details">Read More</Link></Div>
                                </Div>
                            </Div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </Div>
    )
}
export default RastaurentBlogComponent