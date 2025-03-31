import { useRef, useState, useEffect } from "react"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router'
import { motion } from "motion/react"
import { useAuthStore } from "../store/authStore.js"

const EmailVerificationPage = ({ ...user })=>{
  const [code, setCode] = useState(["", "", "", "", "", ""])
  
  const [visible, setVisible] = useState(true)
  const inputRefs = useRef([])
  const navigate = useNavigate()
  const { verifyEmail, isLoading, resendCode } = useAuthStore()
  
  const email = user.email
  
  
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const verificationCode = code.join("")
    try{
      await verifyEmail(verificationCode)
      navigate("/")
      toast.success("Email verification successful")
    } catch (error) {
      console.log(error)
      
    }
  }
  
  const handleResend = async() =>{
    
    try{
      await resendCode(email)
      location.reload()
      
    } catch (error) {
      console.log(error)
      
    }
    
    
  }
  
  
  const handleChange = (index, value) =>{
    const newCode = [...code]
    if(value.length > 1){
      const pastedCode = value.slice(0, 6).split("")
      for (let i = 0; i < 6; i++){
        newCode[i] = pastedCode[i] || ""
      }
      setCode(newCode)
      
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "")
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5
      inputRefs.current[focusIndex].focus()
    } else {
      newCode[index] = value
      setCode(newCode)
          // move cursor to the next input field
      if(value && index < 5){
        inputRefs.current[index + 1].focus()
      }
    }

  }
  
  const handleKeyDown = (index, e) =>{
    if(e.key === "Backspace" && !code[index] && index > 0){
      inputRefs.current[index - 1].focus()
    }
  }
  
  //const targetTime = new Date().getTime() + (60 * 1000)
  
  /**
  
  const countTimer = setInterval(() =>{
    const endTime = new Date().getTime()
    const intervalTime = targetTime - endTime
    
   
    const minutes = Math.floor((intervalTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((intervalTime % (1000 * 60)) / 1000);
    const counter = `${minutes}:${seconds}`
    
    if (intervalTime < 0) {
        clearInterval(countTimer);
        setVisible(false)
    }
    
    
  }, 1000)
  
  **/
  

  const [timeLeft, setTimeLeft] = useState(60);
  
  useEffect(() =>{
    if(code.every((digit) => digit !== "")){
      handleSubmit(new Event("submit"))
    }
    
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          setVisible(false)
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    
    return () => clearInterval(timerInterval)
    
  /**
    
    
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft-1);
      
      if (timeLeft < 0) {
      clearInterval(intervalId);
      setVisible(false)
      }
    }, 2000);
    
    
  **/
    
    
  
  }, [code])
  return(
    <div className="max-w-md sm:w-full bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden" >
      <motion.div
        className=' sm:p-8 p-6'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl text-transparent bg-gradient-to-r font-bold from-purple-800 to-fuchsia-800 mb-6 bg-clip-text text-center">Verify Your Email
        </h2> 
        <div className=" flex items-center flex-col">
          <p className="text-center text-xs text-gray-800 mb-2" >
          Enter the 6-digit code sent to your email
          </p>
          <button 
            className="text-center bg-none outline-none text-xs text-gray-900 mb-4 hover:underline"
            onClick={handleResend}
            disabled={visible}
          >
            resend code 
             <span className={` ${visible ? "inline-block" : "hidden"}`}
            >&#160; in 00: {timeLeft}</span>
          </button>
          
         
          
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            {code.map((digit, index) =>(
              <input 
                key={index}
                type={"text"}
                maxLength={"6"}
                ref={(el) =>(inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="sm:h-12 sm:w-12 w-10 h-10 text-center font-bold text-2xl mr-2 sm:mr-1 border-2 focus:border-fuchsia-800 bg-gray-300 bg-opacity-50 outline-none border-3 mb-5 border-purple-800 rounded-lg text-gray-800"
              />
            ))
            }
          </div>
          <motion.button
            className="w-full py-2 px-5 bg-gradient-to-r text-xl font-semibold from-purple-900 rounded-lg to-fuchsia-800 text-gray-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type= "submit"
            disabled={isLoading || code.some((digit) => !digit)}
        
          > 
          {isLoading ? "Verifying..." : "Verify Email"}
      
          </motion.button>
          
        </form>
        
      </motion.div>
    </div>
    
    
    
  
  )
}

export default EmailVerificationPage