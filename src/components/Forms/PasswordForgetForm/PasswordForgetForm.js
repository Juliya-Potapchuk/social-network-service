import React, { Component } from "react";
import { connect } from "react-redux";
import { VALUES_INPUT } from "../../../constants";
import Icons from "../../../images/iconsSmall";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { resetPassword } from "../../../redux/actions/actionSession";
import { validationResetPassword } from "../../../validation/validationResetPassword";
import "./style.scss";

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  componentDidMount() {
    this.clearData();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { resetPassword } = this.props;
    const { email } = this.state;
    const isValidValue = validationResetPassword([email]);
    if (!isValidValue) return;

    resetPassword(email);
    this.clearData();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearData() {
    this.setState({ email: "" });
  }

  render() {
    const { loading } = this.props;
    const { email } = this.state;
    const nameButton = loading ? "Loading..." : "Reset My Password";
    const classValue = "password-forget-input-wrapper";

    return (
      <form className="password-forget-form" onSubmit={this.onSubmit}>
        <Input
          name={VALUES_INPUT.EMAIL}
          value={email}
          type={VALUES_INPUT.TEXT}
          placeholder={VALUES_INPUT.EMAIL_ADDRESS}
          icon={Icons.faEnvelope}
          onChange={this.onChange}
          classValue={classValue}
        />
        <Button disabled={loading} nameButton={nameButton} />
      </form>
    );
  }
}

const mapDispatchToProps = { resetPassword };

const mapStateToProps = (state) => ({
  loading: state.sessionState.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgetForm);
