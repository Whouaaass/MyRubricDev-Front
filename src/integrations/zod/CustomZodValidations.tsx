import { z } from 'zod'

export default class CustomZodValidations {

  /** default validation for username */
  static username() {
    return z.string().min(1, 'El usuario es requerido')
  }
  /** default validation for email */
  static email() {
    return z
      .string()
      .email('El correo electrónico no es válido')
      .min(1, 'El correo electrónico es requerido')
  }
  /** Defauld validation for password */
  static password() {
    return z
      .string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(20, 'La contraseña no puede tener más de 20 caracteres')
    // .regex(/[a-zA-Z]/, 'La contraseña debe contener al menos una letra')
    // .regex(/[0-9]/, 'La contraseña debe contener al menos un número')
  }
  /** Default validation for passwordConfirmation.
   * This does not makes the comparassion to password
   */
  static passwordConfirmation() {
    return z.string().min(1, 'Debe confirmar la contraseña')
  }
}
