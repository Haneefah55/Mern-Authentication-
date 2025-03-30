import { motion } from "motion/react"
import { useState } from 'react'
import { Mail, Loader, MoveLeft } from "lucide-react"
import Input from "../components/Input"
import { Link } from 'react-router'
import { useAuthStore } from "../store/authStore.js"


const ForgetPassword = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

 const { forgotPassword, isLoading, error } = useAuthStore()
  
  
  
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    await forgotPassword(email)
    setIsSubmitted(true)
  }
  
  
  
  
  return(
    <motion.div 
      className="w-xs sm:max-w-md sm:w-sm w-5/6 bg-gray-800 backdrop-filter backdrop-blur-xl rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-3">
        <h2 className="text-xl text-transparent bg-gradient-to-r font-bold from-purple-500 to-fuchsia-300 mb-3 mt-3 bg-clip-text text-center"> Forgot Password
        </h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className="text-center text-xs text-gray-300 mb-4" >
              Enter your email to comfirm your account and reset your password
            </p>
            
            <Input
              icon={Mail}
              type={"email"}
              placeholder={"Enter your email"}
              value={email}
              onChange={(e) => (setEmail(e.target.value))}
        
            />
                      
              { error && <p className="text-red-500 font-semibold mt-2" >{error}</p>}
          
            <motion.button
              className="w-full py-2 px-5 mt-3 bg-gradient-to-r from-purple-600 to-fuchsia-700 text-gray-200"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              type= "submit"
              disabled={isLoading}
        
            > 
            { isLoading ? <Loader className=" animate-spin mx-auto" size={24} /> : "Send Reset Link"}
      
            </motion.button>
          </form>
        ) : (
      
          <div className=" mb-1 flex flex-col items-center justify-center p-2">
            <div className=" p-4 flex rounded-full size-12 items-center text-center bg-purple-800 justify-center">
              <Mail className=" size-13 text-fuchsia-300" />
            </div>
            
            <p className=" text-xs mt-4 text-center text-gray-200">If an account exist for <span className="hover:underline">{email}</span> a link will be sent to reset your password
            </p>
          </div>
        
        ) 
      }
      </div>
      <div className="bg-gray-700 mt-2 px-5 py-2 text-gray-200 text-xs text-center">
        <Link to="/login" className="text-gray-200 text-xs flex gap-2 justify-center items-center hover:text-purple-500 hover:underline text-center">
          <MoveLeft className="text-center size-4" /> 
          <span>Back to Login</span>
        </Link>
      </div>

    </motion.div>
    
  
  
  
  )
}
export default ForgetPassword