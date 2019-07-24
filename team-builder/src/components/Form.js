import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputForm = (props) => {
    const [member, setMember] = useState({ firstName: "", lastName:"", email: "", role: "" });

 const changeHandler = (event) => {
    const { name, value } = event.target;
     const newMember = {...member, [name]: value};
    setMember(newMember);
    console.log(member);
  }
 
 const handleSubmit = (event) => {
    props.setList(member);
    event.preventDefault();
    console.log("Member Info", member);
  }
  return (
      <Form onSubmit={handleSubmit} >
      <h2>Add New Member</h2>
        <Form.Row>
            <Col>
                <Form.Label>First Name: </Form.Label>
                <Form.Control placeholder="First name" name="firstName" onChange={(event) => changeHandler(event)} />
            </Col>
            <Col>
                <Form.Label>Last Name: </Form.Label>
                <Form.Control placeholder="Last name" name="lastName" onChange={(event) => changeHandler(event)} />
            </Col>
            <Col>
                <Form.Label>Email address: </Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={(event) => changeHandler(event)} />
            </Col>
            <Col>
                <Form.Label>Role: </Form.Label>
                <Form.Control placeholder="Role" name="role" onChange={(event) => changeHandler(event)} />
            </Col>
        </Form.Row>
        <br/>
        <Button variant="primary" type="submit" className="btn btn-primary disabled">
            Submit
        </Button>
      </Form>
        
 );
}
export default InputForm;