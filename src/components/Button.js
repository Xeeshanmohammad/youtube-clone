import React from 'react'

function Button({name}) {
  return (
    <div>
        <button  className='px-3 py-1 m-3 border text-center font-semibold rounded-lg bg-gray-200 '>{name}</button>
    </div>
  )
}

export default Button