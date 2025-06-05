import { queryOptions } from '@tanstack/react-query'
import { programaApi, usuariosApi } from '../api'

export const listDocentesQueryOptions = () =>
  queryOptions({
    queryKey: ['docentes'],
    queryFn: () => usuariosApi.listDocentes(),
    initialData: [],
  })

export const listCompetenciasProgramaQueryOptions = () =>
  queryOptions({
    queryKey: ['competencias'],
    queryFn: () => programaApi.listCompetenciasPrograma(),
    initialData: [],
  })

export const listRAsProgramaQueryOptions = () =>
  queryOptions({
    queryKey: ['ras'],
    queryFn: () => programaApi.listRAsProgrma(),
    initialData: [],
  })
