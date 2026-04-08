"use client"

import { useState, useEffect, useCallback, useRef } from "react"

type TimerMode = "work" | "break" | "longBreak"

interface TimerState {
  mode: TimerMode
  timeLeft: number // seconds
  isRunning: boolean
  sessionsCompleted: number
}

const DURATIONS: Record<TimerMode, number> = {
  work: 25 * 60,
  break: 5 * 60,
  longBreak: 15 * 60,
}

export function useTimer() {
  const [state, setState] = useState<TimerState>({
    mode: "work",
    timeLeft: DURATIONS.work,
    isRunning: false,
    sessionsCompleted: 0,
  })
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a simple beep sound
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbsGczJj2markup...")
    }
  }, [])

  useEffect(() => {
    if (!state.isRunning) return
    if (state.timeLeft <= 0) {
      // Timer finished
      try { audioRef.current?.play() } catch {}

      setState(prev => {
        if (prev.mode === "work") {
          const newSessions = prev.sessionsCompleted + 1
          const nextMode = newSessions % 4 === 0 ? "longBreak" : "break"
          return {
            mode: nextMode,
            timeLeft: DURATIONS[nextMode],
            isRunning: false,
            sessionsCompleted: newSessions,
          }
        }
        return {
          mode: "work",
          timeLeft: DURATIONS.work,
          isRunning: false,
          sessionsCompleted: prev.sessionsCompleted,
        }
      })
      return
    }

    const interval = setInterval(() => {
      setState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }))
    }, 1000)

    return () => clearInterval(interval)
  }, [state.isRunning, state.timeLeft])

  const start = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: true }))
  }, [])

  const pause = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: false }))
  }, [])

  const reset = useCallback(() => {
    setState(prev => ({
      ...prev,
      timeLeft: DURATIONS[prev.mode],
      isRunning: false,
    }))
  }, [])

  const switchMode = useCallback((mode: TimerMode) => {
    setState(prev => ({
      ...prev,
      mode,
      timeLeft: DURATIONS[mode],
      isRunning: false,
    }))
  }, [])

  const minutes = Math.floor(state.timeLeft / 60)
  const seconds = state.timeLeft % 60

  return {
    ...state,
    minutes,
    seconds,
    start,
    pause,
    reset,
    switchMode,
  }
}
