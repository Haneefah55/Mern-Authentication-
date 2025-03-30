import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router"
import { useAuthStore } from "./store/authStore.js"
import { Navigate } from 'react-router'

import { useEffect } from 'react'

import Navbar from "./components/Navbar"
import FloatingShapes from "./components/FloatingShapes"


import ResetPasswordPage from "./pages/ResetPasswordPage"

import Homepage from "./pages/Homepage"
import NotFoundPage from "./pages/NotFoundPage"

import ForgetPassword from "./pages/ForgetPassword"
import EmailVerificationPage from "./pages/EmailVerificationPage"


import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import Dashboard from "./components/Dashboard"
import Profile from "./pages/Profile"
import Destination from "./components/Destination"
import Bookings from "./components/Bookings"
import Notifications from "./components/Notifications"
import Settings from "./components/Settings"
import ChangePassword from "./components/ChangePassword"
import EditProfilePage from "./pages/EditProfilePage"




//import LoaderSpinner from "./components/LoaderSpinner"




const ProtectedRoutes = ({ children }) =>{
  const { isAuthenticated, user } = useAuthStore()
  
  if(!isAuthenticated){
    return <Navigate to="/login" replace />
  }
  
  if(!user.isVerified){
    return <Navigate to="/verify-email" replace />
  }
  
  return children
} 




const RedirectAuthenticatedUser = ({ children }) =>{
  const { isAuthenticated, user } = useAuthStore()
  
  if(isAuthenticated && user.isVerified){
    return <Navigate to="/account" replace />
  }
  return children
}




const App = () =>{
  


 const { isCheckingAuth, user, checkAuth } = useAuthStore()
  
 
   
 
  useEffect(() =>{
    checkAuth()
  }, [checkAuth])
  
 //if(isCheckingAuth) return <LoaderSpinner />
  
  return(
    
    <div className=" min-h-screen relative overflow-y-scroll bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center font-[Outfit]">
      

      
      <FloatingShapes color={"bg-fuchsia-500"} size={"h-64 w-64"} top={"-5%"} left={"10%"} delay={0}/>
      <FloatingShapes color={"bg-purple-500"} size={"h-48 w-48"} top={"70%"} left={"80%"} delay={5}/>
      <FloatingShapes color={"bg-violet-500"} size={"h-64 w-64"} top={"40%"} left={"-10%"} delay={2}/>

      <Navbar { ...user } /> 
      

      <Routes>
        <Route path="/" element={<Homepage />} />

        
        <Route path="/verify-email" element={
        
          <EmailVerificationPage  { ...user } />
        
        }
        />

                    

        <Route path="/account" element={
        
          <ProtectedRoutes>
            <DashboardPage  />
          </ProtectedRoutes>
          
        } 
        >

          <Route index element={<Dashboard />} />

          <Route path="profile" element={<Profile />} 
          />
        
          
          <Route path="destination" element={<Destination />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="notifications" element={<Notifications />} />
          
          <Route path="settings" element={<Settings { ...user } />} /> 
         

        </Route>
              

        <Route path="/blogs" element={"Blog"} />
        
        <Route path="/contact" element={"Contact"} />
            
        
        <Route path="/login" element={
        
          <RedirectAuthenticatedUser>
            <LoginPage />
          </RedirectAuthenticatedUser>
          
        } 
        />
        <Route path="/signup" element={
        
          <RedirectAuthenticatedUser>
            <SignUpPage />
          </RedirectAuthenticatedUser>
          
        } 
        />
        
        <Route path="/forgot-password" element={
        
          <RedirectAuthenticatedUser>
            <ForgetPassword />
          </RedirectAuthenticatedUser>
          
        } 
        />

        <Route path="/edit-user" element={
          <EditProfilePage {...user} />
        }
        />
        
        <Route path="/reset-password/:token" element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          
        } 
        /> 
        
        <Route path="/change-password" element={
          <ChangePassword { ...user } />
        } 
        />
        <Route path="/*" element={<NotFoundPage />}
        />
        
        
          

      </Routes>
      <Toaster />
    </div>
  )
}

export default App