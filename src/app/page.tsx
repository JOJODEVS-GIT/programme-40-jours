"use client"

import { useProgress } from "@/hooks/useProgress"
import { phases, days } from "@/data/planning"
import { motivationQuotes } from "@/data/sos"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Flame,
  Target,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const phaseColors: Record<string, string> = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
}

const phaseBorderColors: Record<string, string> = {
  blue: "border-l-blue-500",
  purple: "border-l-purple-500",
  green: "border-l-green-500",
  orange: "border-l-orange-500",
}

function getDailyQuote(): string {
  const today = new Date()
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  )
  return motivationQuotes[dayOfYear % motivationQuotes.length]
}

function getStreak(dayProgress: Record<number, { completed: boolean }>): number {
  let streak = 0
  for (let i = 40; i >= 1; i--) {
    if (dayProgress[i]?.completed) {
      streak++
    } else if (streak > 0) {
      break
    }
  }
  return streak
}

export default function DashboardPage() {
  const { dayProgress, completedDays, totalStudyMinutes, loaded } = useProgress()

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-slate-400">Chargement...</div>
      </div>
    )
  }

  const quote = getDailyQuote()
  const streak = getStreak(dayProgress)
  const daysRemaining = 40 - completedDays
  const studyHours = (totalStudyMinutes / 60).toFixed(1)
  const progressPercent = (completedDays / 40) * 100

  // Find today's suggested day: first incomplete day
  const suggestedDay = days.find((d) => !dayProgress[d.dayNumber]?.completed) || days[0]

  // SVG circle progress
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Tableau de bord
        </h1>
        <div className="flex items-start gap-2 rounded-lg bg-indigo-50 p-4 border border-indigo-100">
          <Flame className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
          <p className="text-sm font-medium italic text-indigo-800">
            &laquo; {quote} &raquo;
          </p>
        </div>
      </div>

      {/* Progress Circle + Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Big Progress Circle */}
        <Card className="md:col-span-1 lg:row-span-2">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="relative">
              <svg width="200" height="200" className="-rotate-90">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#e2e8f0"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#4f46e5"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-900">
                  {completedDays}
                </span>
                <span className="text-sm text-slate-500">/ 40 jours</span>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-600">
              Progression globale
            </p>
            <p className="text-2xl font-bold text-indigo-600">
              {Math.round(progressPercent)}%
            </p>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:col-span-1 lg:col-span-2">
          <Card>
            <CardContent className="flex items-center gap-4 py-5">
              <div className="rounded-lg bg-indigo-100 p-3">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Jours completes</p>
                <p className="text-2xl font-bold text-slate-900">
                  {completedDays}
                  <span className="text-sm font-normal text-slate-400"> / 40</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 py-5">
              <div className="rounded-lg bg-emerald-100 p-3">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Heures d&apos;etude</p>
                <p className="text-2xl font-bold text-slate-900">
                  {studyHours}
                  <span className="text-sm font-normal text-slate-400"> h</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 py-5">
              <div className="rounded-lg bg-amber-100 p-3">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Jours restants</p>
                <p className="text-2xl font-bold text-slate-900">{daysRemaining}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 py-5">
              <div className="rounded-lg bg-rose-100 p-3">
                <Flame className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Serie en cours</p>
                <p className="text-2xl font-bold text-slate-900">
                  {streak}
                  <span className="text-sm font-normal text-slate-400"> jours</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Today Card */}
      <Card className="border-l-4 border-l-indigo-500 bg-gradient-to-r from-indigo-50/50 to-white">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-indigo-600" />
              Aujourd&apos;hui : Jour {suggestedDay.dayNumber}
            </CardTitle>
            <Badge variant="outline" className="bg-indigo-100 text-indigo-700 border-indigo-200">
              Phase {suggestedDay.phase}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-slate-900 mb-2">{suggestedDay.title}</h3>
          <ul className="space-y-1 text-sm text-slate-600 mb-4">
            {suggestedDay.tasks.slice(0, 3).map((task, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {task}
              </li>
            ))}
            {suggestedDay.tasks.length > 3 && (
              <li className="text-slate-400 pl-3.5">
                +{suggestedDay.tasks.length - 3} autres taches...
              </li>
            )}
          </ul>
          <Link
            href="/planning"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Voir le planning complet
            <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>

      {/* Phase Cards */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Phases du programme</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {phases.map((phase) => {
            const phaseDays = days.filter((d) => d.phase === phase.number)
            const completedInPhase = phaseDays.filter(
              (d) => dayProgress[d.dayNumber]?.completed
            ).length
            const phasePercent = phaseDays.length > 0
              ? Math.round((completedInPhase / phaseDays.length) * 100)
              : 0

            return (
              <Card
                key={phase.number}
                className={`border-l-4 ${phaseBorderColors[phase.color]}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">
                      Phase {phase.number}
                    </CardTitle>
                    <Badge
                      className={`${phaseColors[phase.color]} text-white text-xs`}
                    >
                      J{phase.days[0]}-J{phase.days[1]}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{phase.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-xs text-slate-500">{phase.description}</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>
                        {completedInPhase}/{phaseDays.length} jours
                      </span>
                      <span>{phasePercent}%</span>
                    </div>
                    <Progress value={phasePercent} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
