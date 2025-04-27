// Mock user data
const mockUser = {
  id: 1,
  email: 'test@example.com',
  first_name: 'Test',
  last_name: 'User',
  token: 'mock-token-123'
}

// Simulate delay
const delay = () => new Promise(resolve => setTimeout(resolve, 100))

export const isAuth = () => {
  return !!localStorage.getItem('authToken')
}

// const API_URL = process.env.NEXT_PUBLIC_API_URL

export const signupAPI = async (
  firstName: string, 
  lastName: string, 
  email: string, 
  password: string
) => {
  await delay()
  if (email === 'exists@example.com') {
    throw new Error('email already exists')
  }
  
  localStorage.setItem('authToken', mockUser.token)
  localStorage.setItem('email', mockUser.email)
  localStorage.setItem('userId', mockUser.id.toString())
  
  return {
    token: mockUser.token,
    email: mockUser.email,
    id: mockUser.id
  }
}

export const loginAPI = async (email: string, password: string) => {
  await delay()
  if (email !== 'test@example.com' || password !== 'password') {
    throw new Error('Invalid credentials')
  }
  
  localStorage.setItem('authToken', mockUser.token)
  localStorage.setItem('email', mockUser.email)
  localStorage.setItem('userId', mockUser.id.toString())
  
  return {
    user: mockUser
  }
}

export const fetchUserDataAPI = async () => {
  await delay()
  if (!isAuth()) {
    throw new Error('Not authenticated')
  }
  return mockUser
}

export const updateUserName = async (first_name: string, last_name: string) => {
  await delay()
  if (!isAuth()) {
    throw new Error('Not authenticated')
  }
  mockUser.first_name = first_name
  mockUser.last_name = last_name
  return mockUser
}