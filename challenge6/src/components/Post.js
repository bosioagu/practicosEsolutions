import React from 'react'

export default function Post({ title, content }) {
    return(
        
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>{title}</h3>
                        <p className='card-text'>{content}</p>
                    </div>
                </div>
 
    )

}