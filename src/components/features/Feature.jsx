import { Col, Container, Row } from 'react-bootstrap'
import './feature.css'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'
import fealeft from '../../assets/Illustration.png'
import onecard from '../../assets/Images.png'
import onetop from '../../assets/Ellipse 1878.png'
import twocard from '../../assets/Images (1).png'
import threecard from '../../assets/Images (2).png'
import card from '../../assets/Profile.png'

const Feature = () => {
return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="fea-text">
                    <p>Over 32k+ software  businesses growing with AR Shakir</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <div className="banner-fea">
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                    <img src={three} alt="" />
                    <img src={four} alt="" />
                    <img src={five} alt="" />
                    <img src={six} alt="" />
                    </div>
                </Col>
            </Row>
            <Row id='feaban'>
                <Col lg={6}>
                    <div className="feaimg">
                    <img src={fealeft} alt=""/>  
                        </div>                
                </Col>
                <Col lg={6}>
                    <div className="featext">
                        <h5>Our Feature</h5>
                        <h1>Receive payments quickly from anywhere</h1>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                
                </Col>
            </Row>
            <Row id='fea-from'>
            <Col lg={7}>
                    <div className="feature-text">
                        <h4>Our Feature</h4>
                        <h2>Receive payments quickly from anywhere</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    </div>
                </Col>
                <Col lg={{span:4, offset:1}}>
                    <div className="fea-from">
                        <h5>Get Started for Free</h5>
                        <input type="email" placeholder='Enter Your Email' />
                        <input type="password" placeholder='Enter Your Password' />
                        <button type='submit'>Get Started</button>
                    </div>
                </Col>
            </Row>
            <Row id='fea-end'>
            <Col lg={6}>
                    <div className="feature-text">
                        <h4>Our Feature</h4>
                        <h2>All payments are linked to your Financy account</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Start</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="one-card">
                    <div className="card">
                        <div className="one-top">
                        <img src={onetop} alt="" />
                        </div>
                        <h4>100+ Verified Teacher</h4>
                        <div className="one">
                            <div className="left">
                                <img src={onecard} alt="" />
                            </div>
                            <div className="right">
                                <h5>Ben Stokes</h5>
                                <p>Mentor of Web Design</p>
                            </div>
                        </div>
                        <div className="one">
                            <div className="left">
                                <img src={twocard} alt="" />
                            </div>
                            <div className="right">
                                <h5>Hardik Pandya</h5>
                                <p>Mentor of Web Design</p>
                            </div>
                        </div>
                        <div className="one">
                            <div className="left">
                                <img src={threecard} alt="" />
                            </div>
                            <div className="right">
                                <h5>Joe Root</h5>
                                <p>Mentor of UI/UX</p>
                            </div>
                        </div>
                        <div className="see-more">
                            <a href="#">See More</a>
                        </div>
                    </div>
                    <div className="two-card">
                            <div className="card-two-img">
                            <img src={card} alt="" />
                            </div>
                            <h3>Morne Morkel</h3>
                            <p>Mentor of Web Development</p>
                            <a href="#">Contact</a>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
)
}

export default Feature