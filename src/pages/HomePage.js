import React from 'react'
import Hero from '../components/Hero'
import PropTypes from 'prop-types'
import Carousel from '../components/Carousel'

export default function HomePage({title, subtitle, text}) {

    return (
        <>
        <Hero title={title} subtitle={subtitle} text={text}/>
        <Carousel />
        </>
    )
}

HomePage.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
} 