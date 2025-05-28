import type { PropsWithChildren } from "react";

export function ElementGrid({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {children}
    </div>
  )
}