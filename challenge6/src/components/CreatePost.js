import React from 'react'

export default function CreatePost( { postTitle, postContent, savePost}) {
    return(
        <div className='container text-center '>
            <h4>Crear Post</h4>
            <form onSubmit={savePost}>
                <div className='mb-3'>
                    <label className='form-label col-md-4'>
                        <input  type='text' 
                                placeholder='Ingresar un título' 
                                required
                                onChange={postTitle}
                                name='title'
                                className='form-control'
                        />
                    </label>
                </div>
                <div className='mb-3'>
                    <label className='form-label col-md-4'>
                        <textarea   type='text'
                                    placeholder='Escriba una historia'
                                    required
                                    onChange={postContent}
                                    name='content'
                                    className='form-control'
                        />
                    </label>
                </div>
                <button className='btn btn-outline-primary' type='submit'>Guardar</button>
            </form>
        </div>
    )
}