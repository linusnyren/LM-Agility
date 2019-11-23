import React, { useState } from 'react'
import { Card, Modal, Button, Accordion, Form } from 'react-bootstrap'
import Moment from 'react-moment';
import axios from 'axios';

export default function EventItem(props) {
    const [show, setShow] = useState(false);
    const [phonenmr, setPhonenmr] = useState();
    const [status, setStatus] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const signup = () => {
        let url = "http://localhost:8080/studentToActivity/" + props.data.id + "/" + phonenmr;
        console.log(url)
        axios.post(url)
            .then(res => res.status === 201 ? setStatus("Tack för anmälan!") : setStatus("Något gick fel, har ni registrerat er?"))
    }
    let activity = props.data;
    return (
        <Accordion>
            <Card className="text-white" bg="primary" style={{ borderRadius: "1rem", margin: '2rem', width: "16rem" }}>
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

                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h6>Pris: {activity.price}kr</h6>
                        <h6>Anmälda: {activity.studentlist.length}/{activity.participants}</h6>
                        <Button variant="success" onClick={handleShow}>Anmälan</Button>
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
                            <h1 style={{ textAlign: 'center', fontSize: 20 }}> {status ? status : ""}</h1>
                            {status ? <Button block variant="outline-success" onClick={handleClose}>Stäng</Button> : ""}
                        </Modal>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
