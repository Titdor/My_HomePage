import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitHubIcon from "../assets/img/github-mark-white.svg";



function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={12} className='text-center image-icon'>
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""></img></a>
                            <a href="#"><img src={gitHubIcon} alt=""></img></a>
                        </div>
                    </Col>
                    <Col sm={12} className='text-center'>
                       <p>Copyright 2023. All rights reserved by: Theodor Panguripan</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer;