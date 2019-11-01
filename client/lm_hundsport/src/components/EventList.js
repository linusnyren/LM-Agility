import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EventItem from './EventItem'
import {Jumbotron, Col, Row, Container} from 'react-bootstrap'
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
            {activities.map(event =>
            <Col key={event.id}> 
              <EventItem data={event} activities={setActivities}/>
            </Col>
            )}
            </Row>
        </Container>
    
    )
  }

}
