import React from 'react'
import { Div, P } from '../elements'
import { Container, Row, Col } from 'reactstrap'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import SectionTitle from '../SectionTitle'
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss'

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

const FaqComponent = ({ className, id }) => {
    return (
        <Div className={className} id={id}>
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }}>
                        <SectionTitle
                            className="sectionTitle sectionTitleStyleTwo"
                            title="You Need To Know About Us"
                            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    </Col>
                    <Col lg={{ size: 10, offset: 1 }} xs={12}>
                        <Div className="bookFaqWrapper">
                            <Accordion preExpanded={['1']}>
                                {faqs.map((faq, i) => (
                                    <AccordionItem uuid={faq.id} key={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {faq.title}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <P>{faq.text}</P>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}

                            </Accordion>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </Div>
    )
}
export default FaqComponent