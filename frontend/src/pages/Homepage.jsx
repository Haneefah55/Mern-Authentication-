import { motion } from "motion/react"
import image from "../assets/img.png"

const Homepage = () =>{
  console.log('console is seen')
  
  return(
    <div className=" pt-20 w-full absolute z-40 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className=" text-gray-900 basis-1/2 text-center w-4/5 p-3">
          <p className="text-4xl  font-semibold ">
            It's your world. <br/>We'll help you to explore it
          </p>
          <motion.button
            className=" p-2 sm:text-lg border-none mt-5 outline-none bg-fuchsia-300 text-gray-800 hover:bg-gray-200 hover:text-fuchsia-800"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          > 
            Let's Explore
          </motion.button>
          
        </div>
        <div className="basis-1/2">
          <img src={image} className=" md:size-140 size-80"/>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Homepage