import { useContext } from "react"
import { RoleContext } from "../contexts/RoleContext"

export function Header() {
  const {role, setRole} = useContext(RoleContext)

  const handleRoleChange = () => {
    setRole(role==='admin' ? 'user' : 'admin')
  }
  return (
    <header className="w-full px-4 py-2 flex justify-between">
      <span className="text-xl font-bold underline decoration-1 decoration-wavy decoration-fuchsia-500/50 underline-offset-4 bg-clip-text bg-gradient-to-tr from-blue-500 to-fuchsia-500 text-transparent">CS Rules</span>
      <button className="rounded bg-blue-100 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-500 px-1 py-2 " onClick={handleRoleChange}>Change Role</button>
    </header>
  )
}
