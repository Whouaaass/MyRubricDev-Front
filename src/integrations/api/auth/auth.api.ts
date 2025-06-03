import axiosInstance from '../axiosInstance'
import type { LoginOkResponse, RegisterOkResponse } from './responses'


export async function login(username: string, password: string) {
  const response = await axiosInstance.post<LoginOkResponse>('/auth/login', {
    username: username,
    password: password,
  })
  return response.data
}

export async function register(username: string, password: string) {
  const response = await axiosInstance.post<RegisterOkResponse>(
    '/auth/register',
    {
      username: username,
      password: password,
      rol: 'COORDINADOR',
    },
  )

  return response.data
}
