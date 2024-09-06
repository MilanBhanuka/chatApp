import React, { useState } from 'react'
import assets from "../assets/assets";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className="relative h-screen  bg-background   flex items-center justify-start text-start">
      <img src={assets.background} alt="background" className="absolute  w-full h-screen  object-cover bg-repeat" />
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="grid grid-cols-2 items-center justify-center h-full gap-10 mx-">
          <div className="flex flex-col items-center justify-center w-full h-96 rounded-lg shadow-lg">
            <img src={assets.logo_big} alt="logo" className="" />
          </div>
          <div className="flex flex-col items-center justify-center h-96 rounded-lg shadow-lg ">
            {/* sign up form */}
            <form className="login-form justify-center items-center">
              <h1 className="flex text-2xl font-bold text-white w-full ">{currState}</h1>
              {currState === "Sign Up"?<input type="text" placeholder="Username" className="w-3/4 h-12 mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" required/>:null}
              <input type="email" placeholder="Email" className="w-3/4 h-12 mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" required/>
              <input type="password" placeholder="Password" className="w-3/4 h-12 mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" required/>
              <button className="w-3/4 h-12 mt-4 bg-blue-400 text-white rounded-lg focus:outline-none">{currState === "Sign Up"?"Create Account":"Login Now"}</button>
              <div className="flex items-center justify-between w-3/4 mt-4">
                {
                  currState === "Sign Up"?
                  <><input type="checkbox" className="h-4 w-4" /><p className="text-white text-sm">Agree to the terms and conditions</p></>
                  :null
                }
              </div>
              <div className="flex items-center justify-between w-3/4 mt-4">
                {
                  currState === "Sign Up"
                  ?<p className="text-white">Already have an account?<span onClick={()=>setCurrState("Login")} className="text-blue-400 cursor-pointer ml-4">Login</span></p>
                  :<p className="text-white">Create an account<span onClick={()=>setCurrState("Sign Up")} className="text-blue-400 cursor-pointer ml-4">Sign Up</span></p>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login