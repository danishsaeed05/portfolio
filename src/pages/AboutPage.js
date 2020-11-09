import React from 'react'
import PropTypes from 'prop-types'

import Hero from '../components/Hero'
import Content from '../components/Content'

export default function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name Danish. I'm a software Programmer with experience in various languages such as Java, C, swift, Oracle SQL, firebase and some of the JavaScript Libraries that I have used are Native Express JS, Node JS, React Native and React.</p>

                <p>My dream is to make innovations that helps people and anything that helps people makes me happy</p>

                <p>My learning never stops. I am constantly learning new languages or trying out new libraries such as React being one of them. I am fairly new to React, this very website is also made in React</p>

                <p>At the moment, I am working for non-profit organization to make mobile Application in React Native that helps with event booking, events notifications, volunteer oppertunities and more.</p>

                <p>My latest project was my first React Todo List application. You can check it out <a href="https://react-todolis-app.netlify.app/" target="_blank" rel="noopener noreferrer">here</a> It uses basic React elements along with third-part API that performes CRUD functions</p>

                <p>I like to think of innovations that are very challenging. It strengthens my knowledge and understanding of the various tools that are out there. </p>

                <p>I like to let my thoughts run wild. Recently, I came up with an idea to help the people who are visually impaired. A jacket that has a camera installed in it. The camera uses OpenCV to recognize the various objects in front of the person and uses text-to-speech to let the the person with disability know what's in front of him through earphones. Because their world is dark, it will be my honor to shed some light. Although this project is NOT yet a reality, I am however in the planning and designing phase and will put the plan into effect once I have break from my university.</p>
            </Content>
        </div>
    )
}

AboutPage.propTypes = {
    title: PropTypes.string.isRequired
}
