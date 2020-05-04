import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-boostrap/ListGroupItem";

function ContactCard(){

    return(

        <div>
            <Card style={{ width="rem" }}>
                <Card.Img variant="top" src="holder.js/100pxx180?text=Image cap" />
                <Card.Body>
                    <Card.Title>James Berg</Card.Title>
                    <Card.Text>
                        Full Stack Developer
                        Cool. Competent. No Fuss.
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            Email: <Card.Link href="mailto:james.berg38@yahoo.com">james.berg38@yahoo.com</Card.Link>
                            Github: <Card.Link href="https://github.com/JamesBerg1956">JamesBerg1956</Card.Link>
                            Github: <Card.Link href="https://github.com/JamesBerg1956">JamesBerg1956</Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/james-berg-02370ba3/">LinkedIn</Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>

    );

}

export default ContactCard;