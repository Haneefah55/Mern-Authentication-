import toast from 'react-hot-toast';
import { motion } from "motion/react"
import { Loader } from "lucide-react"
import { useState } from "react"

import { Link, useNavigate } from 'react-router'
import { useAuthStore } from "../store/authStore.js"
const Settings = ({ ...user }) =>{
  const navigate = useNavigate()
  
  const [isVisible, setIsVisible] = useState(false)
  const { deleteUser, isLoading, error } = useAuthStore()
  
  const userId = user._id
  
  const handleVisibility = () =>{
    
    setIsVisible(true)
      
  }
  
  const handleCancel = () =>{
    setIsVisible(false)
  }
  
  const handleDelete = async()  =>{
    
    
    await deleteUser(userId)
    navigate("/")
    toast.success("Account deleted successfully ")
    
  }
  
  
  return(
    
    <motion.div 
      className= " flex relative flex-col items-center p-4 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl z-40 font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center">Settings
      </h2> 
      <div className="bg-transparent backdrop-filter pt-2 px-2 w-[250px] h-[200px] border-2 backdrop-blur-xl shadow-xl overflow-hidden">
        
        <div className="p-2 mb-3 text-xl">
          
          <Link to= "/change-password" className="hover:text-fuchsia-300 text-purple-800 block font-semibold"
          >
            Change password
          </Link>
          <button 
            className="hover:text-fuchsia-300 text-purple-800 bg-transparent outline-none block font-semibold" 
            onClick={handleVisibility}
          >
            Delete account
          </button>
                
                
        </div>
      </div>
      <motion.div className={` absolute bg-gray-800 bg-opacity-50 backdrop-blur-xl backdrop-filter top-20  ${isVisible ? "flex" : "hidden"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 flex flex-col items-center justify-center">
          <p className="text-gray-300 text-center text-md">Are you sure you want to delete your account?
          </p>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <div className=" flex gap-4 mt-4 justify-center items-center">
            <button 
              className="bg-gradient-to-r from-purple-300 to-fuchsia-200 px-3 py-2 hover:bg-none hover:border-2"
              onClick={handleDelete}
              disabled={isLoading}
            >
              
              { isLoading ? <Loader className=" animate-spin mx-auto text-fuchsia-300" size={24} /> : "Delete"}
            </button>
            <button 
              className="bg-gradient-to-r from-purple-300 to-fuchsia-200 px-3 py-2 hover:bg-none hover:border-2 "
              onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
        
      </motion.div>
    </motion.div>
  )
}
export default Settings