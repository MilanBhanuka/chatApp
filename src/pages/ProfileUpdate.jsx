import React, { useContext, useEffect, useState } from 'react'
import assets from "../assets/assets";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import upload from '../lib/Upload';
import { AppContext } from '../context/AppContext';

const ProfileUpdate = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState(false);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [uid, setUid] = useState('');
  const [prevImage, setPrevImage] = useState('');
  const {setUserData} = useContext(AppContext);

  const profileUpdate = async (event) =>{
    event.preventDefault();
    try {
        if(!prevImage && !image){
          toast.error('Please upload an image');
        }
        const docRef = doc(db, 'users', uid);
        if(image){
          const imgUrl = await upload(image);
          setPrevImage(imgUrl);
          await updateDoc(docRef,{
            avatar: imgUrl,
            name: name,
            bio: bio
          })
        }else{
          await updateDoc(docRef,{
            name: name,
            bio: bio
          })
        }
        const snap = await getDoc(docRef);
        setUserData(snap.data());
        toast.success('Profile updated successfully');
        navigate('/chat');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        setUid(user.uid);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.data().name){
          setName(docSnap.data().name);
        }
        if(docSnap.data().bio){
          setBio(docSnap.data().bio);
        }
        if(docSnap.data().avatar){
          setPrevImage(docSnap.data().avatar);
        }
      }else{
        navigate('/');
      }
    })
  })

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-400 to-blue-500 items-center justify-center flex '>
      <div className='grid grid-cols-3 bg-white justify-center items-center w-5/6  lg:w-1/2 rounded-lg py-3 gap-3 px-3'>
        <div className='col-span-2 flex w-full '>
          <form onSubmit={profileUpdate} className='flex flex-col gap-5 p-1 w-full items-center  '>
            <h3 className='text-xl font-bold text-blue-600'>Update Profile</h3>
            <label htmlFor='avatar' className='flex flex-col items-center gap-1 text-sm'>
              <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' className='hidden' />
              <img src={image?URL.createObjectURL(image):assets.avatar_icon} alt='avatar' className='w-20 h-20 rounded-full object-cover' />
              Upload profile image
            </label>
            <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder='Name' required className='w-full bg-blue-100 p-1 rounded-lg' />
            <textarea onChange={(e)=>setBio(e.target.value)} value={bio} placeholder='Bio' required className='w-full bg-blue-100 p-1 rounded-lg' />
            <button type='submit' className='bg-blue-600 hover:bg-blue-900 w-1/4 text-white rounded-full py-2'>Save</button>
          </form>
        </div>
        <div className='col-span-1 flex justify-center items-center w-full  '>
          <img src={image?URL.createObjectURL(image) :prevImage?prevImage:assets.logo_icon} alt='logo' className='w-36 h-36 rounded-full object-cover'  />
        </div>
      </div>
    </div>
  )
}

export default ProfileUpdate
