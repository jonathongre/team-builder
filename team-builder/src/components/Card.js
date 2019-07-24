import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemberCard = (props) => {
    const person = props.person;
    return (
    <Card border="primary" style={{ maxWidth: '20rem', margin: '2rem 0' }}>
    <Card.Header>{person.firstName} {person.lastName}</Card.Header>
    <Card.Body>
      <Card.Title>{person.email}</Card.Title>
      <Card.Text>
        {person.role}
      </Card.Text>
    </Card.Body>
        <Button variant="primary" type="submit" className="btn btn-primary disabled">
            Edit
        </Button>
  </Card>
)
}

export default MemberCard;