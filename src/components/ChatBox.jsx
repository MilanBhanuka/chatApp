import React from 'react'
import assets from "../assets/assets";

const ChatBox = () => {
  return (
    <div className='h-3/4 bg-slate-200 relative'>
      <div className='flex px-3 py-2 items-center justify-between border-b-2 border-blue-950 bg-blue-200'>
        <div className='flex items-center gap-2'>
          <img src={assets.profile_img} alt="profile" className='w-10 rounded-full' />
          <div className='flex flex-col'>
            <p>John Doe</p><img src={assets.green_dot} alt="online" className='w-3' />
          </div>
        </div>
        <img src={assets.help_icon} alt="menu" className='max-h-5 opacity-50' />
      </div>


      <div className='h-5/6 pb-3 overflow-y-scroll  flex flex-col-reverse px-2'>
        <div className='flex items-end justify-end gap-2 py-2'>
          <p className='bg-blue-900 p-2 max-w-xs text-white rounded-l-xl rounded-tr-xl mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
          <div>
            <img src={assets.profile_img} alt="profile" className='w-10 rounded-full' />
            <p className='text-xs'>2.30 PM</p>
          </div>
        </div>


        <div className='flex items-end justify-end gap-2 py-2'>
          <img src={assets.pic1} alt="pic" className='w-56 mb-4 rounded-xl' />
          <div>
            <img src={assets.profile_img} alt="profile" className='w-10 rounded-full' />
            <p className='text-xs'>2.30 PM</p>
          </div>
        </div>
    



        <div className='flex items-end justify-end gap-2 py-2 flex-row-reverse'>
          <p className='bg-blue-900 p-2 max-w-xs text-white rounded-r-xl rounded-tl-xl mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
          <div>
            <img src={assets.profile_img} alt="profile" className='w-10 rounded-full' />
            <p className='text-xs'>2.30 PM</p>
          </div>
        </div>
        
        
      </div>



      <div className='flex items-center gap-3 p-3 bg-white absolute bottom-0 right-0 left-0'>
        <input type="text" placeholder="Type a message" className='w-full bg-transparent' />
        <input type="file" id='image' accept='image/*' className='hidden' />
        <label htmlFor='image' className=''>
          <img src={assets.gallery_icon} alt="image" className='w-5' />
        </label>
        <img src={assets.send_button} alt="send" className='w-6' />
      </div>
    </div>
  )
}

export default ChatBox
