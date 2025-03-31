import logo from '../assets/logoo.png'
import toast from 'react-hot-toast';
import profileImage from "../assets/profile.png"
import { motion } from "motion/react"
import { LayoutDashboard, CircleArrowRight, NotebookPen, PlaneTakeoff, Settings, LogOut, BellRing, CircleUserRound } from 'lucide-react'
import { Outlet, Link, useLocation, NavLink } from "react-router"
import { useState } from "react"
import { useAuthStore } from "../store/authStore.js"
import { useNavigate } from 'react-router'


const DashboardPage = () =>{
  
  const { logout, user } = useAuthStore()
  const [isVisible, setIsVisible] = useState(false)
  const link = "flex gap-3 items-center text-purple-800 bg-fuchsia-100 p-4 "
  const name = user.username
  const pics = user.profilePic
  const navigate = useNavigate()
  
  const handleVisibility = () =>{
    
      setIsVisible(!isVisible)
      
  }
  
  
  const handleLogout = async() =>{
    
    
    await logout()
    navigate("/")
    toast.success("Logout successfully")
    
  }
  
  
  return(
    
    <div className="top-10  md:h-3/4 z-40  sm:p-10 md:w-4/5 w-full bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-lg relative overflow-y-scroll flex gap-2">
        
      <div 
        className={` bg-gray-100 bg-opacity-20 backdrop-filter py-2 justify-center basis-2xs backdrop-blur-xl flex mt-8 text-md z-10`}
        
      >
        <button 
          className=" border-none z-60 outline-none bg-transparent md:hidden  absolute -right-3 top-10 flex text-center"

          onClick={handleVisibility}
        >
          <CircleArrowRight className="text-purple-800 size-5"
          />
          
        </button>
        
          
        
        <div className="flex pointer-cursor flex-col text-gradient-to-r from-purple-900 to-fuchsia-800">
          <Link to="/" className="flex gap-3 items-center pb-7 pt-4 justify-center  hover:bg-purple-300">
            <img src={logo} className="size-6" />
            <span className={`text-xl md:flex  font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 bg-clip-text  ${isVisible ? "flex" : "hidden"} `}>Moores</span>
          </Link>
          
          <NavLink to="/account/" end
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "plum" } : {}
            }}
            className="flex gap-3 items-center text-purple-800 p-4 "
            
          >
            <LayoutDashboard className="size-6" />
            <span className={`text-md md:flex ${isVisible ? "flex" : "hidden"} `}>
              Dashboard
            </span>
          </NavLink>
          
          
          
          <NavLink to="/account/destination"
            className="flex gap-3 items-center text-purple-800  p-4 "
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "plum" } : {}
            }}
          >
            <PlaneTakeoff className="size-6" />
            <span className={`text-md md:flex  ${isVisible ? "flex" : "hidden"} `}>Destination</span>
          </NavLink>
          
          <NavLink to="/account/bookings"
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "plum" } : {}
            }}
            className="flex gap-3 items-center text-purple-800 p-4 ">
            <NotebookPen className="size-6" />
            <span className={`text-md md:flex  ${isVisible ? "flex" : "hidden"} `}>Activities</span>
          </NavLink>
          
          <NavLink to="/account/notifications"
            className="flex gap-3 items-center text-purple-800 p-4 "
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "plum" } : {}
            }}
          
          >
            <BellRing className="size-6" />
            <span className={`text-md md:flex  ${isVisible ? "flex" : "hidden"} `}>Notifications</span>
          </NavLink>
          
          <NavLink to="/account/settings" className="flex gap-3 items-center text-purple-800 p-4 "
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "plum" } : {}
            }}
          >
            <Settings className="size-6" />
            <span className={`text-md md:flex  ${isVisible ? "flex" : "hidden"} `}>Settings</span>
            
            
          </NavLink>
          <button onClick={handleLogout} className="border-none flex gap-3 items-center text-purple-800 p-4  bg-transparent outline-none">
            <LogOut className="size-6" />
            <span className={`text-md md:flex  ${isVisible ? "flex" : "hidden"} `}>Logout</span>
            
          </button>
          
        
          <NavLink to="/account/profile" className="flex gap-3 items-center text-purple-800 p-4"
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "plum" } : {}
            }}
          >
            <img src={pics ? pics : profileImage} className="size-8 rounded-full object-cover border-2 border-purple-600" />
            <div className={` text-md flex-col md:flex  ${isVisible ? "flex" : "hidden"} `}>
              <h4>{name}</h4>
              <p className="hover:underline text-xs text-gray-800">
                  View profile
              </p>
              
            </div>
          </NavLink>
            
          
        
        </div>
        

      </div>
      
      
      <div className="overflow-y-scroll mt-8 basis-3/4 flex justify-center">
        <Outlet />
      </div>
      
      
    </div>
  )
}
export default DashboardPage