interface CompetenciaPrograma {
  id: number
  codigo: string
  descripcion: string
  nivel: string
}

interface CompetenciaAsignatura {
  id: number
  codigo: string
  descripcion: string
  competenciaProgramaId: number
}
