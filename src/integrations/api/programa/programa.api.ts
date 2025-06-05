import axiosInstance from '../axiosInstance'

// Competencia
export async function listCompetenciasPrograma() {
  const response = await axiosInstance.get<Array<CompetenciaPrograma>>(
    '/programa/competencias',
  )
  return response.data
}

export async function createCompetenciaPrograma(body: CompetenciaProgramaBody) {
  const response = await axiosInstance.post<CompetenciaPrograma>(
    '/programa/competencia',
    body,
  )
  return response.data
}

export async function editCompetenciaPrograma(
  id: number,
  body: CompetenciaProgramaBody,
) {
  const response = await axiosInstance.put<CompetenciaPrograma>(
    `/programa/competencia/${id}`,
    body,
  )
  return response.data
}

// Resultado de aprendizaje
export async function listRAsProgrma() {
  const response = await axiosInstance.get<Array<RAAsignatura>>('/programa/ras')
  return response.data
}

export async function createRAPrograma(body: RaProgramaBody) {
  const response = await axiosInstance.post<RAAsignatura>('/programa/ra', body)
  return response.data
}

export async function editRAPrograma(id: number, body: RaProgramaBody) {
  const response = await axiosInstance.post<RAAsignatura>(
    `/programa/ra/${id}`,
    body,
  )
  return response.data
}
