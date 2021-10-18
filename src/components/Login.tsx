import React from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { useHistory, RouteComponentProps, withRouter } from "react-router-dom";
interface Props {}
interface LoginApiResponse{
  message?: string;
}
const Login = (props: RouteComponentProps<Props>) =>
{

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  // console.log("-1");

  const handleChange = async () => {
    // console.log("1");
    try {
      // console.log("2");
      const response = await fetch(
        "http://localhost:8000/authenticateUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email_id: email,
            password: password,
          }),
        }
      );
      const responseData: LoginApiResponse = await response.json();
      console.log(responseData.message);
      if(responseData.message === "Logged in.")
      {
        alert(responseData.message);
        props.history.push("/");
      } else{
        alert("User entered wrong password.");
      }
      // history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <Card className="container">
          <Card.Title>Login</Card.Title>
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
          <Button variant="primary" type="submit" onClick={handleChange}>
            Login
          </Button>
        </Card>
      );
    }

export default withRouter(Login);