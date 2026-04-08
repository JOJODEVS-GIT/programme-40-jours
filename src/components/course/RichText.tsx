"use client"

import { Fragment } from "react"
import { FormulaBlock } from "./FormulaBlock"

/**
 * Renders text with:
 * - **bold** → <strong>
 * - $latex$ → inline FormulaBlock
 */
export function RichText({ text, className = "" }: { text: string; className?: string }) {
  const parts = parseRichText(text)

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part.type === "text" && part.value}
          {part.type === "bold" && <strong className="font-semibold">{part.value}</strong>}
          {part.type === "latex" && (
            <FormulaBlock math={part.value} display={false} className="inline" />
          )}
        </Fragment>
      ))}
    </span>
  )
}

interface Part {
  type: "text" | "bold" | "latex"
  value: string
}

function parseRichText(text: string): Part[] {
  const parts: Part[] = []
  // Match **bold**, $latex$ (not $$)
  const regex = /\*\*(.+?)\*\*|\$([^$]+?)\$/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: text.slice(lastIndex, match.index) })
    }

    if (match[1] !== undefined) {
      // Bold match
      parts.push({ type: "bold", value: match[1] })
    } else if (match[2] !== undefined) {
      // LaTeX match
      parts.push({ type: "latex", value: match[2] })
    }

    lastIndex = match.index + match[0].length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: "text", value: text.slice(lastIndex) })
  }

  return parts
}
