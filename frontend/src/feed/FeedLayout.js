import React from "react";
import PostsLayout from "./PostsLayout";
import PostForm from "../postform/PostForm";

const FeedLayout = ({ posts }) => {
  return (
    <div className="page-contentFeed">
      <PostsLayout posts={posts} />
      <div className="post-card">
        <PostForm />
      </div>
    </div>
  );
};

export default FeedLayout;
