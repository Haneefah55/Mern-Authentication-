
import { motion } from "motion/react"


const LoaderSpinner = () =>{
  
  
  
  
  
  return(
    <div className="min-h-screen relative flex justify-center overflow-hidden items-center bg-fuchsia-100  " >
      <motion.div
        className="w-16 h-16 border-5 border-t-5 border-t-fuchsia-100 border-fuchsia-400 rounded-full"
        
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: "linear",
          
        }}
        
      />
    </div>
    
    
    
  )
}
export default LoaderSpinner