interface Asignatura {
  id: number
  nombre: string
  creditos: number
  codigo: string
  objetivos: string
  semestre: number
}

interface AsignacionAsignatura {
  id: number
  asignatura: Asignatura
  docente: Docente
  competencia: CompetenciaAsignatura
  periodo: string
}
