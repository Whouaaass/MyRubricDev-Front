import { queryOptions } from '@tanstack/react-query'
import { asignaturaApi, programaApi, usuariosApi } from '../api'

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

export const listAsignaturasQueryOptions = () =>
  queryOptions({
    queryKey: ['ras'],
    queryFn: () => asignaturaApi.listarAsignaturas(),
    initialData: [],
  })
