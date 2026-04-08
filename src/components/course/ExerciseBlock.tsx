"use client"

import { useState } from "react"
import type { ContentBlock } from "@/data/maths-generales/types"
import { FormulaBlock } from "./FormulaBlock"
import { RichText } from "./RichText"
import { ChevronDown, ChevronRight, CheckCircle2 } from "lucide-react"

interface ExerciseBlockProps {
  exercise: ContentBlock
  correction: ContentBlock[]
}

export function ExerciseBlock({ exercise, correction }: ExerciseBlockProps) {
  const [showCorrection, setShowCorrection] = useState(false)

  return (
    <div className="border border-green-200 rounded-lg overflow-hidden">
      <div className="bg-green-50 p-4">
        <p className="text-sm font-medium text-green-900 whitespace-pre-line">
          <RichText text={exercise.text || ""} />
        </p>
        {exercise.items && exercise.items.length > 0 && (
          <ul className="mt-2 space-y-1.5 pl-4">
            {exercise.items.map((item, i) => (
              <li key={i} className="text-sm text-green-800 flex gap-2">
                <span className="text-green-500 font-mono text-xs mt-0.5">{String.fromCharCode(97 + i)})</span>
                <FormulaBlock math={item} display={false} className="inline" />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-t border-green-200">
        <button
          onClick={() => setShowCorrection(!showCorrection)}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50 transition-colors"
        >
          {showCorrection ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
          <CheckCircle2 className="h-4 w-4" />
          {showCorrection ? "Masquer la correction" : "Voir la correction"}
        </button>
        {showCorrection && (
          <div className="px-4 pb-4 space-y-3 border-t border-green-100 pt-3">
            {correction.map((block, i) => {
              if (block.type === "correction") {
                return (
                  <div key={i}>
                    {block.text && (
                      <p className="text-sm font-medium text-slate-800 mb-2">
                        <RichText text={block.text} />
                      </p>
                    )}
                    {block.items && block.items.length > 0 && (
                      <ul className="space-y-2 pl-4">
                        {block.items.map((item, j) => (
                          <li key={j} className="text-sm text-slate-700 flex gap-2">
                            <span className="text-slate-400 font-mono text-xs mt-0.5">{String.fromCharCode(97 + j)})</span>
                            <span className="overflow-x-auto">
                              <RichText text={item} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              }
              if (block.type === "formula" && block.math) {
                return (
                  <div key={i} className="my-2 overflow-x-auto">
                    <FormulaBlock math={block.math} />
                  </div>
                )
              }
              if (block.type === "text" && block.text) {
                return (
                  <p key={i} className="text-sm text-slate-700 whitespace-pre-line">
                    <RichText text={block.text} />
                  </p>
                )
              }
              return null
            })}
          </div>
        )}
      </div>
    </div>
  )
}
