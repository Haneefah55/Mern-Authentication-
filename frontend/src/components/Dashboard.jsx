import { motion } from "motion/react"
import { Link } from 'react-router'
import { useAuthStore } from "../store/authStore.js"
//import { formatDate } from "../utils/date.js"



const Dashboard = () =>{
  const { user } = useAuthStore()
  const name = user.username
  const email = user.email.slice(0, 16).padEnd(19, ".")
  
  const created = user.createdAt
  const createdDate = new Date(created).toLocaleDateString("en-US", {
    year: "numeric", 
    month: "long",
    day: "numeric",
    
  })
  
  
  const last = user.lastLogin
  const lastLoginDate = new Date(last).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    
  })
  
  
  
  return(
    <motion.div 
      className= "p-6 flex "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
  
      <div className="flex  items-center flex-col "
      >
      
        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 bg-clip-text text-center">Dashboard
      
        </h2> 
                
        <p 
          className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 bg-clip-text text-center"
        >
            {name}
        </p>
      
                
                
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 ">
          <div className=" bg-transparent backdrop-filter pt-2 w-[200px] h-[150px] border-2 px-2 backdrop-blur-xl  shadow-xl overflow-hidden">
            <h3 className="text-md text-transparent font-semibold text-transparent mb-4 bg-gradient-to-r from-purple-300 to-fuchsia-200 bg-clip-text text-center">Profile Information
            </h3>
            <div className="text-gray-300 mb-3 text-sm">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                
            </div>
              
          </div>
            
          <div className=" bg-transparent backdrop-filter pt-2 w-[200px] h-[150px] border-2 flex flex-col items-center  px-2 backdrop-blur-xl  shadow-xl overflow-hidden">
            <h3 className="text-md text-transparent bg-gradient-to-r font-semibold from-purple-300 to-fuchsia-200 mb-4 bg-clip-text text-center">Destination
            </h3>
            <div className="text-gray-100 mb-3 text-sm">
              <p className="">No recent destination</p>
              <Link to="#" className="hover:bg-fuchsia-300 text-purple-800 text-sm" >Explore popular destination
              </Link>
                
                
            </div>
              
          </div>
            
          <div className="bg-transparent backdrop-filter flex items-center flex-col pt-2 px-2 w-[200px] h-[150px] border-2 backdrop-blur-xl shadow-xl overflow-hidden">
            <h3 className="text-md text-transparent bg-gradient-to-r font-semibold from-purple-300 to-fuchsia-200 mb-4 bg-clip-text text-center">Bookings
            </h3>
            <div className="text-gray-100 mb-3 text-sm">
              <p>No recent booking</p>
            </div>
          </div>
        
          
          <div className="  flex items-center w-[200px] h-[150px] border-2 flex-col bg-transparent border backdrop-filter pt-2 px-2 backdrop-blur-xl shadow-xl overflow-hidden ">
            <h3 className="text-md text-transparent bg-gradient-to-r font-semibold from-purple-300 to-fuchsia-200 mb-4 bg-clip-text text-center"> Recent Activities
            </h3>
            <div className="text-gray-100 mb-3 text-sm">
            
              <p className="">
              <span >Joined: {createdDate}</span>
              </p>
                 
              <p className="">
                      
                <span >Last Login: {lastLoginDate} </span>
                     
              </p> 
            </div>
            
            
          </div>
        </div>
      </div>

    </motion.div>
    
  )
    
  
}

export default Dashboard