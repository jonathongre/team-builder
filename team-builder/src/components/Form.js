import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputForm = (props) => {
    const { submitPerson, initialPerson, buttonText, history } = props;
    const [member, setMember] = useState({ firstName: "", lastName:"", email: "", role: "" });

 const changeHandler = (event) => {
    setMember({...member, [event.target.name]: event.target.value});
  }
 
 const handleSubmit = (event) => {
    event.preventDefault();
    submitPerson(member);
    setMember({firstName: "", lastName:"", email: "", role: ""});
    history.push("/");
  }
  return (
      <Form onSubmit={handleSubmit} >
      <h2>Add New Member</h2>
        <Form.Row>
            <Col>
                <Form.Label>First Name: </Form.Label>
                <Form.Control placeholder="First name" value={member.firstName} name="firstName" onChange={changeHandler} />
            </Col>
            <Col>
                <Form.Label>Last Name: </Form.Label>
                <Form.Control placeholder="Last name" value={member.lastName} name="lastName" onChange={changeHandler} />
            </Col>
            <Col>
                <Form.Label>Email address: </Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={member.email} name="email" onChange={changeHandler} />
            </Col>
            <Col>
                <Form.Label>Role: </Form.Label>
                <Form.Control placeholder="Role" value={member.role} name="role" onChange={changeHandler} />
            </Col>
        </Form.Row>
        <br/>
        <Button variant="primary" type="submit" className="btn btn-primary disabled">
            {buttonText}
        </Button>
      </Form>
        
 );
}
export default InputForm;