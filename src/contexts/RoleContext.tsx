import { createContext, useState } from "react";

type Role = "user" | "admin";

export const RoleContext = createContext<{ role: Role; setRole: (r: Role) => void }>({
  role: "user",
  setRole() {
  },
})

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("user")

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  )
}
