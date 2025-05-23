// src/stores/sessionStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AppLocalStorage } from '@/integrations/localStorage/AppLocalStorage'

type User = {
  id: string
  name: string
  email: string
  role?: string
}

type SessionState = {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: (user, token) => {
        AppLocalStorage.saveToken(token)
        set({
          user,
          token,
          isAuthenticated: true,
        })
      },

      logout: () => {
        AppLocalStorage.clearSession()
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: 'session-storage', // key in localStorage
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
