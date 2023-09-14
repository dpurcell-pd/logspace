import React from "react";

export default function Home({ posts }) {
  const HTML = {
    backgroundImage: "url(background.jpg)",
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
    textShadow: "3px 2px 3px blue",
  };
  const LIST = {
    listStyleType: "square",
  };

  return (
    <html style={HTML}>
      <div>
        <a href="/profile">
          <h2 style={HEADER}>LogSpace</h2>
        </a>
        <p>
          <a style={LINK} href="/upload">
            Create New Post
          </a>
        </p>
        {posts.map((post, id) => {
          return (
            <li style={LIST} key={id}>
              <a style={LINK} href={`/post/${post.id}`}>
                {post.createdAt.toDateString()} - {post.title}
              </a>
            </li>
          );
        })}
        {/* <p>
        <a style={Object.assign({}, LINK, POSITION)} href='#top'>
          ⬆ Return to Top ⬆
        </a>
      </p> */}
      </div>
    </html>
  );
}
