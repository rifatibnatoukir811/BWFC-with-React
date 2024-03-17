import { Col, Container, Row } from "react-bootstrap"
import "./testimonials.css"
import meye from '../../assets/image 61.png'
import nill from '../../assets/Vector.png'
import dot from '../../assets/“.png'
import rating from '../../assets/rating.png'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";



const Testimonials = () => {
  return (
    <>
    <section id="testimonial">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="tstimo-top">
                  <h4>Testimonials</h4>
                  <h3>Check what our clients are saying</h3>
              </div>    
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div className="test-ban">
            <div className="text-test">
            <h5>Angela Taylor</h5>
            <p>CEO SAMSUNG</p>
            </div>
              <div className="meye">
                <img src={meye} alt="" />
              </div>
              <div className="nill">
                <img src={nill} alt="" />
                <div className="text">
                  <p>Samsung</p>
                </div>
              </div>
            </div>
            <div className="icon">
              <a href="#"><FaAngleLeft /></a>
              <a href="#"><FaAngleRight /></a>
            </div>
          
          </Col>
          <Col lg={5}>
            <div className="ban-right">
            <img src={dot} alt="" className="dot"/>
            <h4>Save Time Managing Social <br /> Media For Your Business</h4>
            <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly. <br /> <br /> Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
            <img src={rating} alt="" className="rate"/>
            <h5>Angela Taylor</h5>
            <h6>CEO SAMSUNG</h6>
            </div>
          </Col>
        </Row>
        <Row className="btm-test">
                <Col lg={9}>
                    <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
                </Col>
                <Col lg={3}>
                    <a href="#">Get Started</a>
                </Col>
            </Row>
      </Container>
    </section>
    </>
  )
}

export default Testimonials