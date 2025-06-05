import { AxiosError } from 'axios'
import type { StoredError } from './error.model'
import type { ApiErrorResponse } from '../api/models/error.model'

export function parseError(error: unknown): StoredError {
  if (error instanceof AxiosError) {
    return parseAxiosError(error)
  }

  if (error instanceof Error) {
    return {
      error: error,
      short: '¿¡Error!?',
      message: `Error: ${error}`,
      errorType: 'UNKNOWN',
    }
  }

  if (typeof error === 'string')
    return {
      error: error,
      short: '¿¡Error!?',
      message: `Error: ${error}`,
      errorType: 'UNKNOWN',
    }

  return {
    error: error,
    short: 'Error desconocido',
    message: 'Te has encontrado con un error inesperado, vuelve a intentarlo',
    errorType: 'UNKNOWN',
  }
}

/** Convierte un error de axios a un error que maneja el modulo */
function parseAxiosError(error: AxiosError<ApiErrorResponse | any>): StoredError {
  if (error.status) {
    const message = error.response?.data?.details ?? error.message
    return {
      error: error.name,
      bussiness_code: error.response?.data.errorCode ?? undefined,
      short: getHttpErrorTitle(error.status),
      message,
      errorType: 'HTTP',
    }
  }
  return {
    error: error.name,
    short: "Error de conexión",
    message: error.message,
    errorType: 'CONNECTION'
  }
}

/** Obtiene un mensaje corto interpretando el codigo de error */
function getHttpErrorTitle(statusCode: number) {
  const titles = {
    400: 'Petición incorrecta',
    401: 'No autorizado',
    403: 'Prohibido',
    404: 'No encontrado',
    405: 'Método no permitido',
    408: 'Tiempo de espera agotado',
    409: 'Conflicto',
    422: 'Datos no válidos',
    429: 'Demasiadas peticiones',
    500: 'Error del servidor',
    502: 'Puerta de enlace no válida',
    503: 'Servicio no disponible',
    504: 'Tiempo de espera agotado',
  }

  return titles[statusCode as keyof typeof titles] || 'Error inesperado'
}
