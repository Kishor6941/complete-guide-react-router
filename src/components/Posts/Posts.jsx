import React, { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { FixedSizeList as List } from "react-window";

import "./Posts.css"
const Posts = () => {
  let {posts} = useContext(PostsContext);

  const Row = ({ index, style }) => {
    const post = posts[index];
    return (
      <div style={style} className="post-container">
        <h2>{post.title}</h2>
      </div>
    );
  };

   return (
    <List
      height={600}
      itemCount={posts.length}
      itemSize={100}
      width={1300}
    >
      {Row}
    </List>
  );
};

export default Posts;
