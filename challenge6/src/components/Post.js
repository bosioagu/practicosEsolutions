import React from 'react'

export default function Post({ title, content }) {
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )

}