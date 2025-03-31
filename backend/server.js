import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from  'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './db/connectDB.js'
import authRoutes from './routes/authRoutes.js'
import path from 'path'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cookieParser())
app.use(express.json())

app.use(bodyParser)

const __dirname = path.resolve()
app.use("/api/auth", authRoutes)

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '/frontend/dist')))
  
  app.get("*", (req, res) =>{
    
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}



app.listen(port, () =>{ 
  connectDB()
  console.log(`server running on port ${port}`)
  
})