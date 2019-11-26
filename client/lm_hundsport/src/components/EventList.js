import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventItem from './EventItem'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { DatePickerInput } from 'rc-datepicker'
import 'moment/locale/sv.js';
import 'rc-datepicker/lib/style.css';

export default function EventList() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState({
    activity: null,
    price: 0,
    location: null,
    date: null,
    orderBy:null
  })
  const [uniques, setUniques] = useState([])
  const filter = () => {
    if(search.price === "Alla") setSearch(search, search.price = 0); 
    if(search.activity === "Alla") setSearch(search, search.activity = null)
    if(search.location === "Alla") setSearch(search, search.location = null)
    if(search.orderBy === "Alla") setSearch(search, search.orderBy = null)
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
          <Row>
            <Col style={{width:'8rem'}}> 
          <Form.Label>Aktivitets typ</Form.Label>
          <Form.Control as="select" onChange={e => {setSearch(search, search.activity = e.target.value); filter();}} >
            <option key={"Alla"}>Alla</option>
            {Array.from(new Set(uniques.map(x => x.type))).map(type => 
              <option key={type}>{type}</option>
            )}
          </Form.Control>
          </Col>
          <Col>
          <Form.Label>Pris</Form.Label>
          <Form.Control as="select" onChange={e => {setSearch(search, search.price = e.target.value); filter();}}>
            <option key={null} value={null}>Alla</option>
            {Array.from(new Set(uniques.map(x => x.price))).map(type => 
              <option key={type}>{type}</option>
            )}
          </Form.Control>
          </Col>
          <Col>
          <Form.Label>Plats</Form.Label>
          <Form.Control as="select" onChange={e => {setSearch(search, search.location = e.target.value); filter();}}>
            <option key={null} value={null}>Alla</option>
            {Array.from(new Set(uniques.map(x => x.location))).map(type => 
              <option key={type}>{type}</option>
            )}
          </Form.Control>
          </Col>
          <Col>
            <Form.Label>Datum</Form.Label>
            <DatePickerInput
                        displayFormat='YYYY-MM-DD'
                        returnFormat='YYYY-MM-DD'
                        defaultValue={new Date()}
                        onChange={e => {setSearch(search, search.date = e);filter();}}
                        iconClassName='calendar icon'
                        showOnInputClick
            />
            <Button size="sm" onClick={() => {setSearch(search, search.date = null); filter()}}>Återställ datum</Button>
          </Col>
          <Col>
          <Form.Label>Sortera efter</Form.Label>
          <Form.Control as="select" onChange={e => {setSearch(search, search.orderBy = e.target.value); filter();}}>
            <option value={null}>Alla</option>
            <option value="location">Plats</option>
            <option value="activity_start">Datum</option>
            <option value="price">Pris</option>
            <option value="type">Aktivitet</option>
          </Form.Control>
          </Col>
          </Row>
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
