import React from 'react';
import '../index.css';
import { PostList } from "./PostList";

export function MoreButton(count,setCount) {
  
    return(
        <input className='button'  type='button' id='button' onClick={() =>setCount(count+10)} value='MoreButton'></input>
    )
    
}