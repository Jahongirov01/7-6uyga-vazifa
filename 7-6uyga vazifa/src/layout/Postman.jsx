import React from 'react'
import PostmanForm from '../componets/PostmanForm'
import PostmanTabs from '../componets/PostmanTabs'
import PostmanResponse from '../componets/PostmanResponse'
import ParamsTable from '../componets/ParamsTable'

const Postman = () => {
  return (
    <div className='p-4'>
        <input defaultValue={"New request"} className='font-semibold'  />
        <PostmanForm/>
        <PostmanTabs/>
        <ParamsTable/>
        <PostmanResponse/>
    </div>
  )
}

export default Postman