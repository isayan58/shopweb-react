import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, RouteComponentProps, withRouter } from "react-router-dom";
import {withCookies} from "react-cookie";
import shopReducer from "../Store/shopReducer";
import { actionTypes } from '../../src/Store/actionTypes';
import {State} from '../../src/Store/rootReducer';
import { login, logout } from '../../src/Store/actionCreators';
interface Props {}
interface LoginApiResponse{
  message?: string;
  token: string;
}

const Login = (props: any) =>
{
      const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");
      //const [authResponse, setAuthResponse] =useState<LoginApiResponse>();
      const history = useHistory();
      const dispatch = useDispatch();
      const shopping = useSelector((state: State) => state.shopping);


  const handleChange = async () => {
    try {
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
      console.log("Token : ",responseData.message);
      if(responseData.message === "Logged in.")
      {
        props.cookies.set("Authorization", responseData.token,
        {
          path:"/"
        });
        console.log("Message token:", responseData.token);
        alert(responseData.message);
        props.history.push("/");
        //props.dispatch(login(responseData.token));
        dispatch(login(responseData.token));
      } else{
        alert("User entered wrong password.");
      }
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

export default withCookies(Login);