import React, { createContext, useState } from "react";

export const post = createContext();
const PostContext = (props) => {
  const [model, setmodel] = useState(false);

  return (
    <post.Provider value={{ model, setmodel }}>{props.children}</post.Provider>
  );
};

export default PostContext;
