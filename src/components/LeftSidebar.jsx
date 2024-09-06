import React from 'react'
import assets from "../assets/assets";

const LeftSidebar = () => {
        return (
                <div className='bg-blue-950 text-white h-3/4 rounded-l-lg'>
                        <div className='p-5'>
                                <div className='flex justify-between items-center'>
                                        <img src={assets.logo} alt="logo" className='max-w-36' />
                                        <div className='menu relative group'>
                                                <img src={assets.menu_icon} alt="menu" className='max-h-5 opacity-50 cursor-pointer ' />
                                                <div className='hidden absolute z-50 bg-blue-900 p-2 rounded-lg group-hover:flex flex-col w-28'>
                                                        <p>Edit Profile</p>
                                                        <hr className='border-t-2 my-2 border-white' />
                                                        <p>Logout</p>
                                                </div>
                                        </div>
                                </div>
                                <div className='flex bg-blue-900 items-center justify-center gap-2 p-2 mt-2 rounded-lg'>
                                        <img src={assets.search_icon} alt="search" className='max-h-5' />
                                        <input type="text" placeholder='Search ...' className=' bg-transparent border-none  ' />
                                </div>
                        </div>
                        <div className='flex flex-col h-3/4 overflow-y-scroll'>
                                {Array(12).fill("").map((item,index)=>(
                                <div className='flex items-center gap-2 p-2 text-sm hover:bg-blue-700 h-14'>
                                        <img src={assets.profile_img} alt="profile" className='w-9 rounded-full' />
                                        <div className='flex flex-col'>
                                                <p>John Doe</p>
                                                <span className='text-xs opacity-50'>Hey there! I am using whatsapp.</span>
                                        </div>
                                </div>
                                ))}
                        </div>
                </div>
        )
}

export default LeftSidebar
