"use client"

import { useTimer } from "@/hooks/useTimer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Coffee, Brain, Sofa } from "lucide-react"

const modeConfig = {
  work: {
    label: "Travail",
    color: "bg-indigo-600 text-white",
    bgGradient: "from-indigo-950 to-slate-900",
    ring: "text-indigo-400",
    icon: Brain,
  },
  break: {
    label: "Pause",
    color: "bg-emerald-600 text-white",
    bgGradient: "from-emerald-950 to-slate-900",
    ring: "text-emerald-400",
    icon: Coffee,
  },
  longBreak: {
    label: "Longue Pause",
    color: "bg-amber-600 text-white",
    bgGradient: "from-amber-950 to-slate-900",
    ring: "text-amber-400",
    icon: Sofa,
  },
} as const

export default function TimerPage() {
  const {
    mode,
    isRunning,
    sessionsCompleted,
    minutes,
    seconds,
    start,
    pause,
    reset,
    switchMode,
  } = useTimer()

  const config = modeConfig[mode]
  const ModeIcon = config.icon

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Timer Pomodoro
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          25 min travail, 5 min pause, 15 min longue pause apres 4 sessions
        </p>
      </div>

      {/* Timer Display */}
      <Card className={`bg-gradient-to-br ${config.bgGradient} border-0`}>
        <CardContent className="py-12">
          <div className="flex flex-col items-center gap-6">
            {/* Mode Badge */}
            <div className="flex items-center gap-2">
              <ModeIcon className={`h-5 w-5 ${config.ring}`} />
              <Badge className={config.color}>{config.label}</Badge>
            </div>

            {/* Timer */}
            <div className="relative">
              <svg width="280" height="280" className="-rotate-90">
                <circle
                  cx="140"
                  cy="140"
                  r="120"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="140"
                  cy="140"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 120}
                  strokeDashoffset={
                    2 * Math.PI * 120 * (1 - (minutes * 60 + seconds) / (mode === "work" ? 25 * 60 : mode === "break" ? 5 * 60 : 15 * 60))
                  }
                  className={`${config.ring} transition-all duration-1000 ease-linear`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-7xl font-bold text-white tabular-nums tracking-tight">
                  {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={reset}
                className="h-12 w-12 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
              <Button
                onClick={isRunning ? pause : start}
                className="h-16 w-16 rounded-full text-lg"
                size="icon"
              >
                {isRunning ? (
                  <Pause className="h-7 w-7" />
                ) : (
                  <Play className="h-7 w-7 ml-1" />
                )}
              </Button>
              <div className="h-12 w-12" /> {/* Spacer for symmetry */}
            </div>

            {/* Sessions Counter */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    n <= sessionsCompleted % 4 || (sessionsCompleted > 0 && sessionsCompleted % 4 === 0 && n === 4)
                      ? "bg-white"
                      : "bg-white/20"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-white/60">
                {sessionsCompleted} session{sessionsCompleted !== 1 ? "s" : ""} completee{sessionsCompleted !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mode Switcher */}
      <div>
        <h2 className="text-sm font-medium text-slate-500 mb-3">Changer de mode</h2>
        <div className="flex flex-wrap gap-3">
          <Button
            variant={mode === "work" ? "default" : "outline"}
            onClick={() => switchMode("work")}
            className="gap-2"
          >
            <Brain className="h-4 w-4" />
            Travail (25 min)
          </Button>
          <Button
            variant={mode === "break" ? "default" : "outline"}
            onClick={() => switchMode("break")}
            className="gap-2"
          >
            <Coffee className="h-4 w-4" />
            Pause (5 min)
          </Button>
          <Button
            variant={mode === "longBreak" ? "default" : "outline"}
            onClick={() => switchMode("longBreak")}
            className="gap-2"
          >
            <Sofa className="h-4 w-4" />
            Longue Pause (15 min)
          </Button>
        </div>
      </div>

      {/* Tips */}
      <Card className="bg-indigo-50 border-indigo-100">
        <CardContent className="py-4">
          <h3 className="text-sm font-semibold text-indigo-900 mb-2">
            Technique Pomodoro
          </h3>
          <ul className="space-y-1 text-sm text-indigo-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              25 minutes de travail concentre (pas de telephone !)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              5 minutes de pause (boire, marcher)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              Apres 4 sessions : 15 minutes de longue pause
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              4 cycles = 2h de travail efficace
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
