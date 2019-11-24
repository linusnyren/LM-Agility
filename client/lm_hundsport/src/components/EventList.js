import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventItem from './EventItem'
import { Col, Row, Container } from 'react-bootstrap'
import { Form, Button, Jumbotron } from 'react-bootstrap'
export default function EventList() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState({
    activity: null,
    price: 0
  })
  const [uniques, setUniques] = useState([])
  const filter = () => {
    if(search.price === "Alla") setSearch(search, search.price = null); 
    axios.post("http://localhost:8080/search", search)
      .then(res => setActivities(res.data))
  }
  useEffect(() => {
    axios.get("http://localhost:8080/activities")
      .then(res => {
        setActivities(res.data)
        setUniques(res.data)
      })
      
      setLoading(false)
  }, [])


  if (loading) {
    return (
      <div>
        laddar events
    </div>
    )
  }
  if (!loading) {
    return (
      <Container>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Aktivitets typ</Form.Label>
          <Form.Control as="select" onChange={e => {setSearch(search, search.activity = e.target.value); filter();}}>
            <option key={"Alla"}>Alla</option>
            {Array.from(new Set(uniques.map(x => x.type))).map(type => 
              <option key={type}>{type}</option>
            )}
          </Form.Control>
          <Form.Label>Pris</Form.Label>
          <Form.Control as="select" onChange={e => {setSearch(search, search.price = e.target.value); filter();}}>
            <option key={null} value={null}>Alla</option>
            {Array.from(new Set(uniques.map(x => x.price))).map(type => 
              <option key={type}>{type}</option>
            )}
          </Form.Control>
        </Form.Group>
        <Row>
          {activities.map(event =>
            <Col key={event.id}>
              <EventItem data={event} activities={setActivities} />
            </Col>
          )}
        </Row>
      </Container>

    )
  }

}
