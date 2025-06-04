// Resultado de aprendizaje
type LearningResultProp = {
  title: string
  description: string
  id: string | number
}

// Competencia
type CompetencyProp = {
  title: string
  description: string
  id: string | number
  ras?: Array<LearningResultProp>
}


type StudentProp = {
  name: string
}
