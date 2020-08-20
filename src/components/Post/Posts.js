import React, { Component } from "react";
import { connect } from "react-redux";
import PostList from "./PostList";
import { getPosts } from "../../redux/actions/actionsPosts";
import { LoaderSpinner } from "../Loader/Loader";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPosts: [],
    };
  }

  componentDidMount = () => {
    const { getPosts, posts, orderNewsFirstNew } = this.props;
    getPosts();
    const filteredPosts = orderNewsFirstNew ? posts : posts.reverse();
    this.updateStateFromProps(filteredPosts);
  };

  componentDidUpdate = (prevProps) => {
    const { posts, orderNewsFirstNew } = this.props;
    const needUpdatePosts =
      JSON.stringify(posts) !== JSON.stringify(prevProps.posts);

    if (needUpdatePosts || orderNewsFirstNew !== prevProps.orderNewsFirstNew) {
      const filteredPosts = orderNewsFirstNew ? posts : posts.reverse();
      this.updateStateFromProps(filteredPosts);
    }
  };

  updateStateFromProps = (filteredPosts) => {
    this.setState({ filteredPosts });
  };

  render() {
    const { havePosts, loading } = this.props;
    const { filteredPosts } = this.state;
    const style = { position: "fixed", top: "calc(50vh - 45px)" };

    return (
      <>
        {!loading && !havePosts ? (
          <div>There are no posts ...</div>
        ) : (
          <PostList posts={filteredPosts} />
        )}
        {loading && <LoaderSpinner style={style} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orderNewsFirstNew: state.settingsState.orderNewsFirstNew,
  posts: state.postState.posts,
  loading: state.postState.loading,
});

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);