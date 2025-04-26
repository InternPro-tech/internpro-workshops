"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  className?: string
}

export function CountdownTimer({ className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0,
  })

  useEffect(() => {
    // Check if timer already started in session storage
    const storedEndTime = sessionStorage.getItem("countdownEndTime")
    let endTime: number

    if (storedEndTime) {
      endTime = Number.parseInt(storedEndTime, 10)
    } else {
      // Set end time 15 minutes from now
      endTime = Date.now() + 15 * 60 * 1000
      sessionStorage.setItem("countdownEndTime", endTime.toString())
    }

    const interval = setInterval(() => {
      const now = Date.now()
      const difference = endTime - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ minutes: 0, seconds: 0 })
        return
      }

      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="font-mono font-bold">
        {timeLeft.minutes.toString().padStart(2, "0")}:{timeLeft.seconds.toString().padStart(2, "0")}
      </div>
    </div>
  )
}
