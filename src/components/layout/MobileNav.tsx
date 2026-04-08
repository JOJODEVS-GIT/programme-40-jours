"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Menu,
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

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-4 bg-white px-4 py-3 shadow-sm lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={<Button variant="ghost" size="icon" className="-m-2.5" />}
        >
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="w-72 bg-slate-900 p-0 text-white [&>button]:text-white">
          <div className="flex h-16 items-center gap-2 border-b border-slate-700 px-6">
            <Target className="h-8 w-8 text-indigo-400" />
            <div>
              <h1 className="text-lg font-bold text-white">Programme 40J</h1>
              <p className="text-xs text-slate-400">DT IMI Maths</p>
            </div>
          </div>
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex gap-x-3 rounded-md p-2.5 text-sm font-medium leading-6 transition-colors",
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      )}
                    >
                      <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-slate-400")} />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2">
        <Target className="h-5 w-5 text-indigo-600" />
        <span className="text-sm font-semibold text-slate-900">Programme 40 Jours</span>
      </div>
    </div>
  )
}
