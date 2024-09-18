import { createContext, useEffect, useState } from "react";

export let PostsContext = createContext(null);

const PostContainer = ({children}) => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let res = await response.json(); 
      setPosts(res);
    } catch (error) {
      console.error(error?.message);
    }
  };

  useEffect(() => {
    getPosts()
  },[])

  let postContext = {
    posts,
  }

  return (<PostsContext.Provider value={postContext}>
    {children}
  </PostsContext.Provider>)
};

export default PostContainer