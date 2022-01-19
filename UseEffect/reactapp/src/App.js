// import React, { useState, useEffect } from 'react'

// // useeffect does sideeffect whenever something happens
// export default function App() {
//   const [resourceType, setResourceType] = useState('posts')
//   const [items, setItems] = useState([])
//   console.log('render')

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourceType])

//   return ( 
//   <>
//     <div>
//       <button onClick={() => setResourceType('posts')}>Posts</button>
//       <button onClick={() => setResourceType('posts')}>Users</button>
//       <button onClick={() => setResourceType('posts')}>Comments</button>
//     </div>
//     <h1>{resourceType}</h1>
//     {items.map(item => {
//       return <pre>{JSON.stringify(item)}</pre>
//     })}
//   </>
//   )
// }

import React, { useState, useEffect } from 'react'

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

return ( 
    <div>  {windowWidth}  </div>
  )
}

