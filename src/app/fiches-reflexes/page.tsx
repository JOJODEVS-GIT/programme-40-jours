"use client"

import { FormulaBlock } from "@/components/course/FormulaBlock"
import {
  derivees,
  reglesDerivation,
  lnFormulas,
  expFormulas,
  limites,
  primitives,
  integraleFormulas,
  eqDiffFormulas,
  eqDiff2ndOrder,
  suitesFormulas,
  complexesFormulas,
  matricesFormulas,
  trigoValues,
  erreurs,
  astuces,
} from "@/data/fiches-reflexes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Lightbulb } from "lucide-react"

const categoryLabels: Record<string, string> = {
  before: "Avant l'examen",
  "during-general": "Pendant - Maths Generales",
  "during-applied": "Pendant - Maths Appliquees",
  end: "Fin d'epreuve",
}

const categoryColors: Record<string, string> = {
  before: "bg-blue-50 border-blue-200 text-blue-700",
  "during-general": "bg-purple-50 border-purple-200 text-purple-700",
  "during-applied": "bg-green-50 border-green-200 text-green-700",
  end: "bg-orange-50 border-orange-200 text-orange-700",
}

export default function FichesReflexesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Fiches Reflexes
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Toutes les formules essentielles en un coup d&apos;oeil
        </p>
      </div>

      <Tabs defaultValue="derivees" className="w-full">
        <TabsList className="flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="derivees" className="text-xs">Derivees</TabsTrigger>
          <TabsTrigger value="lnexp" className="text-xs">Ln &amp; Exp</TabsTrigger>
          <TabsTrigger value="limites" className="text-xs">Limites</TabsTrigger>
          <TabsTrigger value="primitives" className="text-xs">Primitives &amp; Integrales</TabsTrigger>
          <TabsTrigger value="eqdiff" className="text-xs">Eq. Diff</TabsTrigger>
          <TabsTrigger value="suites" className="text-xs">Suites &amp; Complexes</TabsTrigger>
          <TabsTrigger value="trigo" className="text-xs">Trigo</TabsTrigger>
          <TabsTrigger value="erreurs" className="text-xs">Erreurs</TabsTrigger>
          <TabsTrigger value="astuces" className="text-xs">Astuces</TabsTrigger>
        </TabsList>

        {/* Derivees */}
        <TabsContent value="derivees" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tableau des derivees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">Fonction f(x)</th>
                      <th className="text-left py-2 text-slate-500 font-medium">Derivee f&apos;(x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {derivees.map((d, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <FormulaBlock math={d.func} display={false} />
                        </td>
                        <td className="py-3">
                          <FormulaBlock math={d.result} display={false} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regles de derivation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {reglesDerivation.map((r, i) => (
                <div key={i} className="rounded-md bg-slate-50 p-3">
                  <FormulaBlock math={r} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ln & Exp */}
        <TabsContent value="lnexp" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Proprietes de ln</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {lnFormulas.map((f, i) => (
                <div key={i} className="rounded-md bg-blue-50 p-3">
                  <FormulaBlock math={f} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proprietes de exp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {expFormulas.map((f, i) => (
                <div key={i} className="rounded-md bg-amber-50 p-3">
                  <FormulaBlock math={f} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Limites */}
        <TabsContent value="limites" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Limites fondamentales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">Limite</th>
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">Resultat</th>
                      <th className="text-left py-2 text-slate-500 font-medium">Astuce</th>
                    </tr>
                  </thead>
                  <tbody>
                    {limites.map((l, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <FormulaBlock math={l.limit} display={false} />
                        </td>
                        <td className="py-3 pr-4">
                          <FormulaBlock math={l.result} display={false} />
                        </td>
                        <td className="py-3 text-xs text-slate-500 italic">{l.tip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Primitives & Integrales */}
        <TabsContent value="primitives" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tableau des primitives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">f(x)</th>
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">F(x)</th>
                      <th className="text-left py-2 text-slate-500 font-medium">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {primitives.map((p, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <FormulaBlock math={p.func} display={false} />
                        </td>
                        <td className="py-3 pr-4">
                          <FormulaBlock math={p.result} display={false} />
                        </td>
                        <td className="py-3 text-xs text-slate-500">{p.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Formules d&apos;integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {integraleFormulas.map((f, i) => (
                <div key={i} className="rounded-md bg-emerald-50 p-3">
                  <FormulaBlock math={f} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eq. Diff */}
        <TabsContent value="eqdiff" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Equations differentielles du 1er ordre</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">Type</th>
                      <th className="text-left py-2 text-slate-500 font-medium">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eqDiffFormulas.map((eq, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <FormulaBlock math={eq.type} display={false} />
                        </td>
                        <td className="py-3">
                          <FormulaBlock math={eq.solution} display={false} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Equations du 2nd ordre</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">Cas</th>
                      <th className="text-left py-2 text-slate-500 font-medium">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eqDiff2ndOrder.map((eq, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <FormulaBlock math={eq.cas} display={false} />
                        </td>
                        <td className="py-3">
                          <FormulaBlock math={eq.solution} display={false} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Suites & Complexes */}
        <TabsContent value="suites" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Suites numeriques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {suitesFormulas.map((f, i) => (
                <div key={i} className="rounded-md bg-indigo-50 p-3">
                  <FormulaBlock math={f} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nombres complexes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {complexesFormulas.map((f, i) => (
                <div key={i} className="rounded-md bg-purple-50 p-3">
                  <FormulaBlock math={f} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calcul matriciel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {matricesFormulas.map((f, i) => (
                <div key={i} className="rounded-md bg-rose-50 p-3">
                  <FormulaBlock math={f} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trigo */}
        <TabsContent value="trigo" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Valeurs trigonometriques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">Angle</th>
                      <th className="text-left py-2 pr-4 text-slate-500 font-medium">cos</th>
                      <th className="text-left py-2 text-slate-500 font-medium">sin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trigoValues.map((t, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <FormulaBlock math={t.angle} display={false} />
                        </td>
                        <td className="py-3 pr-4">
                          <FormulaBlock math={t.cos} display={false} />
                        </td>
                        <td className="py-3">
                          <FormulaBlock math={t.sin} display={false} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Erreurs */}
        <TabsContent value="erreurs" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {erreurs.map((err) => (
              <Card key={err.number} className="border-l-4 border-l-red-400">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <CardTitle className="text-sm">
                      #{err.number} - {err.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">{err.description}</p>
                  {err.wrong && (
                    <div className="rounded bg-red-50 p-2">
                      <p className="text-xs text-red-600 font-medium mb-1">FAUX :</p>
                      <FormulaBlock math={err.wrong} display={false} />
                    </div>
                  )}
                  {err.correct && (
                    <div className="rounded bg-green-50 p-2">
                      <p className="text-xs text-green-600 font-medium mb-1">VRAI :</p>
                      <FormulaBlock math={err.correct} display={false} />
                    </div>
                  )}
                  <Separator />
                  <p className="text-xs text-slate-500 italic">{err.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Astuces */}
        <TabsContent value="astuces" className="mt-4 space-y-6">
          {(["before", "during-general", "during-applied", "end"] as const).map(
            (cat) => {
              const tips = astuces.filter((a) => a.category === cat)
              if (tips.length === 0) return null
              return (
                <div key={cat}>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={categoryColors[cat]}>{categoryLabels[cat]}</Badge>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {tips.map((tip) => (
                      <Card key={tip.number}>
                        <CardContent className="py-4">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
                            <div>
                              <p className="text-sm font-medium text-slate-900">
                                #{tip.number} - {tip.title}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">{tip.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            }
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
