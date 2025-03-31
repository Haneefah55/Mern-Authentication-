import { create } from 'zustand'
import axios from 'axios'

axios.defaults.withCredentials = true

const API_URL= import.meta.env.MODE === "development" ? "http://localhost:8800/api/auth" : "/api/auth"

export const useAuthStore = create((set) => ({
  user: null,
  message: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  isLoading: false,
  error: null,
  
  signup: async(username, email, password) =>{
    set({ isLoading: true, error: null })
    
    try {
      const response = await axios.post(`${API_URL}/signup`, { username, email, password })
      set({ user: response.data.user, isLoading: false, isAuthenticated: true })
    } catch (error) {
      set({ error: error.response.data.message || "Error signing up", isLoading: false })
      throw error
    }
  },
  

  
   
  login: async(email, password) =>{
    set({ isLoading: true, error: null, isAuthenticated: false })
       
    try {

      const response = await axios.post(`${API_URL}/login`, { email, password })
      set({ user: response.data.user, isLoading: false, isAuthenticated: true })
      
    } catch (error) {
      set({ error: error.response.data.message || "Error signing up", isLoading: false, isAuthenticated: false })
      throw error
    
    }
  },
  
  resendCode: async(email)=>{
    set({ error: null })
    try{
      const response = await axios.post(`${API_URL}/resend-code`, { email })
      
      set({ user: response.data.user, isAuthenticated: true })
      
    } catch (error) {
      set({ error: error.response.data.message || "Error verifying email" })
      
      
    }
    
    
  },
   
    
  verifyEmail: async(code) =>{
    set({ isLoading: true, error: null })
    
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code })
      set({ user: response.data.user, isLoading: false, isAuthenticated: true })
      return response.data
    } catch (error) {
      set({ error: error.response.data.message || "Error verifying email", isLoading: false })
      
    }
  },
  
  checkAuth: async() =>{
    //await new Promise((resolve) => setTimeout(resolve, 2000))
    set({ isCheckingAuth: true, error: null })
    
    try {
      const response = await axios.get(`${API_URL}/check-auth`)
      set({ user: response.data.user, isCheckingAuth: false, isAuthenticated: true })
      
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false })
      
    }
  },
  
   
  logout: async() =>{
    set({ error: null })
    try{
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true })
      set({ user: null, isAuthenticated: false, error: null })
    } catch (error) {
      set({ error: "Error logging out" })
      throw error
    }
    
    
    
  },
  
  

  updateUser: async(userId, data)=>{
    
    set({ isLoading: true, error: null })
    try {
      const response = await axios.put(`${API_URL}/edit-user/${userId}`, { ...data })
      set({ user: response.data.user, isLoading: false })
    } catch (error) {
      set({ error: error.response.data.message || "Error updating profile", isLoading: false })
    
    }
    
  },
  

  
  forgotPassword: async(email) =>{
    set({ isLoading: true, error: null, message: null })
        
    try {
      const response = await axios.post(`${API_URL}/forget-password`, { email })
      set({ user: response.data.user, isLoading: false, error: null })
    } catch (error) {
      set({ isLoading: false, error: error.response.data.message || "Error sending reset password link" })
    
    }
    
    
  },
  
  
  resetPassword: async(token, password) =>{
    set({ isLoading: true, error: null })
    try {
      
      const response = await axios.post(`${API_URL}/reset-password/${token}`, { password })
      set({ message: response.data.message, isLoading: false, error: null})
    } catch (error){
      set({ error: error.response.data.message || "Error reseting password", isLoading: false, message: null })
      throw error
    }
    
  },

  deleteUser: async(userId)=>{
    set({ error: null, isLoading: true })
    try {
      await axios.delete(`${API_URL}/delete-account/${userId}`)
      set({ isLoading: false, user: null })
    } catch (error) {
      set({ error: error.response.data.message || "Error deleting user", isLoading: false })
    
    }
    
  },
  
  changePassword: async(oldPassword, newPassword, userId) =>{
    set({ isLoading: true, error: null})
    
    try{
      
      const response = await axios.post(`${API_URL}/change-password/${userId}`, { oldPassword, newPassword })
      
      set({ message: response.data.message, isLoading: false, error: null})
      
    } catch (error) {
      
      set({ error: error.response.data.message || "Error reseting password", isLoading: false, message: null })
      throw error
      
    }
    
  }
 
  

  
  
}))