import { sujets } from "@/data/sujets"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, BookOpen, Cpu } from "lucide-react"

const typeConfig = {
  "maths-generales": {
    label: "Maths Generales",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: BookOpen,
  },
  "maths-appliquees": {
    label: "Maths Appliquees",
    color: "bg-green-100 text-green-700 border-green-200",
    icon: Cpu,
  },
  complet: {
    label: "Sujet Complet",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    icon: FileText,
  },
}

export default function SujetsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Sujets d&apos;Examen
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Entraine-toi avec des sujets types pour te preparer au jour J
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sujets.map((sujet) => {
          const config = typeConfig[sujet.type]
          const Icon = config.icon

          return (
            <Card key={sujet.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-100 p-2.5">
                      <Icon className="h-5 w-5 text-slate-600" />
                    </div>
                    <CardTitle className="text-base">{sujet.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-3">{sujet.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={config.color}>
                    {config.label}
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {sujet.duration}
                  </Badge>
                  <Badge variant="secondary">Jour {sujet.dayNumber}</Badge>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Advice Card */}
      <Card className="bg-amber-50 border-amber-100">
        <CardContent className="py-4">
          <h3 className="text-sm font-semibold text-amber-900 mb-2">
            Conseils pour les sujets
          </h3>
          <ul className="space-y-1 text-sm text-amber-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              Mets-toi en conditions reelles : chronometre, pas de telephone
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              Commence par les Maths Appliquees pour securiser des points
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              Apres chaque sujet, analyse tes erreurs et refais les questions ratees
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
