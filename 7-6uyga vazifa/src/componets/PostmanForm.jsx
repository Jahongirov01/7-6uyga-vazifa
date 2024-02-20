import React from 'react'

const PostmanForm = () => {
  return (
   <form className='mt-4 flex gap-2'>
    <div className=' border  rounded-md flex-1 flex gap-2'>
        <select>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="PATCH">PATCH</option>
        </select>
        <input type="text"  className='border-l p-2 flex-1' placeholder='enter a url  or parse  text'/>
    </div>
    <button className='py-2 px-4 bg-blue-600 text-white rounded-md'>Send</button>
   </form>
  )
}

export default PostmanForm