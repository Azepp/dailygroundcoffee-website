'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import useIsInView from '@/hooks/useIsInView'
import containerVariants from '@/animations/containerVariants'
import fadeUpVariants from '@/animations/fadeUpVariants'

export default function Beranda() {
  const { ref, hasBeenInView } = useIsInView()

  return (
    <section id="beranda" className="lg:px-4">
      <div className="relative flex flex-col items-center justify-center h-screen lg:h-[88vh] w-full pt-[8vh] lg:pt-0 lg:mt-[11.5vh] text-background lg:rounded-lg">
        <motion.div
          ref={ref}
          className="konten z-10 h-full w-full flex flex-col items-start justify-center gap-6 lg:justify-between p-4"
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          transition={{ delayChildren: 0.5 }} // nunggu image dulu
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-center lg:text-start w-full"
            variants={fadeUpVariants}
          >
            Good Coffee. <br /> Good Space.
          </motion.h1>

          <motion.p
            className="text-sm lg:text-base text-center w-full"
            variants={fadeUpVariants}
          >
            Nikmati kopi berkualitas, suasana yang hangat, dan ruang nyaman{' '}
            <br className="hidden lg:block" /> untuk ngobrol, kerja, atau
            sekadar menikmati <br className="hidden lg:block" /> waktu santai.
          </motion.p>

          <motion.div
            className="buttonlist w-full flex flex-col justify-end lg:items-end gap-2"
            variants={fadeUpVariants}
          >
            <button className="text-sm lg:text-lg cursor-pointer lg:w-1/7 justify-center py-3 flex gap-1 items-center px-6 font-semibold rounded-full transition-all duration-150 bg-background text-foreground hover:bg-foreground hover:text-cream active:scale-95">
              Lihat Menu
            </button>
            <button className="text-sm lg:text-lg cursor-pointer lg:w-1/7 justify-center py-3 flex gap-1 items-center px-6 font-semibold rounded-full transition-all duration-150 border-2 border-background text-cream hover:border-foreground hover:bg-foreground hover:text-cream active:scale-95">
              Kunjungi Kami
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <Image
            src="/images/hero.png"
            alt="Hero background"
            fill
            className="object-cover lg:rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
