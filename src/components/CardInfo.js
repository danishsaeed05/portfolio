import React from 'react'
import { useSpring, animated } from 'react-spring';

export default function CardInfo({title, subtitle, link}) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{title}</p>
            <p className="g-card-sub-title">{subtitle}</p>
            {/* _black takes you to page in another tab.  */}
            <a href={link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}
