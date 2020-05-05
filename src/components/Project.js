import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CodeQuizPNG from "../assets/CodeQuiz.PNG";
import CompareDevTopicsPNG from "../assets/CompareDevTopics.PNG";
import MyLibraryPNG from "../assets/MyLibrary.PNG";
import RewardsPNG from "../assets/CodeQuiz.PNG";
import WeatherDashboardPNG from "../assets/WeatherDashboard.PNG";

function Project(){

    return(

        <Container>
            <Row>
                <Col md={12} lg={6}>
                    <Image src={CompareDevTopicsPNG} rounded />
                </Col>
                <Col md={12} lg={6}>
                    
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>

                </Col>
                <Col md={12} lg={6}>
                    
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>

                </Col>
                <Col md={12} lg={6}>
                    
                </Col>
            </Row>
        </Container>

    );

}

export default Project;