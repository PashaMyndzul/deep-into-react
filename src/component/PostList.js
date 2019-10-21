import React, { Fragment , useState, useEffect } from 'react';
import {Post} from './PostListItem';


export function PostList() {
    const posts = [];
    return (
        <div>
            {posts.map(post => 
            <Post {...post}/>)}
    
        </div>
            )
}



   
    
   