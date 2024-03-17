import { Col, Container, Row } from "react-bootstrap"
import "./financy.css"

function Financy() {
    return (
        <>
        <section id="financy">
            <Container>
                <Row className="finan">
                    <Col lg={12}>
                        <div className="financy-head">
                            <span>Why Financy</span>
                            <h1>Why Choose Us</h1>
                        </div>                    
                    </Col>
                </Row>
                <Row className="finan-ro">
                    <Col lg={{span:5, offset:1}}>
                        <div className="finany-card">
                            <div className="card-sec">
                                <div className="left">
                                    <div className="cercle"></div>
                                </div>
                                <div className="right">
                                <h6>No Extra Fee</h6>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="finany-card">
                            <div className="card-sec">
                                <div className="left">
                                    <div className="cercle1"></div>
                                </div>
                                <div className="right">
                                <h6>No Extra Fee</h6>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="finan-ro">
                    <Col lg={{span:5, offset:1}}>
                        <div className="finany-card">
                            <div className="card-sec">
                                <div className="left">
                                    <div className="cercle2"></div>
                                </div>
                                <div className="right">
                                <h6>No Extra Fee</h6>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="finany-card">
                            <div className="card-sec">
                                <div className="left">
                                <div className="cercle3"></div>
                                </div>
                                <div className="right">
                                <h6>No Extra Fee</h6>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
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

export default Financy