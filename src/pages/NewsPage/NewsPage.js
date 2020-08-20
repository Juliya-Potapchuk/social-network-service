import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import Posts from "../../components/Post/Posts";
import "./style.scss";
import { UpPostsButton } from "../../components/Post/Buttons/UpPostsButton";
import withAuthorization from "../../components/Session/withAuthorization";

const NewsPage = ({ posts }) => {
  const havePosts = posts.length > 0;
  return (
    <div className="news-page-wrapper">
      {havePosts && <UpPostsButton />}
      <Posts havePosts={havePosts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postState.posts,
});

export default compose(
  withAuthorization,
  connect(mapStateToProps, null)
)(NewsPage);
