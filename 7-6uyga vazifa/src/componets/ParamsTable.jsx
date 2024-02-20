import React from 'react'

const ParamsTable = () => {
  return (
   <div className='mt-4'>
    <h3 className='text-gray-500'>Query Params</h3>
    <table className='border  border-state-400 border-collapse w-full'>
        <thead>
            <tr>
                <th className='border border-state-300'></th>
                <th className='border border-state-300'>Key</th>
                <th className='border border-state-300'>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-state-300'></td>
                <td className='border border-state-300'>Title</td>
                <td className='border border-state-300'>Iphone</td>
            </tr>
        </tbody>
    </table>

   </div>
  )
}

export default ParamsTable