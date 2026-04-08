"use client"

import { use } from "react"
import { useProgress } from "@/hooks/useProgress"
import { mathsAppliqueesChapters, chapterContents } from "@/data/maths-appliquees"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, Lightbulb, PencilLine } from "lucide-react"
import Link from "next/link"
import { CoursTab, MethodesTab, ExercicesTab } from "@/components/course/ChapterRenderer"

export default function MathsAppliquessChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { chapterProgress, toggleChapter, loaded } = useProgress()

  const chapter = mathsAppliqueesChapters.find((c) => c.slug === slug)

  if (!chapter) {
    return (
      <div className="space-y-4">
        <Link
          href="/maths-appliquees"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux chapitres
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Chapitre non trouvé</h1>
      </div>
    )
  }

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-slate-400">Chargement...</div>
      </div>
    )
  }

  const progress = chapterProgress[slug] || {
    courseRead: false,
    methodsDone: false,
    exercisesDone: false,
  }

  const completedCount = [progress.courseRead, progress.methodsDone, progress.exercisesDone].filter(Boolean).length

  const chapterData = chapterContents[slug]

  return (
    <div className="space-y-6">
      <Link
        href="/maths-appliquees"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux chapitres
      </Link>

      <div className="flex items-start gap-4">
        <span className="text-4xl">{chapter.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{chapter.title}</h1>
          <p className="text-sm text-slate-500 mt-1">{chapter.description}</p>
          <div className="flex items-center gap-2 mt-2">
            {chapter.days.map((d) => (
              <Badge key={d} variant="secondary" className="text-xs">
                Jour {d}
              </Badge>
            ))}
            <Separator orientation="vertical" className="h-4" />
            <span className="text-xs text-slate-400">{completedCount}/3 sections</span>
          </div>
        </div>
      </div>

      {/* Progress Checkboxes */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Progression du chapitre</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={progress.courseRead}
                onCheckedChange={() => toggleChapter(slug, "courseRead")}
              />
              <BookOpen className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Cours lu</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={progress.methodsDone}
                onCheckedChange={() => toggleChapter(slug, "methodsDone")}
              />
              <Lightbulb className="h-4 w-4 text-amber-500" />
              <span className="text-sm">Méthodes faites</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={progress.exercisesDone}
                onCheckedChange={() => toggleChapter(slug, "exercisesDone")}
              />
              <PencilLine className="h-4 w-4 text-green-500" />
              <span className="text-sm">Exercices faits</span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="cours" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="cours" className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            Cours
          </TabsTrigger>
          <TabsTrigger value="methodes" className="flex items-center gap-1.5">
            <Lightbulb className="h-4 w-4" />
            Méthodes
          </TabsTrigger>
          <TabsTrigger value="exercices" className="flex items-center gap-1.5">
            <PencilLine className="h-4 w-4" />
            Exercices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cours" className="mt-4">
          {chapterData ? (
            <CoursTab chapterData={chapterData} />
          ) : (
            <Card>
              <CardContent className="py-8">
                <div className="text-center text-slate-400 space-y-2">
                  <BookOpen className="h-12 w-12 mx-auto text-slate-300" />
                  <p className="text-lg font-medium">Contenu du cours à venir...</p>
                  <p className="text-sm">
                    Le cours complet de &laquo; {chapter.title} &raquo; sera disponible prochainement.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="methodes" className="mt-4">
          {chapterData ? (
            <MethodesTab chapterData={chapterData} />
          ) : (
            <Card>
              <CardContent className="py-8">
                <div className="text-center text-slate-400 space-y-2">
                  <Lightbulb className="h-12 w-12 mx-auto text-slate-300" />
                  <p className="text-lg font-medium">Methodes à venir...</p>
                  <p className="text-sm">
                    Les fiches méthodes pour &laquo; {chapter.title} &raquo; seront disponibles prochainement.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="exercices" className="mt-4">
          {chapterData ? (
            <ExercicesTab chapterData={chapterData} />
          ) : (
            <Card>
              <CardContent className="py-8">
                <div className="text-center text-slate-400 space-y-2">
                  <PencilLine className="h-12 w-12 mx-auto text-slate-300" />
                  <p className="text-lg font-medium">Exercices à venir...</p>
                  <p className="text-sm">
                    Les exercices corrigés pour &laquo; {chapter.title} &raquo; seront disponibles prochainement.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
