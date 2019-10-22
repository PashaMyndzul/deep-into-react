import React from 'react';
import '../index.css';



export function Post(post) {

    return (
        <div className= 'post' >
             <span>"userId":{ post.userId }</span>
            <p>"title":{ post.title }></p>
            <p>"body":{ post.body }</p>
        </div>
    );
}
