import React from 'react'
import {Jumbotron, Carousel} from 'react-bootstrap'
import bild1 from './images/bild1.jpg'
import bild2 from './images/bild2.jpg'
import bild3 from './images/bild3.jpg'
export default function Home() {
    return (
        <div>
            <div>
                <div id="backdrop" style={{zIndex:'1', position:'absolute', width:'100%', height:'100%'}}><img alt="" src='/backdrop.png' />
                <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bild1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bild2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bild3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
                </div>

                <div id="curtain" style={{zIndex:'2', position:'relative'}}>
                <h1>Välkomen till LM-Hundsport</h1>
                <p>
                LM-Hundsport drivs av mig, Linn Magnusson.
                </p>
                <p>
                Jag kommer till att börja med erbjuda kurser och privatträning inom agility.<br></br>
                Kurser annonseras på denna sida och då kommer information kring nivå, datum och pris att presenteras.<br></br>
                Önskas privatträning går det alldeles utmärkt! Tillgängliga tider för privatträning hittar ni i albumet "privatträning".<br></br>
                Boka gör ni genom att skicka mail till lmhundsport@hotmail.com
                </p>
                    </div>
            </div></div>
         
    )
}

/*       <div>            
                    <h1>Välkomen till LM-Hundsport</h1>
                <p>
                LM-Hundsport drivs av mig, Linn Magnusson.
                </p>
                <p>
                Jag kommer till att börja med erbjuda kurser och privatträning inom agility.<br></br>
                Kurser annonseras på denna sida och då kommer information kring nivå, datum och pris att presenteras.<br></br>
                Önskas privatträning går det alldeles utmärkt! Tillgängliga tider för privatträning hittar ni i albumet "privatträning".<br></br>
                Boka gör ni genom att skicka mail till lmhundsport@hotmail.com
                </p>
                </div>
                <div>
</div>
            <Carousel>
                <Carousel.Item>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src={bild1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bild2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bild3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>*/