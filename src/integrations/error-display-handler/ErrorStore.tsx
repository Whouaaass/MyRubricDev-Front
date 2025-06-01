import { create } from 'zustand'
import { parseError } from './errorParsers'
import type { StoredError } from './error.model'

interface ErrorStore {
  /** Error */
  error: StoredError | null
  /** Establece el error */
  setError: (error: unknown | StoredError) => void
  /** Cleans the error */
  clearError: () => void
}

export const useErrorStore = create<ErrorStore>()((set) => ({
  error: null,
  setError: (err) => set({ error: parseError(err) }),
  clearError: () => set({ error: null }),
}))
