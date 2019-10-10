import React, {useState} from 'react'
import {Card, Modal, Button, Accordion, Col} from 'react-bootstrap'
export default function EventItem(props) {
    /*activityEnd: "snart"
activityStart: "snart"
id: 52
level: "Nybörjare"
location: "Greggered"
participants: 5
price: 900
studentlist: []
type: "Agility"*/
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

let activity = props.data;
    return (
            <Accordion>
            <Card className="text-white"bg="primary" style={{borderRadius:"1rem", margin:'2rem', width:"16rem"}}>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Card.Header>{activity.type}</Card.Header>
                        
                            <br></br>
                            <h6>Tid: {activity.activityStart} - {activity.activityEnd}</h6>
                            <h6>Plats: {activity.location}</h6>
                            <h6>Nivå: {activity.level}</h6>
                        
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <h6>Pris: {activity.price}kr</h6>
                        <h6>Anmälda: {activity.studentlist.length}/{activity.participants}</h6>
                        <Button variant="success" onClick={handleShow}>Anmälan</Button>
                            <Modal centered show={show} onHide={handleClose} style={{textAlign:'center'}}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Anmälan</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Card className="text-white"bg="primary" style={{textAlign: 'center', borderRadius:"1rem", margin:'2rem', width:"16rem"}}>
                                        <Card.Header>{activity.type}</Card.Header>
                                            <Card.Title>Vill du anmäla dig<br></br>till denna aktivitet?</Card.Title>
                                            <Card.Body>
                                             <h6>Tid: {activity.activityStart} - {activity.activityEnd}</h6>
                                             <h6>Plats: {activity.location}</h6>
                                             <h6>Nivå: {activity.level}</h6>
                                            <h6>Pris: {activity.price}kr</h6>
                                            <h6>Anmälda: {activity.studentlist.length}/{activity.participants}</h6>
                                        </Card.Body>
                                    </Card>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button block variant="outline-danger" onClick={handleClose}>Nej</Button><br></br>
                                    <Button block variant="outline-success" onClick={handleClose}>Ja</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
    )
}