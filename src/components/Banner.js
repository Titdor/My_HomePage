import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import headerImage from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


function Banner () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["A Web Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(()=>{
        tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        };

    }, [text])

    function tick () {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my HomePage</span>
                                    <h1>{`Hi I'm Theodor Panguripan `}<span className="wrap">{text}</span></h1>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImage} alt="Header Image"></img>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default Banner;