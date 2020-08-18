import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signout, getListPost } from "../store/actions/";

const Dashboard = (props) => {
  const { signedUser, signout, getListPost, posts } = props;

  useEffect(() => {
    getListPost();
  }, []);

  /* useEffect(() => {
    console.log("posts", posts);
  }, [posts]); */

  return (
    <p>
      Dashboard, {signedUser && signedUser[0].name},{" "}
      <Link to="/" onClick={() => signout()}>
        signout
      </Link>
      <br />
      {posts &&
        posts.map((post) => (
          <div>
            {post.body}
            <br />
            <br />
          </div>
        ))}
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    signedUser: state.authReducer.signedUser,
    posts: state.postReducer.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    getListPost: () => dispatch(getListPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
