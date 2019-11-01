import React, {useState} from 'react'
import {Button, Card} from 'react-bootstrap'
export default function Contact(){

    const [click, setClick] = useState(false)

    return(
        <div>
        <div>Contact me</div>
        <Card style={{width: '13rem',  marginLeft: 'auto', marginRight:'auto'}} bg={click ? "warning" : "primary"}>
        <Button variant={click ? "success" : "danger"} onClick={() => setClick(!click)}>Clicka mig!</Button><br></br>
        {click ? "Marcus" : "Linus"}<br></br>

        </Card>
        </div>
    )
}