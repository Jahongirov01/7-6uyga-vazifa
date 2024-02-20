import React from 'react'
import Requests from './layout/Requests'
import Postman from './layout/Postman'

const App = () => {
  return (
    <div className='grid grid-cols-[1fr_3fr] h-full'>
      <Requests/>
      <Postman/>
    </div>
  )
}

export default App