import React from 'react'


export default function Home({posts}) {
    const HEADER = {
        textAlign: "center"
    }

    const LINK = {
        textDecoration: 'none',       
    }

    const POSITION = {
        position: 'absolute',
        bottom: '0',
        margin: '50%',
        width: '100%'
    }

    if (posts) {
        return (
            <div>
                <h2 style={HEADER}>LogSpace</h2>
                <p><a style={LINK} href="/upload">Create New Post</a></p>
                {posts.map((post, id) => {
                   <li key={id}>
                    <a 
                        style={LINK} 
                        href={`/post/${id}`}>{`${post.createdAt} : ${post.title}`}</a>
                   </li>
                })}           
                <p><a style={Object.assign({}, LINK, POSITION)} href="#top">⬆Return to Top⬆</a></p>            
            </div>
        )
    }
    
}

