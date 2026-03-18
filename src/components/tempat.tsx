'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import useIsInView from '@/hooks/useIsInView'
import fadeUpVariants from '@/animations/fadeUpVariants'
import containerVariants from '@/animations/containerVariants'

export default function Tempat() {
  const { ref, hasBeenInView } = useIsInView()

  return (
    <section id="tempat" className="tempat my-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <div className="header flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
          <motion.h1
            className="text-4xl lg:text-7xl text-center font-bold tracking-tighter"
            variants={fadeUpVariants}
          >
            Ruang Nyaman untuk <br className="hidden lg:block" />
            Nongkrong dan Kerja
          </motion.h1>

          <motion.p
            className="lg:w-1/4 text-center lg:text-end lg:text-lg"
            variants={fadeUpVariants}
          >
            Dengan interior modern minimalis dan suasana yang hangat, Daily
            Ground Coffee menjadi tempat yang pas untuk bekerja, meeting santai,
            atau berkumpul bersama teman.
          </motion.p>
        </div>

        <motion.div
          className="tempat grid md:grid-cols-3 gap-4 relative"
          variants={fadeUpVariants}
        >
          <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden">
            <Image
              src="/images/tempat/portrait.png"
              alt="Tempat 1"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div className="relative w-full flex flex-col gap-4">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/tempat/landscape-1.png"
                alt="Tempat 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/tempat/landscape-2.png"
                alt="Tempat 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden">
            <Image
              src="/images/tempat/barista.png"
              alt="Tempat 4"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}