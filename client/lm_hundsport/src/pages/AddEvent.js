import React, { useState } from 'react'
import { Form, Button, Jumbotron, Col } from 'react-bootstrap'
import { DatePickerInput } from 'rc-datepicker'
import 'moment/locale/sv.js';
import 'rc-datepicker/lib/style.css';
import Axios from 'axios';
import EventItem from '../components/EventItem';
export default function AddEvent() {
    const [event, setEvent] = useState({
        type: null,
        level: null,
        location: null,
        price: null,
        activityStart: null,
        activityEnd: null,
        timeStart: null,
        timeEnd: null,
        participants: null,
        studentlist: []
    })
    const[pw, setPw]= useState()
    const [show, setShow] = useState(true)
    const [res, setRes] = useState()
    const submit = () => {
        Axios.post("http://localhost:8080/activity/"+pw, event)
            .then(res => {setRes(res.data); setShow(false)})
    }
    if(show){
    return (
        <div>
            <Jumbotron style={{ width: '50%', height: '50%', margin: 'auto', marginTop: '3%' }} bg="primary">
                <Form>
                    <h1>Lägg till Aktivitet</h1>
                    <h3>Detta är enbart till för Linn</h3>
                    <Form.Row>
                    <Form.Group as={Col} controlId="type">
                        <Form.Label>Aktivitets typ</Form.Label>
                        <Form.Control type="text" placeholder="Agility t.ex" onChange={e => setEvent(event, event.type = e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="level">
                        <Form.Label>Nivå</Form.Label>
                        <Form.Control type="text" placeholder="Nybörjare, medel t.ex" onChange={e => setEvent(event, event.level = e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="location">
                        <Form.Label>Plats</Form.Label>
                        <Form.Control type="text" placeholder="Greggereds Kapell t.ex" onChange={e => setEvent(event, event.location = e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="price">
                        <Form.Label>Pris</Form.Label>
                        <Form.Control type="text" placeholder="500 t.ex" onChange={e => setEvent(event, event.price = e.target.value)} />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group controlId="participants">
                        <Form.Label>Max antal deltagare</Form.Label>
                        <Form.Control type="text" placeholder="10 t.ex" onChange={e => setEvent(event, event.participants = e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Starttid</Form.Label>
                        <Form.Control type="text" placeholder="18:30" onChange={e => setEvent(event, event.timeStart = e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Sluttid</Form.Label>
                        <Form.Control type="text" placeholder="18:30" onChange={e => setEvent(event, event.timeEnd = e.target.value)} />
                    </Form.Group>
                    </Form.Row>
                    <Form.Label>Datum</Form.Label>
                    <DatePickerInput
                        displayFormat='YYYY-MM-DD'
                        returnFormat='YYYY-MM-DD'
                        defaultValue={new Date()}
                        onChange={e => {setEvent(event, event.activityStart = e); setEvent(event, event.activityEnd = e)}}
                        iconClassName='calendar icon'
                        showOnInputClick
                    />
                    <Form.Group controlId="text">
                        <Form.Label>Superhemligt lösenord</Form.Label>
                        <Form.Control type="text" onChange={e => setPw(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" onClick={() => submit()}>
                        Lägg till
                    </Button>
                </Form>
            </Jumbotron>

        </div>
    )
    }
    else{
        return(
            <div style={{textAlign: 'center'}}>
                <h1>Detta event skapades!</h1>
                    <EventItem data={res} />
                <Button onClick={() => setShow(true)}>Gå tillbaka</Button>
            </div>
        )
    }
}