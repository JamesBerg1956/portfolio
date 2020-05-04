import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactCard(){

    return(

        <Container>
            <Row>
                <Col>
                    <Card style={{ width:"20rem" }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>James Berg</Card.Title>
                            <Card.Text>
                                Full Stack Developer
                                Cool. Competent. No Fuss.
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    Email: <Card.Link href="mailto:james.berg38@yahoo.com">james.berg38@yahoo.com</Card.Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Github: <Card.Link href="https://github.com/JamesBerg1956">JamesBerg1956</Card.Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card.Link href="https://www.linkedin.com/in/james-berg-02370ba3/">LinkedIn</Card.Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );

}

export default ContactCard;