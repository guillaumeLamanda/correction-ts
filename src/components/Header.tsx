import { useContext } from "react"
import { RoleContext } from "../contexts/RoleContext"

export function Header() {
  const {role, setRole} = useContext(RoleContext)

  const handleRoleChange = () => {
    setRole(role==='admin' ? 'user' : 'admin')
  }
  return (
    <header>
      <span>CS Rules</span>
      <button onClick={handleRoleChange}>Change Role</button>
    </header>
  )
}
