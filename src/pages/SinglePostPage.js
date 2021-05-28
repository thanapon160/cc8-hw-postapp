/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../utilities/posts'

function SinglePostPage() {
    const [post, setPost] = useState({});
    let params = useParams();
    const { posts } = usePosts();

    useEffect(() => {
        async function getPostById() {
            let response = await fetch('http://localhost:8000/posts/' + params.postId)
            let data = await response.json();
            console.log(data)
            setPost(data.data)
        }
        getPostById();
    }, [])
    console.log('params: ', params);
    return (
        <div>
            <div className='postapp-header'>
                <h1>Single Post Page</h1>
            </div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>

            <hr />
            <div>
                <h1>Post List</h1>
                {posts.map((post, index) => {
                    return <h1 key={index}>{post.title}</h1>;
                })}
            </div>
        </div>
    )
}

export default SinglePostPage