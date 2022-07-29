import React from 'react'

export default function CreatePost( { postTitle, postContent, savePost}) {
    return(
        <div>
            <h2>Crear Post</h2>
            <form onSubmit={savePost}>
                <fieldset>
                    <label>
                        <input  type='text' 
                                placeholder='Ingresar un título' 
                                required
                                onChange={postTitle}
                                name='title'
                        />
                        <br/>
                        <br/>
                    </label>
                    <label>
                        <textarea   type='text'
                                    placeholder='Escriba una historia'
                                    required
                                    onChange={postContent}
                                    name='content'
                        />
                        <br/>
                        <br/>
                        <button type='submit'>Guardar</button>

                    </label>
                </fieldset>
            </form>
        </div>
    )
}