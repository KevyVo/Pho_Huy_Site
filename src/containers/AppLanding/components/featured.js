import React from 'react'
import Masonry from 'react-masonry-component';

// images 
import featured1 from '../../../images/app/icons/featured.svg'
import featured2 from '../../../images/app/icons/featured2.svg'
import featured3 from '../../../images/app/icons/featured3.svg'
import featured4 from '../../../images/app/icons/featured4.svg'

const featureds = [
    {
        image: featured1,
        title: 'Fast',
        text: 'Launch party pitch technology user experience innovator buzz stealth MVP business model.'
    },
    {
        image: featured2,
        title: 'Targeted',
        text: 'Launch party pitch technology user experience innovator buzz stealth MVP business model.',
        margin: true
    },
    {
        image: featured3,
        title: 'Integrity',
        text: 'Launch party pitch technology user experience innovator buzz stealth MVP business model.'
    },
    {
        image: featured4,
        title: 'Efficient',
        text: 'Launch party pitch technology user experience innovator buzz stealth MVP business model.'
    },
]

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const AppFeatured = () => {
    return (
        <div className="appFeaturedArea" id="featured">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="featuredWrapper">
                            <span className="featuredCircle"></span>
                            <Masonry
                                className="row"
                                options={masonryOptions}
                                disableImagesLoaded={false}
                                updateOnEachImageLoad={false}
                                imagesLoadedOptions={imagesLoadedOptions}
                            >
                                {featureds.map((feature, i) => (
                                    <div key={i} className="col-sm-6 col-12">
                                        <div className={feature.margin ? 'featuredItem featuredItemMargin' : 'featuredItem'}>
                                            <span><img src={feature.image} alt="" /></span>
                                            <h3>{feature.title}</h3>
                                            <p>{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </Masonry>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-12">
                        <div className="featuredContent">
                            <span>Features</span>
                            <h2>Expect great features</h2>
                            <p>Startup supply chain analytics customer social proof first mover advantage incubator rockstar metrics. MVP gen-z startup user experience twitter business-to-business focus sales. Accelerator churn rate crowdsource disruptive.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppFeatured