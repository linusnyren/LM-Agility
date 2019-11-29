import React, { useState } from 'react'
import { Card, Modal, Button, Accordion, Form, Image } from 'react-bootstrap'
import Moment from 'react-moment';
import axios from 'axios';
import arrowDown from './resources/arrow_down.svg'
import './Event.css'
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.css'
import * as moment from 'moment'

export default function EventItem(props) {
    const [show, setShow] = useState(false);
    const [phonenmr, setPhonenmr] = useState();
    const [status, setStatus] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let activity = props.data;
    const signup = () => {
        let url = "http://localhost:8080/studentToActivity/" + props.data.id + "/" + phonenmr;
        console.log(url)
        axios.post(url)
            .then(res => res.status === 201 ? setStatus("Tack för anmälan!") : setStatus("Något gick fel, har ni registrerat er?"))
    }

    const calenderEvent=()=>{
        let event={
            title: activity.type,
            description: 'Träningstillfälle på LM-Hundsport',
            location: activity.location,
            startTime: subtracthour(activity.activityStart),
            endTime: subtracthour(activity.activityEnd)
        }
        return event;
    }
    const subtracthour=(incdate) =>{
        var time = moment.duration("00:01:00")
        var date = moment(incdate)
        date.subtract(time)
        return date;
    }
    
    return (
        <Accordion>
            <Card className="mainCard">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Card.Header>{activity.type}</Card.Header>
                    <br></br>
                    <h6>Tid:
                            <Moment format="DD/MM-YY HH:mm">
                            {activity.activityStart}
                        </Moment>
                        -
                            <Moment format="HH:mm">
                            {activity.activityEnd}
                        </Moment>

                    </h6>
                    <h6>Plats: {activity.location}</h6>
                    <h6>Nivå: {activity.level}</h6>
                    <Image className="arrowDown"  src={arrowDown} rounded />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h6>Pris: {activity.price}kr</h6>
                        <h6>Anmälda: {activity.studentlist.length}/{activity.participants}</h6>
                        <Button variant="outline-success" onClick={handleShow}>Anmälan</Button>
                        <Modal centered show={show} onHide={handleClose} style={{ textAlign: 'center' }}>
                            <Modal.Header closeButton>
                                <Modal.Title>Anmälan</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h1>Vill du anmäla dig<br></br>till denna aktivitet?</h1>
                                <Card className="text-white" bg="primary" style={{ textAlign: 'center', borderRadius: "1rem", margin: '2rem', width: "auto" }}>
                                    <Card.Header>{activity.type}</Card.Header>
                                    <Card.Body>
                                        <h6>Tid:
                                                 <Moment format="DD/MM-YY HH:mm">
                                                {activity.activityStart}
                                            </Moment>
                                            -
                                                <Moment format="HH:mm">
                                                {activity.activityEnd}
                                            </Moment>
                                        </h6>
                                        <h6>Plats: {activity.location}</h6>
                                        <h6>Nivå: {activity.level}</h6>
                                        <h6>Pris: {activity.price}kr</h6>
                                        <h6>Anmälda: {activity.studentlist.length}/{activity.participants}</h6>
                                    </Card.Body>
                                </Card>
                            </Modal.Body>
                            <Form>
                                <Form.Label>Telefonnummer för anmälan</Form.Label>
                                <Form.Control type="email" placeholder="Telefonnummer" onChange={e => setPhonenmr(e.target.value)} />
                                <Form.Text className="text-muted">
                                    07XXXXXXXX
                                </Form.Text>
                            </Form>

                            <Modal.Footer>
                                <Button block variant="outline-danger" onClick={handleClose}>Nej</Button><br></br>
                                <Button block variant="outline-success" onClick={() => signup()}> Ja</Button>
                            </Modal.Footer>
                            {status ? <div style={{padding: "10px"}}><AddToCalendar event={calenderEvent()}/></div> : ""}
                            <h1 style={{ textAlign: 'center', fontSize: 20 }}> {status ? status : ""}</h1>
                            {status ? <Button block variant="outline-success" onClick={handleClose}>Stäng</Button> : ""}
                            
                        </Modal>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
