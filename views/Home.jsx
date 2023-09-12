import React from 'react'

export default function Home() {
    const header = {
        textAlign: "center"
    };

  return (
    <div>
        <h2 style={header}>LogSpace</h2>
        <div>
            <form action="">
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
                <input type="file" id="file" name="file" />
            </form>            
        </div>
    </div>
  )
}

