import React from "react";

export default function Edit({ post, image }) {
  const HTML = {
    backgroundImage: "url(/background.jpg)",
  };
  const HEADER = {
    textAlign: "center",
  };
  const LINK = {
    textDecoration: "none",
    color: "white"
  };
  const TEXT = {
    color: "white",
    textShadow: "3px 2px 3px blue", 
  };

  return (
    <html style={HTML}>
      <div>
        <h2 style={HEADER}>LogSpace</h2>
        <div>
          <form method="POST" action={`/post/${post.id}?_method=PUT`}>
            <label style={TEXT} htmlFor="title">Title: </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={post.title}
              required
            />
            <br /> <br />
            <label style={TEXT} htmlFor="text">Create your journal entry below:</label>
            <br />
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              defaultValue={post.text}
              required
            ></textarea>
            <br /> <br />
            <label style={TEXT} htmlFor="image">Need to update your image?</label>
            <br />
            <input type="file" id="image" name="image" />
            <br />
            <br />
            <input type="submit" value="Update Post" />
          </form>
        </div>
        <br />
        <p>
          <a style={LINK} href={`/post/${post.id}`}>
            ⬅ Back
          </a>
        </p>
      </div>
    </html>
  );
}
