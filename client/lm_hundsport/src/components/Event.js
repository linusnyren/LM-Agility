import React from 'react'
import EventList from './EventList'
import {Card, Jumbotron, Col, Row, Container} from 'react-bootstrap'
export default function Event() {
    return (
        <div>
            <Jumbotron>
                <EventList/>
            </Jumbotron>
        </div>
    )
}
