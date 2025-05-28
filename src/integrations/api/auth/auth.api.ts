import axiosInstance from '../axiosInstance'
import type { LoginOkResponse, RegisterOkResponse } from './responses'


export async function login(email: string, password: string) {
  const response = await axiosInstance.post<LoginOkResponse>('/auth/login', {
    username: email,
    password: password,
  })
  return response.data
}

export async function register(email: string, password: string) {
  const response = await axiosInstance.post<RegisterOkResponse>(
    '/auth/register',
    {
      username: email,
      password: password,
      rol: 'DOCENTE',
    },
  )

  return response.data
}
