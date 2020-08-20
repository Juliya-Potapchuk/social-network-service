import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../Input/Input";
import { VALUES_INPUT } from "../../../constants";
import Button from "../../Button/Button";
import { createPost } from "../../../redux/actions/actionsPosts";
import { validationPost } from "../../../validation/validationPost";
import "./style.scss";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      mainText: "",
    };
  }

  onChangeText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onCreatePost = (event) => {
    event.preventDefault();
    const { title, mainText } = this.state;
    const { authUser, createPost } = this.props;
    const isValidValue = validationPost([title, mainText]);
    if (!isValidValue) return;

    const post = {
      timestamp: Date.now(),
      title,
      mainText,
      userId: authUser.uid,
      userName: authUser.userName,
    };
    createPost(post);
    this.setState({ title: "", mainText: "" });
  };

  render() {
    const { title, mainText } = this.state;
    const { loading } = this.props;
    const nameButton = loading ? "Loading..." : "Send";
    const sizeValue = "big";

    return (
      <div className="wrapper-form-post-create">
        <h2 className="h2">PostMania</h2>

        <form
          acceptCharset="utf-8"
          onSubmit={(event) => this.onCreatePost(event)}
          className="form-post-create"
        >
          <Input
            autocomplete="off"
            name={VALUES_INPUT.TITLE}
            value={title}
            onChange={this.onChangeText}
            type={VALUES_INPUT.TEXT}
            placeholder={VALUES_INPUT.TITLE_PLACEHOLDER}
            maxLength={28}
          />
          <textarea
            name={VALUES_INPUT.MAIN_TEXT}
            value={mainText}
            onChange={this.onChangeText}
            cols="11"
            rows="6"
            wrap="soft"
            placeholder={VALUES_INPUT.TEXT_OF_POST}
            className="main-text-of-post-create"
            maxLength={800}
          />
          <Button nameButton={nameButton} disabled={loading} size={sizeValue} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  loading: state.postState.loading,
});

const mapDispatchToProps = {
  createPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
