import { Col, Container, Row } from "react-bootstrap"
import "./footer.css"

function Footer() {
    return (
        <>
        <section id="footer">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="left-text">
                            <h5>BWFC</h5>
                            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                        </div>
                    </Col>
                    <Col lg={{span:6, offset:1}}>
                        <div className="right-text">
                        <Col lg={4}>
                            <ul className="list">
                                <h1>Company</h1>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>Pricing</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <ul className="list">
                                <h1>Product</h1>
                                <li>Invoicing Platform</li>
                                <li>Accounting Plateform</li>
                                <li>Create Proposal</li>
                                <li>Contracts</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <ul className="list">
                                <h1>Resources</h1>
                                <li>Proposal Template</li>
                                <li>Invoice Template</li>
                                <li>Tuturoial</li>
                                <li>How to write a contract</li>
                            </ul>
                        </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="copyright">
            <Container>
                <Row>
                    <Col lg={5}>
                        <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
                    </Col>
                    <Col lg={{span:4, offset:3}}>
                        <p>Supported by Microsoft Startup</p>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Footer