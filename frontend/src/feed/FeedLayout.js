import React from "react";
import PostsLayout from "./PostsLayout";
import PostForm from "../postform/PostForm";
import SearchBox from "../searchbox/SearchBox";

const FeedLayout = ({ posts }) => {
  return (
    <>
      <SearchBox />
      <PostsLayout posts={posts} />
      <div className="post-card">
        <PostForm />
      </div>
    </>
  );
};

export default FeedLayout;
