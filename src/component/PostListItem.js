import React, {  useState, useEffect } from 'react';
import '../index.css';
const API = 'https://jsonplaceholder.typicode.com/posts';


export function Post() {
    const [ hasError ,setError ] =  useState( false );
    const [ loaded, setLoaded ] = useState( true );
    const [ post, setPost ] = useState( [] );

    useEffect( () => {
        async function fetchData() {
            const res = await fetch( API );
            res
                .json() 
                .then( res => setPost( res ) )
                .catch( err => setError( err) );
              
            };
            
        fetchData();
        }
    );
    return (
        <div className= 'post' key= 'post.id'>
             <span>"userId":{ post.userId }</span>
            <p>"title":{ post.title }></p>
            <p>"body":{ post.body }</p>
        </div>
    );
}
