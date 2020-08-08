import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../store/actions/";

const Dashboard = (props) => {
  const { signedUser, signout } = props;

  return (
    <p>
      Dashboard, {signedUser[0].name},{" "}
      <Link to="/" onClick={() => signout()}>
        signout
      </Link>
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    signedUser: state.authReducer.signedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
