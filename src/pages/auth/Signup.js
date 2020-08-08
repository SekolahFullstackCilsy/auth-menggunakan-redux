import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../store/actions";

const Signup = (props) => {
  const { signup } = props;
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form className="m-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() =>
          signup({ name: name, username: username, password: password })
        }
      >
        Submit
      </Button>
      <br />
      Already have an account?<Link to="/">Signin</Link>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.authReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => dispatch(signup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
