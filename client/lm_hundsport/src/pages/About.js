import React from 'react'
import { Jumbotron, ListGroup } from 'react-bootstrap'

export default function About(){

    return(
        <Jumbotron style={{height:'100%', width:'100%'}}>
        <h1>
            Hej
        </h1>
        <p>
            Här kan man skriva vad man vill
        </p>

        <div style={{marginLeft:'25%', marginRight:'center'}}>
            <ListGroup style={{width: '30rem', textAlign:'left'}}>
              <ListGroup.Item active>Mina meriter i Agilityvärlden</ListGroup.Item>
              <ListGroup.Item>VM Guld 2020</ListGroup.Item>
              <ListGroup.Item>en annan merit</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div>
        </Jumbotron>
    )
}