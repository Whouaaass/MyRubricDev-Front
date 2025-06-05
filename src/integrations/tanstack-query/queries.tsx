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

export const listRAsAsignaturaByCompetenciaQueryOptions = (
  id: number | undefined,
) =>
  queryOptions({
    queryKey: ['ras', 'asignatura', 'competencia', id],
    queryFn: () => {
      if (!id) throw Error('no id provided')
      return asignaturaApi.listarRAsDeCompetencia(id)
    },
    initialData: [],
    enabled: !!id,
  })

export const listAsignaturasQueryOptions = () =>
  queryOptions({
    queryKey: ['asignaturas'],
    queryFn: () => asignaturaApi.listarAsignaturas(),
    initialData: [],
  })

export const listAsignacionesQueryOptions = () =>
  queryOptions({
    queryKey: ['asignaciones'],
    queryFn: () => asignaturaApi.listarAsignacionesAsignatura(),
    initialData: [],
  })

export const asignacionQueryOptions = (id: number | undefined) =>
  queryOptions({
    queryKey: ['asignacion', id],
    queryFn: () => {
      if (!id) throw new Error('no id provided')
      return asignaturaApi.obtenerAsignacion(id)
    },
    enabled: !!id,
  })
