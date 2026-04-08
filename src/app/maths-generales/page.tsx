import { mathsGeneralesChapters } from "@/data/maths-generales"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MathsGeneralesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Maths Generales
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          10 chapitres couvrant l&apos;analyse, les suites, complexes et matrices
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {mathsGeneralesChapters.map((chapter) => (
          <Link key={chapter.slug} href={`/maths-generales/${chapter.slug}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-indigo-200 cursor-pointer group">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{chapter.icon}</span>
                    <CardTitle className="text-base group-hover:text-indigo-600 transition-colors">
                      {chapter.title}
                    </CardTitle>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-3">{chapter.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {chapter.days.map((d) => (
                    <Badge key={d} variant="secondary" className="text-xs">
                      Jour {d}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
