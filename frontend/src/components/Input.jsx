
const Input = ({ icon: Icon, ...props }) =>{
  
  
  return(
    <div className="relative mb-4">
      <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
        <Icon className="size-5 text-fuchsia-400" />
        
      </div>
      <input
        {...props}
        className="w-full pr-3 py-2 pl-10 bg-gray-200 bg-opacity-50 rounded-lg border-2 border-fuchsia-400 outline-none focus:border-fuchsia-600 text-gray-900 placeholder:text-gray-900 transition duration-200"
      />
    
    </div>
    
    
  )
}




export default Input
