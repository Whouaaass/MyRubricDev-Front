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

  /**
   * Validates academic degree
   * @returns
   */
  static academicDegree() {
    return z
      .string()
      .min(1, 'El grado académico es requerido')
      .refine(
        (val) =>
          [
            'PREGRADO',
            'ESPECIALIZACION',
            'MAESTRIA',
            'DOCTORADO',
            'POSTDOCTORADO',
          ].includes(val),
        {
          message: 'Debe seleccionar un grado académico válido',
        },
      )
  }

  static docenteType() {
    return z
      .string()
      .min(1, 'El tipo de docente es requerido')
      .refine((val) => ['CATEDRA', 'TIEMPO_COMPLETO', 'PLANTA'].includes(val), {
        message: 'Debe seleccionar un tipo de docente válido',
      })
  }

  static identificationType() {
    return z.string().min(1, 'El tipo de identificación es requerido')
  }

  static identification() {
    return z.string().min(1, 'El número de identificación es requerido')
  }

  static lastname() {
    return z.string().min(1, 'El apellido es requerido')
  }

  static name() {
    return z.string().min(1, 'El nombre es requerido')
  }
}
