interface AsignaturaBody {
  nombre: string
  creditos: number
  codigo: string
  objetivos: string
  semestre: number
}

interface AsignarAsignaturaBody {
  docenteId: number
  asignaturaId: number
  competenciaId: number
}

interface CompetenciaAsignaturaBody {
  competenciaProgramaId: number
  descripcion: string
  codigo: string
  asignaturaId: number
}

interface RaAsignaturaBody {
  codigo: string
  descripcion: string
  idCompetencia: number
}
