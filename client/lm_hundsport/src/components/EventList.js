import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EventItem from './EventItem'
import {Card, Jumbotron, Col, Row, Container} from 'react-bootstrap'
export default function EventList() {
    
  const[activities, setActivities] = useState([])
  const[loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get("http://localhost:8080/activities")
    .then(res => setActivities(res.data))
    setLoading(false)
  }, [])

  if(loading){
  return (
    <div>
      laddar events

    </div>
  )
  }
  if(!loading){
    return(
      <Container>
        <Row>
        <Col>
          <div>
            {activities.map(event =>
              <div key={event.id}>
              <EventItem data={event}/>
            </div>)}
          </div>
        </Col>
        </Row>
      </Container> 
    )
  }

}
