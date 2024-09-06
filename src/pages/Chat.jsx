import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import ChatBox from '../components/ChatBox'
import RightSidebar from '../components/RightSidebar'


const Chat = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-screen flex justify-center items-center overflow-hidden ">
      <div className='w-11/12 max-w-5xl h-3/4 bg-white rounded-lg grid grid-cols-4'>
        <div className='col-span-1 '>
          <LeftSidebar/>
        </div>
        <div className='col-span-2'>
          <ChatBox/>
        </div>
        <div className='col-span-1'>
          <RightSidebar/>
        </div>
      </div>
    </div>
  )
}

export default Chat
