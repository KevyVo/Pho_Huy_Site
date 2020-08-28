import React from 'react'
import { Div, H2, P, Span } from '../elements'
import './style.scss'
const SectionTitle = ({ className, title, text, colorText }) => {
    return (
        <Div className={className}>
            <H2>{title} {colorText && <Span className="colorText">{colorText}</Span>} <Span className="line"></Span></H2>
            <P>{text}</P>
        </Div>
    )
}
export default SectionTitle