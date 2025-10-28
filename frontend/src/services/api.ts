import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface CreateUserRequest {
  email: string
  password: string
}

export interface LoginUserRequest {
  email: string
  password: string
}

export interface CreateUserResponse {
  success: boolean
  statusCode: number
  message: string
  user: {
    id: string
    email: string
    createdAt: string
  }
}

export interface LoginUserResponse {
  success: boolean
  statusCode: number
  message: string
  user: {
    id: string
    email: string
    createdAt: string
  }
}

export interface ApiError {
  message: string
  statusCode: number
  error?: string
}

export const userService = {
  register: async (userData: CreateUserRequest): Promise<CreateUserResponse> => {
    try {
      const response = await api.post<CreateUserResponse>('/user/register', userData)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data as ApiError
      }
      throw new Error('An unexpected error occurred')
    }
  },

  login: async (userData: LoginUserRequest): Promise<LoginUserResponse> => {
    try {
      const response = await api.post<LoginUserResponse>('/user/login', userData)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data as ApiError
      }
      throw new Error('An unexpected error occurred')
    }
  },
}

export default api