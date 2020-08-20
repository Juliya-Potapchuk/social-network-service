import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import { ROUTE, signInElements } from "../../../constants";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { getSettings } from "../../../redux/actions/actionsSettings";
import { signIn } from "../../../redux/actions/actionSession";
import { validationSignIn } from "../../../validation/validationSignIn";
import "./style.scss";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.clearData();
  }

  async componentDidUpdate(prevProps) {
    const { authUser, getSettings, history } = this.props;
    if (authUser !== prevProps.authUser) {
      await getSettings(authUser.uid);
      history.push(ROUTE.NEWS_PAGE);
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const { signIn } = this.props;
    const { password, email } = this.state;
    const arrFields = [password, email];
    const isValidValue = validationSignIn(arrFields);
    if (!isValidValue) return;

    signIn(email, password);
    this.clearData();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearData() {
    this.setState({ email: "", password: "" });
  }

  render() {
    const { email, password } = this.state;
    const { loading } = this.props;
    const inputValue = [email, password];
    const nameButton = loading ? "Loading..." : "Sign In";

    return (
      <form onSubmit={this.onSubmit} className="form-auth">
        <div className="fields">
          {signInElements.map((input, index) => (
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
        </div>
        <Button disabled={loading} nameButton={nameButton} />
      </form>
    );
  }
}

const mapDispatchToProps = {
  signIn,
  getSettings,
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  loading: state.sessionState.loading,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignInForm);
