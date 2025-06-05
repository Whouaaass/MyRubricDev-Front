type DocenteType = 'CATEDRA' | 'TIEMPO_COMPLETO' | 'PLANTA'

interface Docente {
  id: number
  activo: null | boolean
  apellido: string
  correoAcademico: string
  identificacion: string
  nombre: string
  tipoDocente: DocenteType | string,
  tipoIdentificacion: string
  tituloAcademico: 'PREGRADO' | string
}
