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
        console.log(allPost)
    }

    const onShow = () => {
        getPosts().then((data) => setAllPost(data))
    }
    
    if(isCreated) {
        return(
            <div>
                <h2>Escribir una Historia</h2>
                    <CreatePost postTitle={postTitle}
                                postContent={postContent}
                                savePost={savePost}
                    />
            </div>
        )
    } else {
   
    return(
        <div>
            <h2>Ver todas las Historias</h2>
            {allPost.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    />
            ))}
            <button onClick={onCreate}>Agregar una historia</button>
            <button onClick={onShow}>Ver todas las historias</button>
        </div>
    )
    }
}