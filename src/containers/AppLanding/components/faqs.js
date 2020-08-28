import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

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

const AppFaqs = () => {
    return (
        <div className="appFaqsArea" id="brands">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="appSectionTitle">
                            <span>Got questions?</span>
                            <h2>We can help!</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Accordion preExpanded={['1']}>
                            {faqs.map((faq, i) => (
                                <AccordionItem uuid={faq.id} key={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {faq.title}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>{faq.text}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}

                        </Accordion>
                    </div>
                    <div className="col-lg-6">
                        <Accordion preExpanded={['1']}>
                            {faqs.map((faq, i) => (
                                <AccordionItem uuid={faq.id} key={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {faq.title}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>{faq.text}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}

                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppFaqs