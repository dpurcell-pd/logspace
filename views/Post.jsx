import React from "react";

export default function Post({ post, image }) {
  const HTML = {
    backgroundImage: "url(/background.jpg)",    
  };
  const HEADER = {
    textAlign: "center",
    fontStyle: "italic",
    textDecoration: "underline",
    textShadow: "3px 2px 3px blue",
    color: "forestgreen",
  };
  const LINK = {
    textDecoration: "none",
    color: "white",
    listStyleType: "square",
    textShadow: "3px 2px 3px blue", 
  };

  const IMAGE = {
    height: "250px",
    width: "250px",
  };
  const TEXT = {
    color: "white",
    textShadow: "3px 2px 3px blue", 
  };

  const DISPLAY_IMAGE = () => {
    if (JSON.stringify(image.image) !== "{}") {
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
    <html style={HTML}>
      <div>
        <h2 style={HEADER}>LogSpace</h2>
        <p style={TEXT}>{post.title}</p>
        <p style={TEXT}>{post.text}</p>
        {DISPLAY_IMAGE()}
        <br />
        <a style={LINK} href={`/post/${post.id}/edit`}>
          Edit Post
        </a>
        <br /> <br />
        <form method="POST" action={`/post/${post.id}?_method=DELETE`}>
          <input type="submit" value="Delete Post" />
        </form>
        <br /> <br />
        <a style={LINK} href="/">
          ⬅ Back
        </a>
      </div>
    </html>
  );
}
