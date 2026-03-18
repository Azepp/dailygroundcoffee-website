'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import useIsInView from '@/hooks/useIsInView'
import fadeUpVariants from '@/animations/fadeUpVariants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

export default function Tentang() {
  const text =
    'Daily Ground Coffee hadir sebagai tempat untuk menikmati kopi yang diracik dengan serius, di ruang yang dibuat untuk terasa santai dan nyaman. Dari biji kopi pilihan hingga suasana yang hangat, kami ingin setiap kunjungan terasa menyenangkan.'
  const words = text.split(' ')
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { ref, hasBeenInView } = useIsInView()

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const wrapperHeight = wrapperRef.current.offsetHeight
      const windowHeight = window.innerHeight
      const scrollableRange = wrapperHeight - windowHeight
      const scrolled = -rect.top
      const progress = Math.min(Math.max(scrolled / scrollableRange, 0), 1)
      setScrollPercentage(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={wrapperRef} style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen bg-background flex flex-col gap-6 justify-center items-center py-15">
        <motion.div
          ref={ref}
          className="flex flex-col gap-6 justify-center items-center"
          variants={container}
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
        >
          <motion.h1
            className="text-4xl text-center lg:text-5xl font-bold tracking-tighter"
            variants={fadeUpVariants}
          >
            Lebih dari Sekadar Tempat Ngopi
          </motion.h1>

          <motion.h1
            className="text-4xl lg:text-7xl font-bold tracking-tighter text-center"
            variants={fadeUpVariants}
          >
            {words.map((word, i) => (
              <span
                key={i}
                className={`transition-colors duration-300 ${
                  i < scrollPercentage * words.length
                    ? 'text-neutral-800'
                    : 'text-brown-300'
                }`}
              >
                {word}{' '}
              </span>
            ))}
          </motion.h1>
        </motion.div>
      </div>
    </div>
  )
}
