import React from 'react'
import "../styles/Post.css"

export default function Post({ title, content }) {
    return(
        
                <div className='card' id='post-card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{content}</p>
                    </div>
                </div>
 
    )

}