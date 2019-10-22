import React, { Fragment , useState, useEffect } from 'react';
import {Post} from './PostListItem';
const API = 'https://jsonplaceholder.typicode.com/posts';

export function PostList() {
    
    const [ hasError ,setError ] =  useState( false );
    const [ loaded, setLoaded ] = useState( true );
    const [ post, setPost ] = useState( [] );
    const [count, setCount] = useState(10);
  
    useEffect( () => {
        async function fetchData() {
            const res = await fetch( API );
            res
                .json() 
                .then( res => setPost( res ) )
                .then(loaded => setLoaded(false))
                .catch( err => setError( err ) );
            };
        fetchData();
        },
        
    );
    return (
        <Fragment>
            <div> 
            { !loaded ? post.slice(0,count).map( post => 
            < Post { ...post } key={post.id}/> ) : <h3>Loading...</h3>
             }
            </div>
            <input className='button'  type='button'  onClick={() =>setCount(count+10)} value='MoreButton'></input>
            <hr/>
            <div>Has Error: {JSON.stringify(hasError)}</div>
        </Fragment>
        )
}



   
    
   