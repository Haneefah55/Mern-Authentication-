
import toast from 'react-hot-toast';
import { motion } from "motion/react"
import { useState } from 'react'
import { Lock, Loader, MoveLeft } from "lucide-react"
import Input from "../components/Input"
import { Link } from 'react-router'
import { useNavigate, useParams } from 'react-router'




const ChangePassword = () =>{
  
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    
  }
  
  return(
    <motion.div
      className="w-xs sm:max-w-md sm:w-sm w-5/6 bg-gray-800 backdrop-filter backdrop-blur-xl rounded-xl shadow-xl overflow-hidden" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-3">
        <h2 className="text-xl text-transparent bg-gradient-to-r font-bold from-purple-500 to-fuchsia-300 mb-3 mt-3 bg-clip-text text-center"> Change Password
        </h2>
        
        <form onSubmit={handleSubmit} >
          
        </form>
          
      </div>
      
    </motion.div>
    
    
    
  )
}
export default ChangePassword