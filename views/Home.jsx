import React from 'react'

export default function Home() {
    const HEADER = {
        textAlign: "center"
    };

  return (
    <div>
        <h2 style={HEADER}>LogSpace</h2>
        <div>
            <form method='POST' action='/upload' encType='multipart/form-data'>
                <label htmlFor="title">Title: </label>
                <br />
                <input 
                    type="text" 
                    id='title' 
                    name='title' 
                    placeholder='Title your new post' 
                />
                <br /> <br />
                <label htmlFor="text">Create your journal entry below:</label>
                <br />
                <textarea 
                    name="text" 
                    id="text" 
                    cols="30" 
                    rows="10" 
                    placeholder='What would you like to say?'
                >
                </textarea>
                <br /> <br />
                <label htmlFor="image">Want to add an image?</label>
                <br />
                <input type='file' id='image' name='image' />
                <br /><br />
                <input type='submit' value='Create New Post'/>
            </form>            
        </div>
    </div>
  )
}

