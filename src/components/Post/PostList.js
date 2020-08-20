import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className="news-block">
      {posts.map((post) => (
        <PostItem key={post.uid} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
