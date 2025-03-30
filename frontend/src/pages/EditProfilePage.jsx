import { useState } from 'react'
import { Loader, Camera } from "lucide-react"
import { motion } from "motion/react"
import profileImage from "../assets/profile.png"
import { useNavigate } from 'react-router'
import { useAuthStore } from "../store/authStore.js"

const EditProfilePage = ({ ...user }) =>{
  
  const navigate = useNavigate()
 
  const { updateUser, isLoading, error, isAuthenticated } = useAuthStore()

  const name = user.username
  const email = user.email
  
  
   
  const userId = user._id
  const [show, setShow] = useState(false)
   
  const[username, setUsername] = useState(name)
  
  const [err, setErr] = useState(null)
  const [dob, setDob] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [address, setAddress] = useState("")
  const [occupation, setOccupation] = useState("")
  const [statu, setStatu] = useState("")
  const [gender, setGender] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  
 
  const handleShow = () =>{
   setShow(!show)
   navigate("/login")
  }
  
  const handleImageUpload = (e) =>{
    e.preventDefault()
    const file = e.target.files[0]
    if(!file) return
    const reader = new FileReader()
    
    reader.readAsDataURL(file)
    reader.onload = () =>{
      const base64Image = reader.result
      setSelectedImage(base64Image)
    }
  }
   
  const handleEditProfile = async (e) => {
    e.preventDefault()
    
  
    const profilePic = selectedImage
    
    const data ={ username, dob, phoneNo, address, occupation, statu, gender, profilePic }
    
    if(!user.isVerified && !isAuthenticated ){
      
      setShow(true)
      return 
      
    }
    await updateUser(userId, data)
    history.back()
    
    
      
      
  
  }
  
  const handleCancel = () =>{
    history.back()
  }
  
  return(
    <motion.div 
      className="w-md sm:max-w-md sm:w-sm bg-gray-800 bg-opacity-20 flex justify-center backdrop-filter mt-20 sm:mt-2 relative backdrop-blur-xl rounded-2xl shadow-xl overflow-y-scroll"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h2 className="text-xl z-40 font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center">Edit Profile
        </h2>
                   
        <form
          enctype="multipart/form-data"
          onSubmit={handleEditProfile}
          className="w-full"
        >
          <div className="flex mb-4 flex-col gap-4 items-center justify-center">
            <div className="relative">
              <img src={selectedImage || user.profilePic || profileImage}
                alt="profile"
                className="size-24 rounded-full object-cover border-3 border-purple-300"
              />
              <label htmlFor="avatar"
                className="absolute bottom-0 right-0 bg-gray-300 hover:scale-105 rounded-full cursor-pointer transition-all duration-200 p-2"
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="avatar"
                  disabled={isLoading}
                  onChange={handleImageUpload}
                
                />
                
              </label>
            </div>
            <p className=" text-center">Upload profile image
            <span className="block text-xs text-gray-500">Images of inanimate objects is mostly preferred</span></p>
            
          </div>
          
          
          <input 
            type="text"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 mb-3 text-gray-900 border-fuchsia-800 outline-none focus:border-fuchsia-600 text-gray-200 placeholder:text-gray-900 transition duration-200"
            value={username}
            placeholder="Enter a username"
            onChange={(e) => (setUsername(e.target.value))}
          />
          
          <input 
            type="email"
            className="w-full px-3 py-1 bg-gray-400 bg-opacity-50 rounded-lg border-2 mb-3 border-fuchsia-800 outline-none focus:border-fuchsia-600 text-gray-200 text-gray-900 placeholder:text-gray-900 transition duration-200"
            value={email}
            placeholder={email}
            disabled
          />
                       
          <label htmlFor="date">Date of birth: </label>
          <input 
            id="date"
            type="date"
            name="date"
            className="px-3 py-1 bg-gray-400 bg-opacity-50 mb-3 rounded-lg border-2 border-fuchsia-800 outline-none focus:border-fuchsia-600 text-gray-200 text-gray-900 transition duration-200"
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          


          {error && <p className="text-red-500 text-md">{error}</p>}
          
          <div className=" flex gap-3 mt-3 items-center justify-center">
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
      
      <div className={`w-md sm:max-w-md absolute top-20 sm:w-sm  bg-gray-800  backdrop-filter backdrop-filter backdrop-blur-xl rounded-md flex-col items-center p-6 ${show ? "flex" : "hidden" }`}>
        <p className="text-center text-gray-200">Please login to continue</p>
        <button className="outline-none size-10 border-none p-2 mt-5 text-center bg-purple-600 text-gray-200"
          onClick={handleShow}
        >Ok
        </button>
      </div>
    </motion.div>
    
    
    )
}

export default EditProfilePage