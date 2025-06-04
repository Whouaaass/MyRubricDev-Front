import axiosInstance from '../axiosInstance'

export async function createDocente(body: createDocenteBody) {
  const response = await axiosInstance.post<createDocenteBody>(
    '/usuarios/docentes',
    {
      ...body,
      activo: true,
    },
  )
  return response.data
}

export async function listDocentes() {
  const response = await axiosInstance.get('/usuarios/docentes')
  return response.data
}
