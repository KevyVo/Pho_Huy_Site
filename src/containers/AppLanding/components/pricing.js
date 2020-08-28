import React from 'react'

const pricings = [
    {
        subtitle: 'Basic',
        price: '$15',
        lists: ['5GB Disk Space', '100 Email Accounts', 'Unlimited Bandwidth', 'Write your text here', 'Unlimited Bandwidth']
    },
    {
        subtitle: 'Premium Plan',
        price: '$50',
        lists: ['5GB Disk Space', '100 Email Accounts', 'Unlimited Bandwidth', 'Write your text here', 'Unlimited Bandwidth'],
        premium: true
    },
]

const AppPricingTable = () => {
    return (
        <div className="appPricinTabledArea" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="appSectionTitle">
                            <span>Pricing</span>
                            <h2>Choose Pricing plan</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-12">
                        <div className="row no-gutters align-items-center">
                            {pricings.map((item, i) => (
                                <div key={i} className="col-lg-6 col-md-6 col-12">
                                    <div className={item.premium ? 'pricingTableWrapper pricingTablePremiumWrapper' : 'pricingTableWrapper'}>
                                        <h4>{item.subtitle}</h4>
                                        <h3>{item.price}</h3>
                                        <ul>
                                            {item.lists.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        <button>Choose Plan</button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppPricingTable