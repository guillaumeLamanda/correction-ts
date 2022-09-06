import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <nav className="px-10 py-4 bg-gray-200">
      <ul className="flex items-center space-x-10">
        <li className="text-lg font-semibold hover:text-red-500 transition
duration-200">
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className="text-lg font-semibold hover:text-red-500 transition
duration-200">
          <NavLink to='/new'>New</NavLink>
        </li>
      </ul> </nav>
  )
}
