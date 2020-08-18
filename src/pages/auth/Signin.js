import React, { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";
import { withRouter, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../../store/actions";

const Signin = (props) => {
  const { signin, signinResponse } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory("");

  useEffect(() => {
    if (signinResponse) {
      //TIDAK NULL ATAU DIDEFENISIKAN
      history.push("dashboard");
    }
  }, [signinResponse]);

  return (
    <Form className="m-4">
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
        onClick={() => signin({ username: username, password: password })}
      >
        Submit
      </Button>
      {"   "}
      <Link to="/signup">Signup</Link>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    signinResponse: state.authReducer.signinResponse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (data) => dispatch(signin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));
