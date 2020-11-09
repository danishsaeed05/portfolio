import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import PropTypes from 'prop-types'

export default function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subtitle && <h3 className="display-4 font-weight-light">{props.subtitle}</h3>}
                        {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}

                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

Hero.protoTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.string
}
