import React, { useState } from 'react'
import Tab from './Tab'

const PostmanTabs = () => {
    const[active, setActive] = useState(0);
    const handleTAb =(index)=>{
setActive(index)
    }
  return (
    <div className='mt-4'>
        <ul className='flex gap-4'>
            <Tab id={0} title={"Params"} onClick={handleTAb} active={active === 0} />
            <Tab id={1} title={"Headers"} onClick={handleTAb} active={active === 1}/>
        <Tab id={2} title={"Body"} onClick={handleTAb} active={active === 2}/>
        </ul>
    </div>
  )
}

export default PostmanTabs