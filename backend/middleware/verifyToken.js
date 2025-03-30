import jwt from 'jsonwebtoken'


export const verifyToken = (req, res, next) =>{
  const token = req.cookies.token
  if(!token) return res.status(401).json({success: false, message: "Unauthorized - token not found"})
  
  try{
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    if (!decode) return res.status(401).json({success: false, message: "Unauthorized - Invalid token"})
    req.userId = decode.userId
    
    next()
  } catch (error) {
    console.log("Error in authorization", error)
    res.status(400).json({success: false, message: error.message})
  }
}
 

