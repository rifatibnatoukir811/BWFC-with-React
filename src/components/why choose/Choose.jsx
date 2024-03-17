import { Container, Row, Col } from "react-bootstrap"
import "./choose.css"

function Choose() {
    return (
        <>
        <section id="choose">
            <Container>
            <Row id='choose-from'>
            <Col lg={7}>
                    <div className="choose-text">
                        <h4>Why Choose Us</h4>
                        <h2>Track your crytpo portfolio on the best way possible</h2>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    </div>
                </Col>
                <Col lg={{span:4, offset:1}}>
                    <div className="choose-from">
                        <h5>Get Started for Free</h5>
                        <input type="email" placeholder='Enter Address' />
                        <input type="password" placeholder='Password' />
                        <button type='submit'>Get Started</button>
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
        </>
    )
}

export default Choose