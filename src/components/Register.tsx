import React from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { useHistory, RouteComponentProps, withRouter } from "react-router-dom";
interface Props {}
interface SignUpApiResponse{
  message?: string;
}

const Register = (props: RouteComponentProps<Props>) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleChange = async () => {
    try {
      const response = await fetch("http://localhost:8000/postUsers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email_id: email,
          phone_number: phoneNumber,
          password: password,
        }),
      });
      const responseData : SignUpApiResponse =  await response.json();
      console.log(responseData.message);
      if(responseData.message === "User created")
      {
        alert(responseData.message);
        props.history.push("/sign-in");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card className="container">
      <Card.Title>Register</Card.Title>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter email"
          onChange={(e) => {
            setPhoneNumber(e.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleChange}
      >
        Sign Up
      </Button>
    </Card>
  );
};
export default withRouter(Register);
