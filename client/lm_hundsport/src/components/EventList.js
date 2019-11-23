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
    price: null
  })
  useEffect(() => {
    axios.get("http://localhost:8080/activities")
      .then(res => setActivities(res.data))
    setLoading(false)
  }, [])

  const filter = () => {
    axios.post("http://localhost:8080/search", search)
      .then(res => setActivities(res.data))
    setLoading(false)
  }


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
        <Form.Group controlId="text">
          <Form.Label>Aktivitets typ</Form.Label>
          <Form.Control type="text" placeholder="Agility t.ex" onChange={e => setSearch(search, search.activity = e.target.value)} />
        </Form.Group>
        <Button onClick={() => filter()}>Sök</Button>
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
