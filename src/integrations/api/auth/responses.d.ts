export type RegisterOkResponse = {
  username: string
  role: string
  message: stringm
}

export type LoginOkResponse = {
  token: string
  tokenType: string
  expiresIn: number
  username: string
}
