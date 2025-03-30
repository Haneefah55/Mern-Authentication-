
import toast from 'react-hot-toast';
import { motion } from "motion/react"
import { useState } from 'react'
import { Lock, Loader, Eye, EyeOff } from "lucide-react"
import { useAuthStore } from "../store/authStore.js"
import { Link } from 'react-router'
import { useNavigate, useParams } from 'react-router'




const ChangePassword = ({ ...user }) =>{
  const [isVisibleA, setIsVisibleA] = useState(false)
  const [isVisibleB, setIsVisibleB] = useState(false)
  const [isVisibleC, setIsVisibleC] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmError, setConfirmError] = useState(null)
  
  const { changePassword, isLoading, error, isAuthenticated } = useAuthStore()
  const userId = user._id
  const navigate = useNavigate()
  
  const [show, setShow] = useState(false)
  
  const handleShow = () =>{
   setShow(!show)
   navigate("/login")
  }
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(newPassword !== confirmPassword){
      setConfirmError("Password does not match")
      
      return
    }
    
    
    if(!user.isVerified && !isAuthenticated ){
        
      setShow(true)
      return 
    }
      
    await changePassword(oldPassword, newPassword, userId)
    toast.success("Password changed successfully")
      
    navigate("/account")
    
    
    
  }
  
  
  
  return(
    <motion.div
      className="w-md sm:max-w-md sm:w-sm  bg-gray-800 bg-opacity-20 backdrop-filter backdrop-filter flex justify-center backdrop-blur-xl rounded-xl shadow-xl overflow-hidden relative" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-5">
        <h2 className="text-xl text-transparent bg-gradient-to-r font-bold from-purple-800 to-fuchsia-800  mb-3 mt-3 bg-clip-text text-center"> Change Password
        </h2>
        
        <form onSubmit={handleSubmit} >
           <div className="relative mb-4">
            <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <Lock className="size-5 text-fuchsia-400" />
            </div>
            <input
              type={!isVisibleA ? "password" : "text" }
              placeholder={"Enter old password"}
              value={oldPassword}
              onChange={(e) => (setOldPassword(e.target.value))}
              className="w-full pr-3 py-2 pl-10 bg-gray-200 bg-opacity-50 rounded-lg border-2 border-fuchsia-400 outline-none focus:border-fuchsia-600 text-gray-900 placeholder:text-gray-900 transition duration-200"
            />
            <div 
              className=" absolute inset-y-0 right-0 flex items-center outline-none border-none pr-3 "
              onClick={() => (setIsVisibleA(!isVisibleA))}
            >
              {!isVisibleA ? <EyeOff className="size-5 text-fuchsia-400" /> : <Eye className="size-5 text-fuchsia-400" /> }
            
            </div>
    
          </div>
          
          <div className="relative mb-4">
            <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <Lock className="size-5 text-fuchsia-400" />
            </div>
            <input
              type={!isVisibleB ? "password" : "text" }
              placeholder={"Enter new password"}
              value={newPassword}
              onChange={(e) => (setNewPassword(e.target.value))}
              className="w-full pr-3 py-2 pl-10 bg-gray-200 bg-opacity-50 rounded-lg border-2 border-fuchsia-400 outline-none focus:border-fuchsia-600 text-gray-900 placeholder:text-gray-900 transition duration-200"
            />
            <div 
              className=" absolute inset-y-0 right-0 flex items-center outline-none border-none pr-3 "
              onClick={() => (setIsVisibleB(!isVisibleB))}
            >
              {!isVisibleB ? <EyeOff className="size-5 text-fuchsia-400" /> : <Eye className="size-5 text-fuchsia-400" /> }
            
            </div>
    
          </div>
          
           <div className="relative mb-4">
            <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <Lock className="size-5 text-fuchsia-400" />
            </div>
            <input
              type={!isVisibleC ? "password" : "text" }
              placeholder={"Confirm new password"}
              value={confirmPassword}
              onChange={(e) => (setConfirmPassword(e.target.value))}
              className="w-full pr-3 py-2 pl-10 bg-gray-200 bg-opacity-50 rounded-lg border-2 border-fuchsia-400 outline-none focus:border-fuchsia-600 text-gray-900 placeholder:text-gray-900 transition duration-200"
            />
            <div 
              className=" absolute inset-y-0 right-0 flex items-center outline-none border-none pr-3 "
              onClick={() => (setIsVisibleC(!isVisibleC))}
            >
              {!isVisibleC ? <EyeOff className="size-5 text-fuchsia-400" /> : <Eye className="size-5 text-fuchsia-400" /> }
            
            </div>
    
          </div>
          {error && <p className="text-red-500 text-md">{error}</p>}
          {confirmError && <p className="text-red-500 text-md">{confirmError}</p>}
          
          <motion.button
            className="w-full py-2 px-5 mt-3 bg-gradient-to-r mb-3 from-purple-900 to-fuchsia-800 text-gray-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type= "submit"
            disabled={isLoading}
            onClick={handleSubmit}
        
          > 
            { isLoading ? <Loader className=" animate-spin mx-auto" size={24} /> : "Change Password"}
      
          </motion.button>
        
        </form>
        
        
          
      </div>
      
      <div className={`w-md sm:max-w-md absolute top-20 sm:w-sm  bg-gray-800  backdrop-filter backdrop-filter backdrop-blur-xl rounded-md flex-col items-center p-6 ${show ? "flex" : "hidden" }`}>
        <p className="text-center text-gray-200">Please login to continue</p>
        <button className="outline-none size-10 border-none p-2 mt-5 text-center bg-purple-600 text-gray-200"
          onClick={handleShow}
        >Ok
        </button>
      </div>
      
    </motion.div>
    
    
    
  )
}
export default ChangePassword