/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import { useCounter } from '../contexts/counter';
import { usePosts } from '../utilities/posts';
import { useSelector } from 'react-redux'

function HomePage() {
    let history = useHistory()
    const { state } = useCounter();
    const { posts, isError, handleDeletePost, isLoading } = usePosts();

    function handleAddPostClick() {
        history.push("/addpost")
    }

    function handleEditPost(postId) {
        console.log('Edit Post ID: ', postId)
    }

    return (
        <div>
            <div className='postapp-header'>
                <h1
                    css={css`color: rgb(124,255,67);
                font-size: 100px;
        `}
                >Post App</h1>
                <Button onClick={handleAddPostClick}>Add post</Button>
                {/* <StyledButton primary={false} onClick={handleAddPostClick}>Add post</StyledButton> */}

            </div>
            <div className='post-list-container'>
                <div className='post-list'>
                    {isLoading && <h1>Loading...</h1>}
                    {isError && <h1>Something went wrong Please try again tmr.</h1>}
                    {posts.map((post) => {
                        return (
                            <div key={post.id} className='post'>
                                <h4 onClick={function () { history.push("/post/" + post.id) }}>Title: {post.title}</h4>
                                <p>{post.content}</p>
                                <div className='post-footer'>
                                    <span>Author: John</span>
                                    <div className='button'>
                                        <Button onClick={function () { history.push("/editpost/" + post.id) }}>Edit</Button>
                                        <Button onClick={() => handleDeletePost(post.id)}>Delete</Button>
                                        {/* <StyledButton primary onClick={function () { handleEditPost(post.id) }}>Edit</StyledButton>
                                        <StyledButton primary={false} onClick={function () { handleDeletePost(post.id) }}>Delete</StyledButton> */}
                                        {/* <button className='edit-post-button'>Edit</button>
                    <button className='delete-post-button'>Delete</button> */}
                                    </div>
                                </div>
                            </div>)
                    })
                    }

                </div>
            </div>
            <h1>Counter :{state.counter}</h1>
        </div>
    )
}

export default HomePage;