import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class Google extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      this.initGapiClient();
    });
  }

  initGapiClient = async () => {
    console.log("Google API loaded.");

    try {
      await window.gapi.client.init({
        clientId:
          "152935921659-jkrdvp4ll5k7kvbfj9crosf7tsak8mpv.apps.googleusercontent.com",
        scope: "email",
        prompt: "consent"
      });

      this.auth = window.gapi.auth2.getAuthInstance();
      console.log("Google API Client initialized.");
      this.auth.isSignedIn.listen(this.isSignedInListener);
      this.isSignedInListener(this.auth.isSignedIn.get());
    } catch (err) {
      console.error(err.details);
    }
  };

  isSignedInListener = isSignedIn => {
    let message = "";

    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      message = "User signed in.";
    } else {
      this.props.signOut();
      message = "User signed out.";
    }

    console.log(message);
  };

  handleGoogleSignIn = () => {
    this.auth.signIn();
  };

  handleGoogleSignOut = () => {
    this.auth.signOut();
  };

  renderGoogleButton = () => {
    let text = "";
    let onClick = null;

    if (this.props.isSignedIn) {
      text = "Sign out";
      onClick = this.handleGoogleSignOut;
    } else {
      text = "Sign in with Google";
      onClick = this.handleGoogleSignIn;
    }

    return (
      <button className="ui red google button" onClick={onClick}>
        <i className="google icon" />
        {text}
      </button>
    );
  };

  render() {
    console.log("Is Signed In:", this.props.isSignedIn);
    console.log("Current User Id:", this.props.currentUserId);
    return <div className="item">{this.renderGoogleButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.authReducer.isSignedIn,
    currentUserId: state.authReducer.userId
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Google);
