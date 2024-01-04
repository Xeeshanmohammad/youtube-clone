import React from 'react'

function ChatMessage({name, message}) {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
          className="h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user"
        />
        <span className='mx-2 font-bold'>{name}</span>
        <span className='mx-2'>{ message}</span>
    </div>
  )
}

export default ChatMessage