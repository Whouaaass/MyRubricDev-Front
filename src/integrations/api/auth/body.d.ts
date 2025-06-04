type createDocenteBody = {
  nombre: string
  apellido: string
  correoAcademico: string
  tipoIdentificacion: string
  identificacion: string
  tipoDocente: 'CATEDRA' | 'TIEMPO_COMPLETO' | 'PLANTA'
  tituloAcademico: string  
}
