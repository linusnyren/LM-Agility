import React, {useState} from 'react'
import {Jumbotron, Form, Button, Modal, Col}  from 'react-bootstrap'
import axios from 'axios'
export default function Login(){
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
                                    surName: null,
                                    forName: null,
                                    phone: null,
                                    email: null,})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
      const form = event.currentTarget;
      setValidated(false);
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      if(user.forName !== null && user.phone !== null && user.email !== null && user.surName !== null){
        event.preventDefault();
      axios.post("http://localhost:8080/rest/student", user)
      .then(res => sessionStorage.setItem('userId', res.data.id))
      
      handleClose()
    }
    };
    return(
        <div>
            <Jumbotron style={{width:'50%', height:'50%', margin:'auto', marginTop:'3%'}} bg="primary">
            <Button size="sm" variant="primary" onClick={handleShow}>
                Registrering
            </Button>
            <Modal centered show={show} onHide={handleClose}>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrering</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                          <Form.Label>Förnamn</Form.Label>
                          <Form.Control required type="text" onChange={e => setUser(user, user.forName = e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                Skriv in ett giltigt förnamn
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                          <Form.Label>Efternamn</Form.Label>
                          <Form.Control required type="text" onChange={e => setUser(user, user.surName = e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                Skriv in ett giltigt efternamn
                          </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="07XXXXXXXX" required onChange={e => setUser(user, user.phone = e.target.value)}/>
                      <Form.Control.Feedback type="invalid">
                          Skriv in ett giltigt mobilnummer
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required onChange={e => setUser(user, user.email = e.target.value)}/>
                      <Form.Control.Feedback type="invalid">
                        Skriv in en giltig mailaddress
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                  <Form.Group>
                    <Form.Check
                      required
                      label="Jag godkänner användaravtalen för LM-Hundsport"
                      feedback="Ni måste godkänna användaravtalen innan registrering"
                    />
                  </Form.Group>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" block variant="outline-success" onClick={handleSubmit}>Registrera</Button><br></br>
                    <Button variant="outline-danger" block onClick={handleClose}>Stäng</Button>
                </Modal.Footer>
                </Form>
            </Modal>
                
                <Form>
                <h1>Login</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                            Logga in
                    </Button>
                </Form>
                    
            </Jumbotron>
        </div>
        
    )
}