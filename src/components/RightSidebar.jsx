import React from 'react'
import assets from "../assets/assets";

const RightSidebar = () => {
  return (
    <div className='h-3/4 bg-blue-950 relative rounded-r-lg overflow-scroll '>
      <div className='flex flex-col pt-14 text-center max-w-xs justify-center items-center'>
        <img src={assets.profile_img} alt="profile" className='w-20 rounded-full' />
        <div className='flex items-center gap-2'>
                <h3 className='text-white'>John Doe</h3>
                <img src={assets.green_dot} alt="online" className='w-3' />
        </div>
        <p className='text-white'>Hey, I am using WhatsApp</p>
      </div>

        <hr className='border-t-2 my-7 border-blue-900' />
        <div className='flex flex-col  text-center max-w-xs justify-center items-center'>
                <h3 className='text-white mb-5'>Media</h3>
                <div className='flex gap-1 flex-wrap justify-center overflow-scroll'>
                    <img src={assets.pic1} alt="pic" className='w-20  rounded-lg' />
                    <img src={assets.pic2} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic3} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic1} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic2} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic3} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic1} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic2} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic3} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic1} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic2} alt="pic" className='w-20 rounded-lg' />
                    <img src={assets.pic3} alt="pic" className='w-20 rounded-lg' />
                </div>
        </div>        
        <button className='w-full bg-blue-900 text-white py-2 absolute bottom-0 hover:bg-blue-700'>Logout</button>
    </div>
  )
}

export default RightSidebar
