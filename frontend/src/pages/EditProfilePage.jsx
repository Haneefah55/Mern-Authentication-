import { useState } from 'react'
import { Loader } from "lucide-react"
import { motion } from "motion/react"

import { useNavigate } from 'react-router'
import { useAuthStore } from "../store/authStore.js"

const EditProfilePage = ({ ...user }) =>{
  
  const navigate = useNavigate()
 
  const { updateUser, isLoading, error } = useAuthStore()

  const name = user.username
  const email = user.email
  
  
   
  const userId = user._id
  
   
  const[username, setUsername] = useState(name)
  
  const [err, setErr] = useState(null)
  const [dob, setDob] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [address, setAddress] = useState("")
  const [occupation, setOccupation] = useState("")
  const [statu, setStatu] = useState("")
  const [gender, setGender] = useState("")
  
 //const userInfo ={ username, dob, phoneNo, address, occupation, statu }
   
  const handleEditProfile = async (e) => {
    e.preventDefault()
    
    try{
      await updateUser(userId, username, dob, phoneNo, address, occupation, statu, gender)
      history.back()
      
    } catch (error) {
      setErr(error)
    }
  }
  
  const handleCancel = () =>{
    history.back()
  }
  
  return(
    <motion.div 
      className="w-xs sm:max-w-md sm:w-sm w-4/5 bg-gray-800 bg-opacity-20 flex justify-center backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h2 className="text-xl z-40 font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center">Edit Profile
        </h2>
                   
        <form 
          onSubmit={handleEditProfile}
          className="w-full"
        >
          
          
          <input 
            type="text"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 mb-3 text-gray-900 border-fuchsia-800 outline-none focus:border-fuchsia-600 text-gray-200 placeholder:text-gray-900 transition duration-200"
            value={username}
            placeholder={`${name}`}
            onChange={(e) => (setUsername(e.target.value))}
          />
          
          <input 
            type="email"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 mb-3 border-fuchsia-800 outline-none focus:border-fuchsia-600 text-gray-200 text-gray-900 placeholder:text-gray-900 transition duration-200"
            value={email}
            placeholder={email}
            disabled
          />
                       
          <label className=" text-purple-950 mb-2" htmlFor="date">Date of birth: </label>
          <input 
            id="date"
            type="date"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 mb-3 rounded-lg border-2 border-fuchsia-800 outline-none focus:border-fuchsia-600 text-gray-200 text-gray-900 transition duration-200"
            value={dob}
            placeholder="Enter date of birth"
            onChange={(e) => (setDob(e.target.value))}
            
          />
          
          <input 
            type="text"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 text-gray-900 border-fuchsia-800 mb-3 outline-none focus:border-fuchsia-600 text-gray-200 placeholder:text-gray-900 transition duration-200"
            value={address}
            placeholder="Your address"
            onChange={(e) => (setAddress(e.target.value))}
            
          />
          
          <input 
            type="text"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 text-gray-900 border-fuchsia-800 mb-3 outline-none focus:border-fuchsia-600 text-gray-200 placeholder:text-gray-900 transition duration-200"
            value={occupation}
            placeholder="Your occupation"
            onChange={(e) => (setOccupation(e.target.value))}
            
          />
          
          
          <input 
            type="text"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 text-gray-900 border-fuchsia-800 mb-3 outline-none focus:border-fuchsia-600 text-gray-200 placeholder:text-gray-900 transition duration-200"
            value={statu}
            placeholder="Marital status"
            onChange={(e) => (setStatu(e.target.value))}
            
          />
          
          <input 
            type="tel"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 text-gray-900 border-fuchsia-800 mb-3 outline-none focus:border-fuchsia-600 text-gray-200 placeholder:text-gray-900 transition duration-200"
            value={phoneNo}
            placeholder="Mobile number"
            onChange={(e) => (setPhoneNo(e.target.value))}
            
          />
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            value={gender}
            onChange={(e)=> (setGender(e.target.value))}
            className="bg-gray-400 bg-opacity-50 rounded-lg border-2 text-gray-900 border-fuchsia-800 px-3 py-1 ml-1 mb-3 outline-none focus:border-fuchsia-600 text-gray-200"

          >
            <option>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          


          {error && <p className="text-red-500 text-md">{error}</p>}
          
          <div className=" flex gap-3 items-center justify-center">
            <motion.button
              className=" py-2 px-5 mt-3 bg-gradient-to-r from-purple-900 to-fuchsia-800 text-gray-200"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              type= "submit"
              disabled={isLoading}
        
            > 
             { isLoading ? <Loader className=" animate-spin mx-auto" size={24} /> : "Update"} 
      
            </motion.button>
            
            <motion.button
              className=" py-2 px-5 mt-3 bg-gradient-to-r from-purple-900 to-fuchsia-800 text-gray-200"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleCancel}
        
            >
              Cancel
            </motion.button>
            
          </div>
          
          
                   
           
        </form>
                     
        
      </div>
    </motion.div>
    
    
    )
}

export default EditProfilePage