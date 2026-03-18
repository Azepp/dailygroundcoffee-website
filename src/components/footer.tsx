'use client'

import { motion } from 'motion/react'
import useIsInView from '@/hooks/useIsInView'
import fadeUpVariants from '@/animations/fadeUpVariants'
import slideLeftVariants from '@/animations/slideLeftVariants'
import slideRightVariants from '@/animations/slideRightVariants'
import containerVariants from '@/animations/containerVariants'

export default function Footer() {
  const { ref, hasBeenInView } = useIsInView()

  const handleFooterClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-foreground text-cream text-lg lg:text-base flex flex-col gap-12 px-4 pt-10 pb-0 overflow-hidden">
      <motion.div
        ref={ref}
        className="flex flex-col gap-6 lg:flex-row justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <motion.div
          className="quick flex flex-col gap-4"
          variants={slideLeftVariants}
        >
          <h1>Pintasan</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#beranda"
                onClick={(e) => handleFooterClick(e, 'beranda')}
                className="text-brown-300 hover:text-cream ease-in-out duration-150"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={(e) => handleFooterClick(e, 'menu')}
                className="text-brown-300 hover:text-cream ease-in-out duration-150"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#tempat"
                onClick={(e) => handleFooterClick(e, 'tempat')}
                className="text-brown-300 hover:text-cream ease-in-out duration-150"
              >
                Tempat
              </a>
            </li>
            <li>
              <a
                href="#event"
                onClick={(e) => handleFooterClick(e, 'event')}
                className="text-brown-300 hover:text-cream ease-in-out duration-150"
              >
                Event
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="hour flex flex-col gap-4"
          variants={fadeUpVariants}
        >
          <h1>Jam Operasional</h1>
          <p>
            Senin &ndash; Minggu
            <br />
            08.00 &ndash; 22.00
          </p>
          <p>
            Happy Hour
            <br />
            16.00 &ndash; 18.00
          </p>
        </motion.div>

        <motion.div
          className="quick flex flex-col gap-4"
          variants={slideRightVariants}
        >
          <h1>Sosial Media</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="text-brown-300 hover:text-cream ease-in-out duration-150"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-brown-300 hover:text-cream ease-in-out duration-150"
              >
                Tiktok
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-brown-300 hover:text-cream ease-in-out duration-150"
              >
                Google Review
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="overflow-hidden w-full"
        variants={fadeUpVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <h1
          className="font-bold tracking-tighter leading-none translate-y-1 w-full text-center whitespace-nowrap"
          style={{ fontSize: 'clamp(1rem, 11.5vw, 190px)' }}
        >
          DailyGroundCoffee
        </h1>
      </motion.div>
    </footer>
  )
}
