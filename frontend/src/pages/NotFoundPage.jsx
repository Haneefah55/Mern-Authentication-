import { motion } from "motion/react"
import notfound from "../assets/notfound.png"

const NotFoundPage = () =>{
  
  
  
  return(
    <motion.div
        className='bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl w-full sm:p-8 p-6'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
      <p className="text-center">Oops! Page Not Found</p>
      <div className="p-3 flex items-center justify-center">
        <img src={notfound} className="w-24 h-24 border-2 border-purple-950" />
      </div>
      
    </motion.div>
    
  
  
  )
}

export default NotFoundPage