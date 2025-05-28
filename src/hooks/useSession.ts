import { useRouter } from "@tanstack/react-router"
import { useSessionStore } from "@/store/sessionStore"

export function useSession() {
  const storeLogout = useSessionStore((state) => state.logout)
  const router = useRouter()

  const logout = () => {
    storeLogout()
    router.invalidate()
  }
  return {
    logout,
  }
}
