import React, { useState } from 'react'
import { getPosts, setPost } from '../services/PostService';

import '../styles/AllPost.css'
import CreatePost from './CreatePost';
import Post from './Post'


export default function AllPost() {
   
    const [isCreated, setIsCreated] = useState(false)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ allPost, setAllPost] = useState([])

    const postTitle = event =>{
        setTitle(event.target.value);
    }

    const postContent = event =>{
        setContent(event.target.value)
    }
    
    const savePost = event => {
        event.preventDefault();
        setPost( title, content).then( (data) => data);
        onCreate()
    }
   
    const onCreate = () => {
        setIsCreated(!isCreated)
        getPosts().then((data) => setAllPost(data))
    }

    const onShow = () => {
        getPosts().then((data) => setAllPost(data))
    }

    if(isCreated) {
        return(
            <div className='container text-center ' id='allpost-container'>
                <h3>Escribir una Historia</h3>
                    <CreatePost postTitle={postTitle}
                                postContent={postContent}
                                savePost={savePost}
                    />
            </div>
        )
    } else {
        return(
            <div className='container text-center ' id='allpost-container'>
                <h3>Historias</h3>
                <div className='row' >            
                    {allPost.map(post => (
                        <div className="col-sm-4"><Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            /></div>
                    ))}
                </div>
                <br/>
                <div >
                    <button className='btn btn-outline-primary' id='allpost-button' onClick={onCreate}>Agregar una historia</button>
                    <button className='btn btn-outline-primary' id='allpost-button' onClick={onShow}>Ver todas las historias</button>
                </div>
            </div>
        )
    }
}