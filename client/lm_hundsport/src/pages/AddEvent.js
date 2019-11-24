import React, { useState } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'
import { DatePickerInput } from 'rc-datepicker'
import 'moment/locale/sv.js';
import 'rc-datepicker/lib/style.css';
import Axios from 'axios';
export default function AddEvent() {
    const [event, setEvent] = useState({
        type: null,
        level: null,
        location: null,
        price: null,
        activityStart: null,
        activityEnd: null,
        participants: null,
        studentlist: []
    })
    const [time, setTime] = useState({ start: null, end: null })
    const submit = () => {
        console.log(event)
        Axios.post("http://localhost:8080/activity", event)
            .then(res => console.log(res.data))
        //Fri Nov 08 2019 16:39:03 GMT+0100 (centraleuropeisk normaltid)
    }
    /*Axios.post("http://localhost:8080/activity", event)
            .then(res => console.log(res.data))*/
    return (
        <div>
            <Jumbotron style={{ width: '50%', height: '50%', margin: 'auto', marginTop: '3%' }} bg="primary">
                <Form>
                    <h1>Lägg till event</h1>
                    <h3>Detta är enbart till för Linn</h3>
                    <Form.Group controlId="text">
                        <Form.Label>Aktivitets typ</Form.Label>
                        <Form.Control type="text" placeholder="Agility t.ex" onChange={e => setEvent(event, event.type = e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Nivå</Form.Label>
                        <Form.Control type="text" placeholder="Nybörjare, medel t.ex" onChange={e => setEvent(event, event.level = e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Plats</Form.Label>
                        <Form.Control type="text" placeholder="Greggereds Kapell t.ex" onChange={e => setEvent(event, event.location = e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Pris</Form.Label>
                        <Form.Control type="text" placeholder="500 t.ex" onChange={e => setEvent(event, event.price = e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Max antal deltagare</Form.Label>
                        <Form.Control type="text" placeholder="10 t.ex" onChange={e => setEvent(event, event.participants = e.target.value)} />
                    </Form.Group>
                    <Form.Label>StartDatum</Form.Label>
                    <DatePickerInput
                        displayFormat='YYYY-MM-DD'
                        returnFormat='YYYY-MM-DD'
                        defaultValue={new Date()}
                        onChange={e => setEvent(event, event.activityStart = e)}
                        iconClassName='calendar icon'
                        showOnInputClick
                    />
                    <Form.Group controlId="text">
                        <Form.Label>Starttid</Form.Label>
                        <Form.Control type="text" placeholder="18:30" onChange={e => setEvent(time, time.start = e.target.value)} />
                    </Form.Group>
                    <Form.Label>Slut</Form.Label>
                    <DatePickerInput
                        displayFormat='YYYY-MM-DD'
                        returnFormat='YYYY-MM-DD'
                        defaultValue={event.activityEnd ? event.activityEnd : new Date()}
                        onChange={e => setEvent(event, event.activityEnd = e)}
                        iconClassName='calendar icon'
                        showOnInputClick
                    />
                    <Form.Group controlId="text">
                        <Form.Label>Starttid</Form.Label>
                        <Form.Control type="text" placeholder="18:30" onChange={e => setEvent(time, time.end = e.target.value)} />
                    </Form.Group>

                    <Button variant="success" onClick={() => submit()}>
                        Lägg till
                    </Button>
                </Form>
            </Jumbotron>

        </div>
    )
}