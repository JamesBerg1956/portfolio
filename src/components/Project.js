import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CodeQuizPNG from "../assets/CodeQuiz.PNG";
import CompareDevTopicsPNG from "../assets/CompareDevTopics.PNG";
import MyLibraryPNG from "../assets/MyLibrary.PNG";
import RewardsProgramPNG from "../assets/RewardProgram.PNG";
import WeatherDashboardPNG from "../assets/WeatherDashboard.PNG";
import NoteTakerPNG from "../assets/NoteTaker.PNG";

function Project(){

    return(

        <Container>
            <Row>
                <Col md={12} lg={6}>
                    <Image src={CompareDevTopicsPNG} rounded />
                </Col>
                <Col md={12} lg={6}>
                    <Image src={CodeQuizPNG} rounded />
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>
                    <Image src={MyLibraryPNG} rounded />
                </Col>
                <Col md={12} lg={6}>
                    <Image src={RewardsProgramPNG} rounded />
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>
                    <Image src={WeatherDashboardPNG} rounded />
                </Col>
                <Col md={12} lg={6}>
                    <Image src={NoteTakerPNG} rounded />
                </Col>
            </Row>
        </Container>

    );

}

export default Project;