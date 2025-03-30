
import { motion } from "motion/react"
import { Link } from 'react-router'

import { NotebookPen } from 'lucide-react'

const Bookings = () =>{
  
  
  
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
        <h3 className="text-md text-transparent font-semibold text-transparent mb-4 bg-gradient-to-r from-purple-300 to-fuchsia-200 bg-clip-text text-center">Your Bookings
        </h3>
        <div className="text-gray-100 mb-3 text-sm">
          <p className="mb-3">No recent bookings</p>
          <Link to="#" className="hover:bg-fuchsia-300 text-purple-800 font-semibold" >Book your next flight <NotebookPen className="size-4 inline"  />
          </Link>
                
                
        </div>
      </div>
    </motion.div>
  )
}
export default Bookings