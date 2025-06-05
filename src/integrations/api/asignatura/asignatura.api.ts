import axiosInstance from '../axiosInstance'

// Asignaturas
export async function listarAsignaturas() {
  const response = await axiosInstance.get<Array<Asignatura>>('/asignaturas')
  return response.data
}

export async function createAsignatura(body: AsignaturaBody) {
  const response = await axiosInstance.post<Asignatura>('/asignaturas', body)
  return response.data
}

export async function editAsignatura(id: number, body: AsignaturaBody) {
  const response = await axiosInstance.put<Asignatura>('/asignaturas', {
    id,
    ...body,
  })
  return response.data
}

// Asignacion de asignaturas
export async function asignarAsignatura(body: AsignarAsignaturaBody) {
  const response = await axiosInstance.post('/asignaturas/asignar', body)
  return response.data
}

export async function listarAsignacionesAsignatura() {
  const response = await axiosInstance.get<Array<AsignacionAsignatura>>(
    '/asignaturas/asignaciones',
  )
  return response.data
}
export async function listarAsignacionesAsignaturaAsociadas() {
  const response = await axiosInstance.get<Array<AsignacionAsignatura>>(
    '/asignaturas/asignaciones/docente',
  )
  return response.data
}

// Competencia
export async function listCompetenciasAsignatura() {
  const response = await axiosInstance.get<Array<CompetenciaAsignatura>>(
    '/asignaturas/competencias',
  )
  return response.data
}

export async function createCompetenciaAsignatura(
  body: CompetenciaAsignaturaBody,
) {
  const response = await axiosInstance.post<CompetenciaAsignatura>(
    '/asignaturas/competencia',
    body,
  )
  return response.data
}

export async function editCompetenciaAsignatura(
  id: number,
  body: CompetenciaAsignaturaBody,
) {
  const response = await axiosInstance.put<CompetenciaAsignatura>(
    `/asignaturas/competencia/${id}`,
    body,
  )
  return response.data
}

// Resultado de aprendizaje
export async function listRAsAsignatura() {
  const response =
    await axiosInstance.get<Array<RAAsignatura>>('/asignaturas/ras')
  return response.data
}

export async function createRAAsignatura(body: RaAsignaturaBody) {
  const response = await axiosInstance.post<RAAsignatura>(
    '/asignaturas/ra',
    body,
  )
  return response.data
}

export async function editRAAsignatura(id: number, body: RaAsignaturaBody) {
  const response = await axiosInstance.post<RAAsignatura>(
    `/programa/ra/${id}`,
    body,
  )
  return response.data
}
