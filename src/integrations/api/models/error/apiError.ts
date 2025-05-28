interface ApiErrorResponse {
  details: string
  errorCode: string
  fieldErrors: null | Record<string, string>
  httpStatus: number
  message: string
  path: string
  success: boolean
  timestamp: string
  validationErrors: null | Record<string, string>
}
