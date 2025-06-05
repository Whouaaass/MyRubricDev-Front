import axiosInstance from '../axiosInstance'

// Competencia
export async function listCompetenciasPrograma() {
  const response = await axiosInstance.get<Array<CompetenciaPrograma>>(
    '/programa/competencia',
  )
  return response.data
}

export async function createCompetenciaPrograma(body: CompetenciaBody) {
  const response = await axiosInstance.post<CompetenciaPrograma>(
    '/programa/competencia',
    body,
  )
  return response.data
}

export async function editCompetenciaPrograma(
  id: number,
  body: CompetenciaBody,
) {
  const response = await axiosInstance.post<CompetenciaPrograma>(
    `/programa/competencia/${id}`,
    body,
  )
  return response.data
}

// Resultado de aprendizaje
export async function listRAsProgrma() {
  const response = await axiosInstance.get<Array<RAAsignatura>>('/programa/ra')
  return response.data
}

export async function createRAPrograma(body: CompetenciaBody) {
  const response = await axiosInstance.post<RAAsignatura>('/programa/ra', body)
  return response.data
}

export async function editRAPrograma(id: number, body: CompetenciaBody) {
  const response = await axiosInstance.post<RAAsignatura>(
    `/programa/ra/${id}`,
    body,
  )
  return response.data
}
