'use client'

import { useEffect, useRef, useState } from 'react'

const FADE_DURATION = 1.5 // seconds before clip end to start fade-out

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [opacity, setOpacity] = useState(1)
  const fadingOut = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      if (!video.duration) return
      const timeLeft = video.duration - video.currentTime

      if (timeLeft < FADE_DURATION && !fadingOut.current) {
        fadingOut.current = true
        setOpacity(0)
      }
      if (video.currentTime < 0.3 && fadingOut.current) {
        fadingOut.current = false
        setOpacity(1)
      }
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    return () => video.removeEventListener('timeupdate', onTimeUpdate)
  }, [])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover scale-[1.12] object-[center_35%]"
      style={{
        opacity,
        transition: `opacity ${FADE_DURATION}s ease`,
      }}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/Videos/Hero.mp4" type="video/mp4" />
    </video>
  )
}
