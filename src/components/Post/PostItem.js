import React from "react";
import { connect } from "react-redux";
import WrapperWithIcon from "../WrapperWithIcon/WrapperWithIcon";
import DeletePostButton from "./Buttons/DeletePostButton";
import "./style.scss";

const PostItem = ({ authUser, post }) => {
  const sizeWrapper = 500;

  return (
    <li>
      <WrapperWithIcon size={sizeWrapper}>
        <div className="title-post">
          <p>&quot;{post.title}&quot;</p>
        </div>

        <textarea
          className="main-text-post"
          readOnly="readonly"
          value={post.mainText}
        />

        <div className="wrapper-date-delete-block">
          <span className="date-post">{post.date}</span>
          {authUser.uid === post.userId && <DeletePostButton post={post} />}
        </div>
        <span className="name-user-post">{post.userName}</span>
      </WrapperWithIcon>
    </li>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps, null)(PostItem);
