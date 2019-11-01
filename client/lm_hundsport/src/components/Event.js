import React from 'react'
import EventList from './EventList'
import { Jumbotron } from 'react-bootstrap'

export default function Event() {
    return (
        <div>
            <Jumbotron>
          <h1>Hello, world!</h1>
                <p>
                Signa upp för fasen
                </p>
                <EventList/>
            </Jumbotron>
        </div>
    )
}
