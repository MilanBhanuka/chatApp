import React, { useContext, useState } from 'react'
import assets from "../assets/assets";
import { useNavigate } from 'react-router-dom';
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const LeftSidebar = () => {
        const navigate = useNavigate();
        const { userData, chatData } = useContext(AppContext);

        const [user, setUser] = useState(null);
        const [showSearch, setShowSearch] = useState(false);

        const inputHandler = async (e) => {
                try {
                        const input = e.target.value;
                        if (input) {
                                setShowSearch(true);
                                const userRef = collection(db, 'users');
                                const q = query(userRef, where("username", "==", input.toLowerCase()));
                                const querySnap = await getDocs(q);
                                if (!querySnap.empty && querySnap.docs[0].data().id !== userData.id) {
                                        let userExists = false;
                                        chatData?.map((user) => {
                                                if (user.rId === querySnap.docs[0].data().id) {
                                                        userExists = true;
                                                }
                                        })
                                        if (!userExists) {
                                                setUser(querySnap.docs[0].data());
                                        }
                                } else {
                                        setUser(null);
                                }
                        } else {
                                setShowSearch(false);
                        }
                } catch (error) {
                        console.error(error);
                }
        }


        const addChat = async () => {
                const messagesRef = collection(db, 'messages');
                const chatsRef = collection(db, 'chats');
                try {
                        const newMessageRef = doc(messagesRef);
                        await setDoc(newMessageRef, {
                                createAt: serverTimestamp(),
                                messages: []
                        });
                        await updateDoc(doc(chatsRef, user.id), {
                                chatsData: arrayUnion({
                                        messageId: newMessageRef.id,
                                        lastMessage: "",
                                        rId: userData.id,
                                        updatedAt: Date.now(),
                                        messageSeen: true
                                })
                        })

                        await updateDoc(doc(chatsRef, userData.id), {
                                chatsData: arrayUnion({
                                        messageId: newMessageRef.id,
                                        lastMessage: "",
                                        rId: user.id,
                                        updatedAt: Date.now(),
                                        messageSeen: true
                                })
                        })
                } catch (error) {
                        toast.error(error.message);
                        console.error(error);
                }
        }

        return (
                <div className='bg-blue-950 absolute text-white h-full rounded-l-lg'>
                        <div className='p-5'>
                                <div className='flex justify-between items-center'>
                                        <img src={assets.logo} alt="logo" className='max-w-36' />
                                        <div className='menu relative group'>
                                                <img src={assets.menu_icon} alt="menu" className='max-h-5 opacity-50 cursor-pointer ' />
                                                <div className='hidden absolute z-50 bg-blue-900 p-2 rounded-lg group-hover:flex flex-col w-28'>
                                                        <p onClick={() => navigate('/profile')}>Edit Profile</p>
                                                        <hr className='border-t-2 my-2 border-white' />
                                                        <p>Logout</p>
                                                </div>
                                        </div>
                                </div>
                                <div className='flex bg-blue-900 items-center justify-center gap-2 p-2 mt-2 rounded-lg'>
                                        <img src={assets.search_icon} alt="search" className='max-h-5' />
                                        <input onChange={inputHandler} type="text" placeholder='Search ...' className=' bg-transparent border-none flex w-full ' />
                                </div>
                        </div>
                        <div className='flex flex-col h-3/4 overflow-y-scroll'>
                                {showSearch && user ? (
                                        <div onClick={addChat} className='flex items-center gap-2 p-2 text-sm hover:bg-blue-700 h-14'>
                                                <img src={user.avatar} alt="profile" className='w-9 rounded-full' />
                                                <div className='flex flex-col'>
                                                        <p>{user.name}</p>
                                                        <span className='text-xs opacity-50'>{user.bio}</span>
                                                </div>
                                        </div>
                                ) : (
                                        chatData && Array.isArray(chatData) && chatData.length > 0 ? (
                                                chatData.map((item, index) => (
                                                        <div key={index} className='flex items-center gap-2 p-2 text-sm hover:bg-blue-700 h-14'>
                                                                <img src={item.userData.avatar} alt="profile" className='w-9 rounded-full' />
                                                                <div className='flex flex-col'>
                                                                        <p>{item.userData.name}</p>
                                                                        <span className='text-xs opacity-50'>{item.lastMessage}</span>
                                                                </div>
                                                        </div>
                                                ))
                                        ) : (
                                                <p className='text-center mt-5'>No chats available</p>
                                        )
                                )}

                        </div>
                </div>
        )
}

export default LeftSidebar;
