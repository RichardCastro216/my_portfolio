import React from 'react';
import './header.css'

function Heading1(props) {
  return (
    <div className='title-top'>
        <h1>{props.content}</h1>
    </div>
  )
}

export default Heading1