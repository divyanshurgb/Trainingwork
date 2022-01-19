// When to useEffect - when anytime you need a side effect, when variable change, props change, state change, components mounts, unmounts, etc.
import React, { useState, useEffect } from 'react'

export default function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  console.log('render')

  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('return from resource changed')
    }
  }, [resourceType])

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourceType])

  return ( 
  <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item => {
      return <pre>{JSON.stringify(item)}</pre>
    })}
  </>
  )
}

// import React, { useState, useEffect } from 'react'

// export default function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }

//   }, [])

// return ( 
//     <div>  {windowWidth}  </div>
//   )
// }

