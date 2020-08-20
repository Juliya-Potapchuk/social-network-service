import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ROUTE, signUpElements } from "../../../constants";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { signUp } from "../../../redux/actions/actionSession";
import { setDefaultSettings } from "../../../redux/actions/actionsSettings";
import { validationSignUp } from "../../../validation/validationSignUp";
import "./style.scss";
import "../SignInForm/style.scss";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      passwordTwo: "",
    };
  }

  componentDidMount() {
    this.clearData();
  }

  async componentDidUpdate(prevProps) {
    const { setDefaultSettings, authUser, history } = this.props;
    if (authUser !== prevProps.authUser) {
      await setDefaultSettings(authUser.uid);
      history.push(ROUTE.NEWS_PAGE);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { userName, email, password, passwordTwo } = this.state;
    const { signUp } = this.props;
    const arrFields = [userName, email, password, passwordTwo];
    const isValidValue = validationSignUp(arrFields);
    if (!isValidValue) return;

    signUp(email, password, userName);
    this.clearData();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearData() {
    this.setState({ userName: "", email: "", password: "", passwordTwo: "" });
  }

  render() {
    const { userName, email, password, passwordTwo } = this.state;
    const { loading } = this.props;
    const inputValue = [userName, email, password, passwordTwo];
    const nameButton = loading ? "Loading..." : "Sign Up";

    return (
      <form onSubmit={this.onSubmit} className="form-auth">
        {signUpElements.map((input, index) => (
          <Input
            key={input.id}
            name={input.name}
            value={inputValue[index]}
            type={input.type}
            placeholder={input.placeholder}
            onChange={this.onChange}
            icon={input.icon}
          />
        ))}
        <Button disabled={loading} nameButton={nameButton} />
      </form>
    );
  }
}

const mapDispatchToProps = {
  setDefaultSettings,
  signUp,
};

const mapStateToProps = (state) => ({
  loading: state.sessionState.loading,
  authUser: state.sessionState.authUser,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUpForm);
