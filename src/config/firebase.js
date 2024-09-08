import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCB1ZLHTE577Zi0sNA3JtYcC7N45ytCd2k",
  authDomain: "chatapp-65c82.firebaseapp.com",
  projectId: "chatapp-65c82",
  storageBucket: "chatapp-65c82.appspot.com",
  messagingSenderId: "690962478407",
  appId: "1:690962478407:web:8ba97c93a9dd357061c862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
        try {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                const user = res.user;
                await setDoc(doc(db,"users", user.uid), {
                        id: user.uid,
                        username: username.toLowerCase(),
                        email,
                        name:"",
                        avatar:"",
                        bio:"Hey there! I am using ChatApp.",
                        lastSeen: Date.now(),
                });
                await setDoc(doc(db, "chats", user.uid), {
                        chatData: [],
                });
                toast.success("Account created successfully");
        } catch (error) {
                console.error(error);
                toast.error(error.code.split("/")[1].split("-").join(" "));
        }
};

const login = async (email, password) => {
        try {
                await signInWithEmailAndPassword(auth, email, password);
                toast.success("Logged in successfully");
        } catch (error) {
                console.error(error);
                toast.error(error.code.split("/")[1].split("-").join(" "));
        }
};

const logout = async () => {
        try {
                await signOut(auth);
        } catch (error) {
                console.error(error);
                toast.error(error.code.split("/")[1].split("-").join(" "));    
        }
};

export { signup,login,logout,auth,db };