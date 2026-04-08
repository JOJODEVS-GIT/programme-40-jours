"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Cpu,
  FileText,
  ClipboardList,
  Timer,
  LifeBuoy,
  Target,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Planning 40 Jours", href: "/planning", icon: Calendar },
  { name: "Maths Générales", href: "/maths-generales", icon: BookOpen },
  { name: "Maths Appliquées", href: "/maths-appliquees", icon: Cpu },
  { name: "Fiches Réflexes", href: "/fiches-reflexes", icon: FileText },
  { name: "Sujets d'Examen", href: "/sujets", icon: ClipboardList },
  { name: "Timer Pomodoro", href: "/timer", icon: Timer },
  { name: "SOS", href: "/sos", icon: LifeBuoy },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-700 pt-2">
          <Target className="h-8 w-8 text-indigo-400" />
          <div>
            <h1 className="text-lg font-bold text-white">Programme 40J</h1>
            <p className="text-xs text-slate-400">DT IMI Maths</p>
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex gap-x-3 rounded-md p-2.5 text-sm font-medium leading-6 transition-colors",
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-auto border-t border-slate-700 pt-4">
            <div className="flex items-center gap-2 rounded-md bg-indigo-600/20 px-3 py-2">
              <Target className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Objectif : 12/20</span>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
