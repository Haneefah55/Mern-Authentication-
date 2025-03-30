
import { motion } from "motion/react"
import { Link } from 'react-router'

import { BellRing } from 'lucide-react'

const Notifications = () =>{
  
  
  
  return(
    
    <motion.div 
      className= " flex flex-col items-center p-4 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl z-40 font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center">Bookings
      </h2> 
      <div className="bg-transparent backdrop-filter flex items-center flex-col pt-2 px-2 w-[250px] h-[200px] border-2 backdrop-blur-xl shadow-xl overflow-hidden">
        
        <div className="text-gray-100 mb-3 text-sm">
          <p className="mt-3">No recent notifications
            <BellRing className="size-4 ml-2 inline"  />
          </p>
          
                
        </div>
      </div>
    </motion.div>
  )
}
export default Notifications