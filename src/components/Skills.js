import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaReact, FaCss3, FaJs, FaHtml5 } from "react-icons/fa";

function Skills() {
    const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>test</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <FaReact  size={70} className="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <FaJs size={70} className="Image"/>
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <FaHtml5  size={70} className="Image"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <FaCss3  size={70} className="Image"/>
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
)
}

export default Skills;