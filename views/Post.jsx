import React from "react";

export default function Post({post, image}) {
  const HEADER = {
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={HEADER}>LogSpace</h2>
      <p>{post.title}</p>
      <p>{post.text}</p>
      <img src={`data:${image.image.contentType};base64,${image.image.data.toString('base64')}`} alt="" />
      
    </div>
  );
}
