import React, { useState, useEffect } from 'react'

// useeffect does sideeffect whenever something happens
export default function App() {
  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    console.log('render')
  }, [resourceType])
  
  return ( 
  <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('posts')}>Users</button>
      <button onClick={() => setResourceType('posts')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
  </>
  )
}