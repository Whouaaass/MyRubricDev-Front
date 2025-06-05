// src/stores/sessionStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AppLocalStorage } from '@/integrations/localStorage/AppLocalStorage'
import { authApi } from '@/integrations/api'

export type SessionState = {
  rol: string | null
  token: string | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export function getContext() {
  return {
    sessionStore: useSessionStore
  }
}

/** Tells if the user is authenticated in the app */
export function isAuthenticated(): boolean {
  const state = useSessionStore.getState()
  return state.isAuthenticated && !!state.token
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      rol: null,
      token: null,
      isAuthenticated: false,

      login: async (username, password) => {
        const data = await authApi.login(username, password)
        AppLocalStorage.saveToken(data.token)
        console.log(data.token)
        set({ token: data.token, isAuthenticated: true, rol: data.rol })
      },

      logout: () => {
        AppLocalStorage.clearSession()
        set({
          rol: null,
          token: null,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: 'session-storage', // key in localStorage
      partialize: (state) => ({
        rol: state.rol,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
