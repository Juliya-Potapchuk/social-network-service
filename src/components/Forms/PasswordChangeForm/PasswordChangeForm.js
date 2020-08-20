import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import Input from "../../Input/Input";
import { passwChangeElements } from "../../../constants";
import Button from "../../Button/Button";
import { updatePassword } from "../../../redux/actions/actionSession";
import { validationUpdatePassword } from "../../../validation/validationUpdatePassword";

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordTwo: "",
    };
  }

  componentDidMount() {
    this.clearData();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { password, passwordTwo } = this.state;
    const { updatePassword } = this.props;
    const arrFields = [password, passwordTwo];
    const isValidValue = validationUpdatePassword(arrFields);
    if (!isValidValue) return;

    updatePassword(password);
    this.clearData();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearData() {
    this.setState({ password: "", passwordTwo: "" });
  }

  render() {
    const { password, passwordTwo } = this.state;
    const { loading } = this.props;
    const inputValue = [password, passwordTwo];
    const nameButton = loading ? "Loading..." : "Send";
    const sizeValue = "small";

    return (
      <div className="wrapper-settings-block">
        <h2 className="h2">CHANGE PASSWORD</h2>

        <form onSubmit={this.onSubmit}>
          <div className="wrapper-inputs-set-block">
            {passwChangeElements.map((input, index) => (
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
          <Button disabled={loading} nameButton={nameButton} size={sizeValue} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updatePassword,
};

const mapStateToProps = (state) => ({
  loading: state.sessionState.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeForm);
