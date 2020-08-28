import React from 'react'
import { Link } from 'react-router-dom'


const blogs = [
    {
        title: 'Getting Free Publicity For Your Business',
        text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope.',
        date: 'August 27th 2019',
        subtext: 'Blog'
    },
    {
        title: 'Getting Free Publicity For Your Business',
        text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope.',
        date: 'August 27th 2019',
        subtext: 'Blog'
    },
    {
        title: 'Getting Free Publicity For Your Business',
        text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope.',
        date: 'August 27th 2019',
        subtext: 'Blog'
    },
]

const ApplicationBlog = () => {
    return (
        <div className="applicationBlogArea" id="blog" >
            <div className="container">
                <div className="row">
                    {blogs.map((blog, i) => (
                        <div key={i} className="col-lg-4">
                            <div className="blogWrapper">
                                <span className="text">{blog.subtext}</span>
                                <h3><Link to="/">{blog.title}</Link></h3>
                                <p>{blog.text}</p>
                                <span className="date">{blog.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ApplicationBlog