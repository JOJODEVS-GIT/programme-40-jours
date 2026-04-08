"use client"

import type { ChapterContent, ContentBlock, Section } from "@/data/maths-generales/types"
import { FormulaBlock } from "./FormulaBlock"
import { RichText } from "./RichText"
import { ExerciseBlock } from "./ExerciseBlock"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Lightbulb, BookOpen, PencilLine } from "lucide-react"

function RichCell({ text }: { text: string }) {
  // If cell contains LaTeX-like content, render as formula
  if (text.match(/[\\{}^_]/)) {
    return <FormulaBlock math={text} display={false} className="inline text-xs" />
  }
  return <>{text}</>
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
          <RichText text={block.text || ""} />
        </p>
      )

    case "formula":
      return block.math ? (
        <div className="my-3 overflow-x-auto py-2">
          <FormulaBlock math={block.math} />
        </div>
      ) : null

    case "table":
      return (
        <div className="my-3 overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
            {block.headers && (
              <thead>
                <tr className="bg-slate-100">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700"
                    >
                      <RichCell text={h} />
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows?.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-slate-200 px-3 py-1.5 text-slate-600 text-xs"
                    >
                      <RichCell text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case "tip":
      return (
        <div className="my-3 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
          <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 whitespace-pre-line">
            <RichText text={block.text || ""} />
          </p>
        </div>
      )

    case "method":
      return (
        <div className="my-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Méthode
            </span>
          </div>
          <p className="text-sm text-blue-900 whitespace-pre-line">
            <RichText text={block.text || ""} />
          </p>
        </div>
      )

    case "exercise":
      return (
        <div className="my-3">
          <p className="text-sm font-medium text-green-900 whitespace-pre-line">
            <RichText text={block.text || ""} />
          </p>
          {block.items && block.items.length > 0 && (
            <ul className="mt-2 space-y-1.5 pl-4">
              {block.items.map((item, i) => (
                <li key={i} className="text-sm text-slate-700 flex gap-2">
                  <span className="text-slate-400 font-mono text-xs mt-0.5">{String.fromCharCode(97 + i)})</span>
                  <FormulaBlock math={item} display={false} className="inline" />
                </li>
              ))}
            </ul>
          )}
        </div>
      )

    default:
      return null
  }
}

function SectionRenderer({ section }: { section: Section }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
        {section.title}
      </h2>
      {section.content.map((block, i) => (
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </div>
  )
}

function groupExercises(sections: Section[]) {
  const exercises: { exercise: ContentBlock; correction: ContentBlock[] }[] = []
  for (const section of sections) {
    let currentExercise: ContentBlock | null = null
    let currentCorrection: ContentBlock[] = []

    for (const block of section.content) {
      if (block.type === "exercise") {
        if (currentExercise !== null) {
          exercises.push({ exercise: currentExercise, correction: currentCorrection })
        }
        currentExercise = block
        currentCorrection = []
      } else if (block.type === "correction") {
        currentCorrection.push(block)
      }
    }
    if (currentExercise !== null) {
      exercises.push({ exercise: currentExercise, correction: currentCorrection })
    }
  }
  return exercises
}

export function CoursTab({ chapterData }: { chapterData: ChapterContent }) {
  const coursSections = chapterData.sections.filter(
    (s) =>
      !s.content.every((b) => b.type === "exercise" || b.type === "correction") &&
      !s.content.every((b) => b.type === "method")
  )

  if (coursSections.length === 0) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="text-center text-slate-400 space-y-2">
            <BookOpen className="h-12 w-12 mx-auto text-slate-300" />
            <p className="text-lg font-medium">Contenu du cours à venir...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Importance */}
      <Card>
        <CardContent className="py-3">
          <p className="text-sm text-slate-600">
            <span className="font-semibold">Importance :</span> {chapterData.importance}
          </p>
          <p className="text-xs text-slate-400 mt-1">{chapterData.days}</p>
        </CardContent>
      </Card>

      {/* Course sections (excluding pure exercise sections) */}
      {coursSections.map((section, i) => {
        const isExerciseSection = section.content.some((b) => b.type === "exercise")
        if (isExerciseSection) return null
        return (
          <Card key={i}>
            <CardContent className="py-4">
              <SectionRenderer section={section} />
            </CardContent>
          </Card>
        )
      })}

      {/* Erreurs fréquentes */}
      {chapterData.erreurs.length > 0 && (
        <Card className="border-red-200">
          <CardContent className="py-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <h2 className="text-sm font-bold text-red-700 uppercase tracking-wide">
                Erreurs fréquentes à éviter
              </h2>
            </div>
            <ul className="space-y-1.5">
              {chapterData.erreurs.map((e, i) => (
                <li key={i} className="text-sm text-red-800 flex gap-2">
                  <span className="text-red-400 shrink-0">-</span>
                  <span><RichText text={e} /></span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Bilan */}
      {chapterData.bilan.length > 0 && (
        <Card className="border-emerald-200">
          <CardContent className="py-4">
            <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-3">
              Bilan - Ce que je dois savoir faire
            </h2>
            <ul className="space-y-1.5">
              {chapterData.bilan.map((b, i) => (
                <li key={i} className="text-sm text-emerald-800 flex gap-2">
                  <span className="text-emerald-400 shrink-0">-</span>
                  <span><RichText text={b} /></span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export function MethodesTab({ chapterData }: { chapterData: ChapterContent }) {
  const methodBlocks: ContentBlock[] = []
  for (const section of chapterData.sections) {
    for (const block of section.content) {
      if (block.type === "method") {
        methodBlocks.push(block)
      }
    }
  }

  if (methodBlocks.length === 0) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="text-center text-slate-400 space-y-2">
            <Lightbulb className="h-12 w-12 mx-auto text-slate-300" />
            <p className="text-lg font-medium">Méthodes à venir...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {methodBlocks.map((block, i) => (
        <Card key={i} className="border-blue-200">
          <CardContent className="py-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                Méthode {i + 1}
              </span>
            </div>
            <p className="text-sm text-blue-900 whitespace-pre-line">
              <RichText text={block.text || ""} />
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function ExercicesTab({ chapterData }: { chapterData: ChapterContent }) {
  const exerciseSections = chapterData.sections.filter((s) =>
    s.content.some((b) => b.type === "exercise")
  )

  const exercises = groupExercises(exerciseSections)

  if (exercises.length === 0) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="text-center text-slate-400 space-y-2">
            <PencilLine className="h-12 w-12 mx-auto text-slate-300" />
            <p className="text-lg font-medium">Exercices à venir...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {exercises.map((ex, i) => (
        <ExerciseBlock key={i} exercise={ex.exercise} correction={ex.correction} />
      ))}
    </div>
  )
}
