'use client'

import { motion } from 'motion/react'
import useIsInView from '@/hooks/useIsInView'
import fadeUpVariants from '@/animations/fadeUpVariants'
import slideLeftVariants from '@/animations/slideLeftVariants'
import slideRightVariants from '@/animations/slideRightVariants'
import containerVariants from '@/animations/containerVariants'

export default function Kunjungi() {
  const { ref, hasBeenInView } = useIsInView()

  return (
    <section id="kunjungi" className="kunjungi my-16 overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <div className="header flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 px-4">
          <motion.h1
            className="text-5xl lg:text-7xl text-center lg:text-start font-bold tracking-tighter"
            variants={fadeUpVariants}
          >
            Temukan Kami
          </motion.h1>

          <motion.p
            className="text-center lg:text-end lg:text-lg"
            variants={slideRightVariants}
          >
            Kunjungi Daily Ground Coffee dan rasakan sendiri
            <br />
            pengalaman ngopi yang nyaman di tengah kota.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="information flex flex-col gap-6 lg:flex-row justify-between px-4">
            <motion.div
              className="jam text-4xl font-bold tracking-tighter"
              variants={slideLeftVariants}
            >
              <h1>Jam Operasional:</h1>
              <h1>Senin - Minggu</h1>
              <h1>08.00 - 17.00</h1>
            </motion.div>

            <motion.div
              className="alamat text-end text-4xl font-bold tracking-tighter"
              variants={slideRightVariants}
            >
              <h1>Alamat:</h1>
              <h1>Jl. Cendana Raya No. 18</h1>
              <h1>Jakarta Selatan 12730</h1>
            </motion.div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.333524707281!2d106.82963755!3d-6.186468799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f51f0ca6b0eb%3A0xe5788342658120f1!2sTaman%20Ismail%20Marzuki%20(TIM)!5e0!3m2!1sen!2sid!4v1773649587459!5m2!1sen!2sid"
            width="full"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="information flex flex-col gap-6 lg:flex-row justify-between px-4">
            <motion.div
              className="jam text-4xl font-bold tracking-tighter"
              variants={slideLeftVariants}
            >
              <h1>WhatsApp:</h1>
              <h1>+65 8518 0587</h1>
            </motion.div>

            <motion.div
              className="alamat text-end text-4xl font-bold tracking-tighter"
              variants={slideRightVariants}
            >
              <h1>Email:</h1>
              <h1>Jl. Cendana Raya No. 18</h1>
              <h1>hello@dailyground.com</h1>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}