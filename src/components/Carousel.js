import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'

import svgApp from '../assets/images/svgApp.svg'
import evverest from '../assets/images/evverest.png'
import Card from './Card'

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: evverest,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Danish Saeed',
                    subTitle: 'YouTube channel',
                    imgSrc: evverest,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'SVG App',
                    subTitle: 'A social network for developers',
                    imgSrc: svgApp,
                    link: 'https://github.com/danishsaeed05/CIS2750/tree/master/A4',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true


        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })
        this.setState({ items })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}
