import { queryOptions } from '@tanstack/react-query'
import { usuariosApi } from '../api'

export const listDocentesQueryOptions = () =>
  queryOptions({
    queryKey: ['docentes'],
    queryFn: () => usuariosApi.listDocentes(),
    initialData: [],
  })
