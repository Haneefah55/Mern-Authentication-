import { Link } from "react-router"
import { Menu, X, CircleUserRound } from "lucide-react"
import { useState } from 'react'
import logo from '../assets/logoo.png'

const Navbar = ({ ...user }) =>{
  const [menuStyle, setMenuStyle] = useState("hidden")
  const [dropStyle, setDropStyle] = useState("hidden")
  
  const handleDropdown =() =>{
    setMenuStyle("flex")
  }
  
  const handleClose =() =>{
    setMenuStyle("hidden")
  }
  
  const handleUserDrop = () =>{
    setDropStyle("flex")  }
  const handleUserClose = () =>{
    setDropStyle("hidden")
  }
  const name = user.username
  
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-fuchsia-100 shadow-lg flex items-center justify-around px-5 py-4 z-50">
      <div>
        <Link to="/" className=" flex items-center gap-2">
          <img src={logo} className=" w-7 h-7"/>
          <span className="font-bold font-2xl">Moores</span>
        </Link>
      </div>
      
      <Menu 
        className="sm:hidden font-bold text-fuchsia-800"
        onClick={handleDropdown}
      />
      
      <div className= {`sm:hidden absolute top-12 right-2 ${menuStyle} bg-gradient-to-br from-fuchsia-100 to-pink-100 p-5 flex-col gap-3 size-48 shadow-lg`}>
        <X 
          className=" font-bold text-fuchsia-800"
          onClick={handleClose}
        />
        <Link to={"/"} >Home</Link>
        <Link to={"/blogs"} >Blog</Link>
        <Link to={"/contact"} >Contact</Link>
      </div>
      <div className="hidden sm:flex gap-2">
        <Link to={"/"} >Home</Link>
        <Link to={"/blogs"} >Blog</Link>
        <Link to={"/contact"} >Contact</Link>
      </div>
    
      <Link to="/account" className=" flex items-center gap-2">
       
        <CircleUserRound className=" font-bold text-fuchsia-800"/>
        

        <span>
          {name ? name 
            : <Link to="/login" className=" px-3 py-2 text-fuchsia-900 hover:bg-transparent hover:border bg-gradient-to-r from-purple-300 to-fuchsia-200">Login</Link>
          }
        </span>
      </Link>
      
      
     
      
    </div>
    
  )
}

export default Navbar