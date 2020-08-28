import React, { useState } from 'react'

const pricins = [
    {
        title: 'Group', price: '179', items: [
            'Profile Picture', "The Company's Image As", 'Team Image Display Photos', 'Enterprise Group Photo Class', "Employee's Photo"
        ]
    },
    {
        title: 'Individual', price: '49', big: true, items: [
            'Professional Photo', "Personal Image Display", 'Work Card', 'The Magazine Published', "Personal Photos"
        ]
    },
]

const PortfolioPricing = () => {
    return (
        <div className="portfolioPricingTableArea" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row no-gutters">
                            {pricins.map((price, i) => (
                                <div key={i} className="col-md-6">
                                    <div className={price.big ? 'pricingTableWrap pricingTableWrapBig' : 'pricingTableWrap'}>
                                        <h4>{price.title}</h4>
                                        <h3><span>$</span>{price.price}</h3>
                                        <ul>
                                            {price.items.map(item => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="pricingTableContent">
                            <h2>Start a free trial now, pick your plan later</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh vulputate.</p>
                            <h5>Want to work with us? <a href="#">Join Us</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PortfolioPricing