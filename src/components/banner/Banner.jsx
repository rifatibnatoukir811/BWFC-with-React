import { Col, Container, Row } from 'react-bootstrap'
import "./banner.css"
import ban from "../../assets/vectorban.png"

const Banner = () => {
return (
    <section id='banner'>
        <Container>
        <Row>
            <Col lg={6} className='ban_text'>
                <h1>Managing business payments has never been easier</h1>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <a href="#">Get Started</a>
                <a href="#">See How It Works</a>
            </Col>
            <Col lg={6} className='ban_img'>
                <img src={ban} alt="" className='w-100' />
            </Col>
        </Row>
    </Container>
    </section>
)
}

export default Banner