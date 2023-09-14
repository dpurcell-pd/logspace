import React from "react";

export default function Post({ post }) {
  const HEADER = {
    textAlign: "center",
  };

  const SHOW_IMAGE = () => {
    if (post.image !== undefined) {        
        return <img src={post.image} alt="post-image"></img>
    }
  }

  return (
    <div>
      <h2 style={HEADER}>LogSpace</h2>
      <p>{post.title}</p>
      <p>{post.text}</p>
      
    </div>
  );
}
