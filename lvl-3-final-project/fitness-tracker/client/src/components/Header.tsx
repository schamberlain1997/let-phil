import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#1e293b] border-b border-[#334155] px-8 py-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tight">
          Fitness<span className="text-[#10b981]">Tracker</span>
        </div>
        <ul className="flex gap-6">
           <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold transition-colors duration-300 ${isActive ? "text-[#10b981] border-b-2 border-[#10b981] pb-1" : "text-[#94a3b8] hover:text-[#10b981]"}`
            }
            >
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/workout"
              className={({ isActive }) =>
                `font-semibold transition-colors duration-300 ${isActive ? "text-[#10b981] border-b-2 border-[#10b981] pb-1" : "text-[#94a3b8] hover:text-[#10b981]"}`
             }
            >
              Workout
            </NavLink>
         </li>
          <li>
            <NavLink
             to="/workout-log"
              className={({ isActive }) =>
                `font-semibold transition-colors duration-300 ${isActive ? "text-[#10b981] border-b-2 border-[#10b981] pb-1" : "text-[#94a3b8] hover:text-[#10b981]"}`
              }
            >
              Workout Log
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}