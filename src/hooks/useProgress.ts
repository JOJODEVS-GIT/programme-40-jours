"use client"

import { useState, useEffect, useCallback } from "react"

interface DayProgress {
  [dayNumber: number]: {
    completed: boolean
    completedAt?: string
    tasksCompleted?: number[]
  }
}

interface ChapterProgress {
  [slug: string]: {
    courseRead: boolean
    methodsDone: boolean
    exercisesDone: boolean
  }
}

const STORAGE_KEY_DAYS = "programme40j-days"
const STORAGE_KEY_CHAPTERS = "programme40j-chapters"
const STORAGE_KEY_STUDY_TIME = "programme40j-study-time"

export function useProgress() {
  const [dayProgress, setDayProgress] = useState<DayProgress>({})
  const [chapterProgress, setChapterProgress] = useState<ChapterProgress>({})
  const [totalStudyMinutes, setTotalStudyMinutes] = useState(0)
  const [loaded, setLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedDays = localStorage.getItem(STORAGE_KEY_DAYS)
      const savedChapters = localStorage.getItem(STORAGE_KEY_CHAPTERS)
      const savedTime = localStorage.getItem(STORAGE_KEY_STUDY_TIME)
      if (savedDays) setDayProgress(JSON.parse(savedDays))
      if (savedChapters) setChapterProgress(JSON.parse(savedChapters))
      if (savedTime) setTotalStudyMinutes(JSON.parse(savedTime))
    } catch {}
    setLoaded(true)
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if (!loaded) return
    localStorage.setItem(STORAGE_KEY_DAYS, JSON.stringify(dayProgress))
  }, [dayProgress, loaded])

  useEffect(() => {
    if (!loaded) return
    localStorage.setItem(STORAGE_KEY_CHAPTERS, JSON.stringify(chapterProgress))
  }, [chapterProgress, loaded])

  useEffect(() => {
    if (!loaded) return
    localStorage.setItem(STORAGE_KEY_STUDY_TIME, JSON.stringify(totalStudyMinutes))
  }, [totalStudyMinutes, loaded])

  const toggleDay = useCallback((dayNumber: number) => {
    setDayProgress(prev => {
      const current = prev[dayNumber]
      if (current?.completed) {
        const { [dayNumber]: _, ...rest } = prev
        return { ...rest, [dayNumber]: { completed: false } }
      }
      return {
        ...prev,
        [dayNumber]: { completed: true, completedAt: new Date().toISOString() }
      }
    })
  }, [])

  const toggleChapter = useCallback((slug: string, field: keyof ChapterProgress[string]) => {
    setChapterProgress(prev => ({
      ...prev,
      [slug]: {
        ...{ courseRead: false, methodsDone: false, exercisesDone: false },
        ...prev[slug],
        [field]: !(prev[slug]?.[field] ?? false),
      }
    }))
  }, [])

  const addStudyTime = useCallback((minutes: number) => {
    setTotalStudyMinutes(prev => prev + minutes)
  }, [])

  const completedDays = Object.values(dayProgress).filter(d => d.completed).length

  return {
    dayProgress,
    chapterProgress,
    totalStudyMinutes,
    completedDays,
    toggleDay,
    toggleChapter,
    addStudyTime,
    loaded,
  }
}
