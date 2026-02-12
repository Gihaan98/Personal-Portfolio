'use client';

import { useEffect, useState, useRef, RefObject } from 'react'

interface ScrollValues {
  y: number
  opacity: number
  scale: number
  rotation: number
}

export function useScrollAnimation(ref: RefObject<HTMLElement>, options = {}) {
  const [values, setValues] = useState<ScrollValues>({
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
  })

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate how far through the viewport the element is (0 to 1)
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      )

      // Calculate scroll distance for parallax
      const scrollDistance = window.scrollY - (elementTop + window.scrollY - windowHeight)

      setValues({
        y: Math.max(0, (1 - progress) * 50),
        opacity: Math.min(1, Math.max(0, progress * 1.5)),
        scale: 0.9 + progress * 0.1,
        rotation: (1 - progress) * 5,
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return values
}
