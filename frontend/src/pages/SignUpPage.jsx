import { motion } from "motion/react"
import { useState } from 'react'
import { Mail, Lock, User, Loader } from "lucide-react"
import Input from "../components/Input"
import { Link, useNavigate } from 'react-router'
import { useAuthStore } from "../store/authStore.js"
import PasswordStrengthMeter from "../components/PasswordStrengthMeter"

const SignUpPage = () =>{
  
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [style, setStyle] = useState("hidden")
  const navigate = useNavigate()

  const { signup, isLoading, error } = useAuthStore()
  
   
  const handleSignup = async (e) =>{
    e.preventDefault()
    
    try{
      await signup(username, email, password)
      navigate("/verify-email")
    } catch (error) {
      console.log(error)
    }
    
    
  } 
  
  const handleFocus = () =>{
    setStyle("flex")
  }
  const handleBlur = () =>{
    setStyle("hidden")
  }
  
  return(
    
      
    <motion.div 
      className="w-xs sm:max-w-md sm:w-sm w-4/5 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="p-6">
    
        <h2 className="text-2xl relative z-40 font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center"> Create account
        </h2> 
        

        <form onSubmit={handleSignup}>
          <Input
            icon={User}
            type={"text"}
            placeholder={"Enter a username"}
            value={username}
            onChange={(e) => (setUsername(e.target.value))}
          
          />
          
          <Input
            icon={Mail}
            type={"email"}
            placeholder={"Enter your email"}
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          
          />
          
          <Input
            icon={Lock}
            type={"password"}
            placeholder={"Enter your password"}
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
            onFocus ={handleFocus}
            onBlur ={handleBlur}
          
          />
              
          {error && <p className="text-red-500 font-semibold mt-2" >{error}</p>}
                     
          <PasswordStrengthMeter style={style} password={password} />

           
          <motion.button
            className="w-full py-2 px-5 mt-5 bg-gradient-to-r from-purple-900 to-fuchsia-800 text-gray-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type= "submit"
            diabled={isLoading}
        
          >            
            { isLoading ? <Loader className=" animate-spin mx-auto" size={24} /> : "Sign Up"}
                                   
          </motion.button>

           
        </form>


      </div>
      

      
      <div className="px-8 py-3 mt-3 bg-gray-800 flex justify-center text-xs bg-opacity-50">
        <p className="text-gray-300">
          Already have an account? 
          <Link to={"/login"} className="text-purple-400 hover:underline"> Login
          </Link>
        </p>
      </div>
      

       
    </motion.div>
   
    
  )
}
export default SignUpPage