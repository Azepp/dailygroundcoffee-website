'use client'

import { useLayoutEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function SplashScreen() {
  const [phase, setPhase] = useState<'enter' | 'exit' | 'done'>('done') // default "done" dulu

  useLayoutEffect(() => {
    const hasShown = sessionStorage.getItem('splash_shown')

    if (hasShown) return // skip kalau udah pernah muncul

    setTimeout(() => setPhase('enter'), 0) // baru tampilin

    const startExit = () => {
      setTimeout(() => setPhase('exit'), 900)
    }

    if (document.readyState === 'complete') {
      startExit()
    } else {
      window.addEventListener('load', startExit)
      return () => window.removeEventListener('load', startExit)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <motion.div
      key="splash"
      className="fixed inset-0 z-9999 flex items-center justify-center bg-foreground overflow-hidden"
      animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
      transition={
        phase === 'exit'
          ? { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (phase === 'exit') {
          sessionStorage.setItem('splash_shown', 'true') // tandai udah muncul
          setPhase('done')
        }
      }}
    >
      <motion.h1
        className="text-5xl font-extrabold tracking-tight text-cream text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={
          phase === 'enter'
            ? { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
            : { duration: 0.25, ease: 'easeIn' }
        }
      >
        DailyGround
        <br className="lg:hidden" />
        Coffee.
      </motion.h1>
    </motion.div>
  )
}
