import { Container, Row, Col } from "react-bootstrap"
import "./fea_one.css"
import feaimg from '../../assets/fea-ban.png'
import pimg from '../../assets/Ellipse 40.png'
import pimg1 from '../../assets/Ellipse 40 (1).png'
import pimg2 from '../../assets/Ellipse 40 (2).png'

function Fea_one() {
    return (
        <>
        <section id="fea-one">
            <Container>
                <Row>
                <Col lg={6}>
                    <div className="featext">
                        <h5>Our Feature</h5>
                        <h1>All payments are <br />linked to your Financy <br />account</h1>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="feaimg">
                        <img src={feaimg} alt="" />
                        <div className="pp-one">
                            <div className="pp-flex">
                                <div className="pp-img">
                                <img src={pimg} alt="" />
                            </div>
                            <div className="pp-text">
                                <h4>+ $28,900</h4>
                                <p>Received from Michael V</p>
                            </div>
                            </div>
                            <div className="pp-flex">
                                <div className="pp-img">
                                <img src={pimg1} alt="" />
                            </div>
                            <div className="pp-text">
                                <h4>+ $28,900</h4>
                                <p>Received from Michael V</p>
                            </div>
                            </div>
                            <div className="pp-flex">
                                <div className="pp-img">
                                <img src={pimg2} alt="" />
                            </div>
                            <div className="pp-text">
                                <h4>+ $28,900</h4>
                                <p>Received from Michael V</p>
                            </div>
                            </div>

                        </div>
                    </div>                
                </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Fea_one