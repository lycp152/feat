import React from "react";
import MockPosts from "./PostsLayout";
import PostForm from "../postform/PostForm";

const FeedLayout = ({ posts }) => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={posts} />
      <div className="post-card">
        <PostForm />
      </div>
    </div>
  );
};

export default FeedLayout;
