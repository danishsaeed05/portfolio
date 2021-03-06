import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export default function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Danish Saeed
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Welcome to my site
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
