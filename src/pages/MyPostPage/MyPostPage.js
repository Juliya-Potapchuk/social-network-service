import React from "react";
import PostForm from "../../components/Forms/PostForm/PostForm";
import withAuthorization from "../../components/Session/withAuthorization";
import "./style.scss";

const MyPostPage = () => {
  return (
    <div className="wrapper-create-post-page">
      <PostForm />
    </div>
  );
};

export default withAuthorization(MyPostPage);
