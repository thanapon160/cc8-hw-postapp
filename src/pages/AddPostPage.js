/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from "@emotion/react";
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';


function AddPostPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let history = useHistory()

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }
    async function createPosts() {
        let response = await fetch('http://localhost:8000/posts/', {
            method: "POST",
            body: JSON.stringify({ title: title, content: description }),
            headers: {
                "content-type": "application/json"
            },
        });
        if (response.ok) {
            history.push("/home");
        }
    }
    console.log()
    function handleFormSubmit(event) {
        event.preventDefault()
        createPosts();
        console.log('submit')
    }

    return (
        <div>
            <div className='postapp-header'>
                <h1>Add Post Page</h1>
            </div>
            <div className='add-post-container'>
                <div className='add-post'>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <div><lable htmlFor="title">Title</lable></div>

                            <input type='text' id='title' className='title' placeholder='Enter post title' onChange={handleTitleChange} value={title}></input>
                        </div>
                        <div>
                            <div><lable htmlFor="description" >Description</lable></div>
                            <textarea id='description' onChange={handleDescriptionChange} value={description}/>
                        </div>
                        <div className='add-post-button'>
                            <Button type='submit'>Add</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPostPage