import React from "react";

export default function Edit({post}) {
  const HEADER = {
    textAlign: 'center',
  };

  const LINK = {
    textDecoration: 'none'
  };

  return (
    <div>
      <h2 style={HEADER}>LogSpace</h2>
      <div>
        <form method="POST" action="/upload" encType="multipart/form-data">
          <label htmlFor="title">Title: </label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={post.title}
            required
          />
          <br /> <br />
          <label htmlFor="text">Create your journal entry below:</label>
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
          <label htmlFor="image">Need to update your image?</label>
          <br />
          <input type="file" id="image" name="image" />
          <br />
          <br />
          <input type="submit" value="Update Post" />
        </form>
      </div>
      <br />
      <p><a style={LINK} href={`/post/${post.id}`}>⬅ Back</a></p>
    </div>
  );
}
