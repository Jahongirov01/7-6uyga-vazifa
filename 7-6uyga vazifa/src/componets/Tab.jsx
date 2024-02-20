import React from 'react'

const Tab = ({title,onClick,active,id}) => {
  return <li onClick={ ()=>onClick(id)} className={`text-gray-500 ${active ? "text-black border-red-500":"border-transparent"} hover:text-black cursor-pointer transition-all  pb-2 border-b `}>{title}</li> 
    
  
}

export default Tab