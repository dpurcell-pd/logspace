import React from "react";

export default function Post({ post, image }) {
  const HEADER = {
    textAlign: "center",
  };
  const IMAGE = {
    height: "250px",
    width: "250px",
  };
  const LINK = {
    textDecoration: "none",
  };

  const DISPLAY_IMAGE = () => {
    if (JSON.stringify(image.image) !== '{}') {
      return (
        <img
          style={IMAGE}
          src={`data:${
            image.image.contentType
          };base64,${image.image.data.toString("base64")}`}
          alt={`${image.name}`}
        />
      );
    }
  };

  return (
    <div>
      <h2 style={HEADER}>LogSpace</h2>
      <p>{post.title}</p>
      <p>{post.text}</p>
      {DISPLAY_IMAGE()}
      <br />
      <a style={LINK} href={`/post/${post.id}/edit`}>Edit Post</a>
      <br /> <br />
      <form  method ="POST" action={`/post/${post.id}?_method=DELETE`}>      
        <input type="submit" value="Delete Post" />   
      </form>
      <br /> <br />
      <a style={LINK} href="/">
        ⬅ Back
      </a>
    </div>
  );
}
