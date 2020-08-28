import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Masonry from 'react-masonry-component';

// images 
import image1 from '../../../images/portfolio/gallary/img1.jpg'
import image2 from '../../../images/portfolio/gallary/img2.jpg'
import image3 from '../../../images/portfolio/gallary/img3.jpg'
import image4 from '../../../images/portfolio/gallary/img4.jpg'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const gallarys = [image1, image2, image3, image4, image1, image2, image3, image4]

const PortfolioItem = () => {
    const [more, setMore] = useState(false)
    const loadmore = more ? gallarys.length : 4
    return (
        <div id="gallery" className="portfolioGallaryArea">
            <div className="container">
                <Row>
                    <Col lg={{ offset: 2, size: 8 }}>
                        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <span>doloremque laudantium.</span></p>
                    </Col>
                </Row>
                <Masonry
                    className="row"
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {gallarys.slice(0, loadmore).map((gallary, i) => (
                        <div key={i} className="col-sm-6 col-12">
                            <div className="portfolioGallaryImg">
                                <img src={gallary} alt="" />
                            </div>
                        </div>
                    ))}
                </Masonry>
                {more ? '' : <div className="row">
                    <div className="col-12 text-center">
                        <button onClick={() => setMore(true)}>Check Out More</button>
                    </div>
                </div>}

            </div>
        </div>

    )
}
export default PortfolioItem