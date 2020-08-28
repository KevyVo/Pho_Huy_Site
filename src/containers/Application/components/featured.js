import React from 'react'

// images 
import featured1 from '../../../images/application/icons/icon1.svg'
import featured2 from '../../../images/application/icons/icon2.svg'
import featured3 from '../../../images/application/icons/icon3.svg'
import featured4 from '../../../images/application/icons/icon4.svg'

const featureds = [
    {
        image: featured1,
        title: 'Fast and Secure',
        text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said.'
    },
    {
        image: featured2,
        title: 'Slack Integration',
        text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said.'
    },
    {
        image: featured3,
        title: 'Built For You',
        text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said.'
    },
    {
        image: featured4,
        title: '2TB Storage',
        text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said.'
    },
]

const ApplicationFeatured = () => {
    return (
        <div className="applicationFeaturedArea" id="service" >
            <div className="container">
                <div className="row no-gutters">
                    {featureds.map((featured, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-12">
                            <div className="applicationFeaturedWrap">
                                <div className="featuredIcon">
                                    <img src={featured.image} alt="" />
                                </div>
                                <h3>{featured.title}</h3>
                                <p>{featured.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ApplicationFeatured