import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemberCard = (props) => {
    const person = props.person;
    return (
    <Card style={{ maxWidth: '20rem', margin: '2rem 2rem', boxShadow: '1px 1px 10px black' }}>
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
