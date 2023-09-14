import React from "react";

export default function Upload() {
    const HTML = {
        backgroundImage: "url(background.jpg)",
        brightness: "40%"    
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
          <form method="POST" action="/upload" encType="multipart/form-data">
            <label style={TEXT} htmlFor="title">Title: </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title your new post"
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
              placeholder="What would you like to say?"
              required
            ></textarea>
            <br /> <br />
            <label style={TEXT} htmlFor="image">Want to add an image?</label>
            <br />
            <input type="file" id="image" name="image" />
            <br />
            <br />
            <input type="submit" value="Create New Post" />
          </form>
        </div>
        <br />
        <p>
          <a style={LINK} href="/">
            ⬅ Back
          </a>
        </p>
      </div>
    </html>
  );
}
