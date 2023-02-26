import React from "react";
import { Container, Row, Col, Tab,} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import StockNews from "../assets/img/News_Stock.png";
import StockScreener from "../assets/img/Stock_screener_Project.png";
import cryptoProject from "../assets/img/cryptoProject.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




const Projects = () => {

    const projects = [
      {
        title: "Stock News",
        description: "Display Stock News Market",
        imgUrl: StockNews,
        url:"https://stocknewsmern.onrender.com"
      },
      {
        title: "Stock Screener",
        description: "Display Ticker",
        imgUrl: StockScreener,
        url:"https://stockscreenermern.onrender.com"
      },
      {
        title: "Real-time Cryptocurrency",
        description: "Display real-time CryptoCurrency",
        imgUrl: cryptoProject,
        url:"https://cryptocurrencymernrealtime.onrender.com"
      },
    ];
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Tab.Content id="slideInUp">
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>}
            </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
  }
  
  export default Projects