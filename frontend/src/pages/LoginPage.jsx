import { motion } from "motion/react"
import { useState } from 'react'
import { Mail, Lock, Loader, Eye, EyeOff } from "lucide-react"
import Input from "../components/Input"
import { Link } from 'react-router'
import { useAuthStore } from "../store/authStore.js"
import { useNavigate } from 'react-router'

const LoginPage = () =>{
  const { login, isLoading, error } = useAuthStore()
  
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const handleToggle = () =>{
    
    setIsVisible(!isVisible)
  }
  
  
  const handleLogin = async(e) =>{
    e.preventDefault()
    
    await login(email, password)
    navigate("/account")
    
  }

  
  
  return(
    
    <motion.div 
      className="w-xs sm:max-w-md sm:w-sm w-4/5 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="p-6">
        
        <h2 className="text-2xl z-40 font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center">Welcome back!
        </h2> 
                    
        <form onSubmit={handleLogin}>

          <Input
            icon={Mail}
            type={"email"}
            placeholder={"Enter your email"}
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          
          />
          
          <div className="relative mb-4">
            <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <Lock className="size-5 text-fuchsia-400" />
            </div>
            <input
              type={!isVisible ? "password" : "text" }
              placeholder={"Enter your password"}
              value={password}
              onChange={(e) => (setPassword(e.target.value))}
              className="w-full pr-3 py-2 pl-10 bg-gray-200 bg-opacity-50 rounded-lg border-2 border-fuchsia-400 outline-none focus:border-fuchsia-600 text-gray-900 placeholder:text-gray-900 transition duration-200"
            />
            <div 
              className=" absolute inset-y-0 right-0 flex items-center outline-none border-none pr-3 "
              onClick={handleToggle}
            >
              {!isVisible ? <EyeOff className="size-5 text-fuchsia-400" /> : <Eye className="size-5 text-fuchsia-400" /> }
            
            </div>
    
          </div>
                      
          
          <div className="flex text-xs text-gray-500  items-center justify-center">
            <Link to={"/forgot-password"} >Forgot password?</Link>
          </div>
          { error && <p className="text-red-500 font-semibold mt-2" >{error}</p>}
          
          <motion.button
            className="w-full py-2 px-5 mt-3 bg-gradient-to-r from-purple-900 to-fuchsia-800 text-gray-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type= "submit"
            disabled={isLoading}
            onClick={handleLogin}
        
          > 
            { isLoading ? <Loader className=" animate-spin mx-auto" size={24} /> : "Login"}
      
          </motion.button>
          
           
        </form>
         
       
      </div>
          
      <div className="px-8 py-3 mt-1 bg-gray-800 flex justify-center text-xs bg-opacity-50"
      >
        <p className="text-gray-300">
          Don't have an account? 
          <Link to={"/signup"} className="text-purple-400 hover:underline"> Sign Up
          </Link>
        </p>
      </div>

    </motion.div>
      
    
  )
}
export default LoginPage