import React, { useState } from 'react'
import assets from "../assets/assets";

const ProfileUpdate = () => {

  const [image, setImage] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-400 to-blue-500 items-center justify-center flex '>
      <div className='grid grid-cols-3 bg-white justify-center items-center w-5/6  lg:w-1/2 rounded-lg py-3 gap-3 px-3'>
        <div className='col-span-2 flex w-full '>
          <form className='flex flex-col gap-5 p-1 w-full items-center  '>
            <h3 className='text-xl font-bold text-blue-600'>Update Profile</h3>
            <label htmlFor='avatar' className='flex flex-col items-center gap-1 text-sm'>
              <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' className='hidden' />
              <img src={image?URL.createObjectURL(image):assets.avatar_icon} alt='avatar' className='w-20 h-20 rounded-full object-cover' />
              Upload profile image
            </label>
            <input type='text' placeholder='Name' required className='w-full bg-blue-100 p-1 rounded-lg' />
            <textarea placeholder='Bio' required className='w-full bg-blue-100 p-1 rounded-lg' />
            <button type='submit' className='bg-blue-600 hover:bg-blue-900 w-1/4 text-white rounded-full py-2'>Save</button>
          </form>
        </div>
        <div className='col-span-1 flex justify-center items-center w-full  '>
          <img src={image?URL.createObjectURL(image) :assets.logo_icon} alt='logo' className='w-52 h-52  rounded-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default ProfileUpdate
