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

export async function editDocente(id: number, body: editDocenteBody) {
  const response = await axiosInstance.put<createDocenteBody>(
    `/usuarios/docentes/${id}`,
    body,
  )
  return response.data
}

export async function listDocentes() {
  const response = await axiosInstance.get<Array<Docente>>('/usuarios/docentes')
  return response.data
}
