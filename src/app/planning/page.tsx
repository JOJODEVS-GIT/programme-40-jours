"use client"

import { useProgress } from "@/hooks/useProgress"
import { phases, days } from "@/data/planning"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

const phaseColorMap: Record<string, { badge: string; bg: string; border: string; text: string }> = {
  blue: {
    badge: "bg-blue-500 text-white",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
  },
  purple: {
    badge: "bg-purple-500 text-white",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
  },
  green: {
    badge: "bg-green-500 text-white",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
  },
  orange: {
    badge: "bg-orange-500 text-white",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
  },
}

export default function PlanningPage() {
  const { dayProgress, completedDays, toggleDay, loaded } = useProgress()

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-slate-400">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Planning 40 Jours
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {completedDays}/40 jours completes
        </p>
      </div>

      {phases.map((phase) => {
        const phaseDays = days.filter((d) => d.phase === phase.number)
        const completedInPhase = phaseDays.filter(
          (d) => dayProgress[d.dayNumber]?.completed
        ).length
        const phasePercent =
          phaseDays.length > 0
            ? Math.round((completedInPhase / phaseDays.length) * 100)
            : 0
        const colors = phaseColorMap[phase.color]

        return (
          <section key={phase.number} className="space-y-4">
            {/* Phase Header */}
            <div className={`rounded-lg p-4 ${colors.bg} border ${colors.border}`}>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-slate-900">
                  Phase {phase.number}
                </h2>
                <Badge className={colors.badge}>
                  Jours {phase.days[0]} - {phase.days[1]}
                </Badge>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-3">
                {phase.title}
              </p>
              <p className="text-xs text-slate-500 mb-3">{phase.description}</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>
                    {completedInPhase}/{phaseDays.length} jours
                  </span>
                  <span>{phasePercent}%</span>
                </div>
                <Progress value={phasePercent} className="h-2" />
              </div>
            </div>

            {/* Day Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {phaseDays.map((day) => {
                const isCompleted = dayProgress[day.dayNumber]?.completed
                // Determine if this is the "current" day (first incomplete)
                const firstIncomplete = days.find(
                  (d) => !dayProgress[d.dayNumber]?.completed
                )
                const isCurrent =
                  firstIncomplete?.dayNumber === day.dayNumber

                return (
                  <Card
                    key={day.dayNumber}
                    className={`transition-all ${
                      isCompleted
                        ? "bg-emerald-50/50 border-emerald-200"
                        : isCurrent
                        ? "border-indigo-300 ring-2 ring-indigo-100"
                        : ""
                    }`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={isCompleted}
                            onCheckedChange={() => toggleDay(day.dayNumber)}
                            className="mt-0.5"
                          />
                          <div>
                            <CardTitle className="text-sm">
                              <span className={colors.text}>J{day.dayNumber}</span>
                              {" - "}
                              {day.title}
                            </CardTitle>
                          </div>
                        </div>
                        {isCompleted && (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                        )}
                        {isCurrent && !isCompleted && (
                          <Badge
                            variant="outline"
                            className="shrink-0 bg-indigo-100 text-indigo-700 border-indigo-200 text-[10px]"
                          >
                            Aujourd&apos;hui
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {day.tasks.map((task, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-xs ${
                              isCompleted
                                ? "text-slate-400 line-through"
                                : "text-slate-600"
                            }`}
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                            {task}
                          </li>
                        ))}
                      </ul>
                      {day.motivation && (
                        <p className="mt-3 text-[10px] italic text-slate-400 border-t pt-2">
                          {day.motivation}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
