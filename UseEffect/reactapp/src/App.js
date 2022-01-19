import React, { useState, useEffect } from 'react'

// useeffect does sideeffect whenever something happens
export default function App() {
  const [resourceType, setResourceType] = useState('posts')
  
  console.log('render')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
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

