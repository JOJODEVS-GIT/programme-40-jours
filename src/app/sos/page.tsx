"use client"

import { sosSituations, motivationQuotes } from "@/data/sos"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { LifeBuoy, Quote, ArrowRight } from "lucide-react"

export default function SOSPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          SOS - Aide d&apos;urgence
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Bloque ? Stresse ? Pas de panique. Trouve la solution ici.
        </p>
      </div>

      {/* Motivational Quotes */}
      <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-4">
            <Quote className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-indigo-900">Motivation</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {motivationQuotes.map((quote, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg bg-white/60 p-3 border border-indigo-100"
              >
                <span className="mt-0.5 text-indigo-400 text-lg leading-none">&laquo;</span>
                <p className="text-sm text-indigo-800 italic">{quote}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SOS Situations */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <LifeBuoy className="h-5 w-5 text-red-500" />
          <h2 className="text-xl font-semibold text-slate-900">
            Situations d&apos;urgence
          </h2>
        </div>

        <Accordion className="space-y-3">
          {sosSituations.map((situation) => (
            <AccordionItem
              key={situation.number}
              value={`sos-${situation.number}`}
              className="border rounded-lg px-4 bg-white shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <Badge
                    variant="outline"
                    className="shrink-0 bg-red-50 text-red-600 border-red-200"
                  >
                    #{situation.number}
                  </Badge>
                  <span className="font-medium text-slate-900">
                    {situation.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ol className="space-y-2 ml-2">
                  {situation.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                        {i + 1}
                      </div>
                      <p className="text-sm text-slate-600 pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Quick Links */}
      <Card className="bg-slate-50">
        <CardContent className="py-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Liens rapides</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            <a
              href="/fiches-reflexes"
              className="flex items-center justify-between rounded-md bg-white p-3 border hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <span className="text-sm text-slate-600">Fiches Reflexes</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="/timer"
              className="flex items-center justify-between rounded-md bg-white p-3 border hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <span className="text-sm text-slate-600">Timer Pomodoro</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="/planning"
              className="flex items-center justify-between rounded-md bg-white p-3 border hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <span className="text-sm text-slate-600">Planning 40 Jours</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="/sujets"
              className="flex items-center justify-between rounded-md bg-white p-3 border hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <span className="text-sm text-slate-600">Sujets d&apos;Examen</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
