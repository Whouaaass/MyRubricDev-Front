export interface StoredError {
  error: any,
  bussiness_code?: string,
  short: string
  message: string
  errorType: "UNKNOWN" | "HTTP" | "CONNECTION"
}
