import React from "react";
import PostsLayout from "./PostsLayout";
import PostForm from "../postform/PostForm";
import SearchBox from "../searchbox/SearchBox";

const FeedLayout = ({ posts }) => {
  return (
    <div className="page-contentFeed">
      <SearchBox />
      <PostsLayout posts={posts} />
      <div className="post-card">
        <PostForm />
      </div>
    </div>
  );
};

export default FeedLayout;
