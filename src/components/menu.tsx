'use client'

import menuLists from '@/constants/menuLists'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { motion } from 'motion/react'
import useIsInView from '@/hooks/useIsInView'
import fadeUpVariants from '@/animations/fadeUpVariants'
import containerVariants from '@/animations/containerVariants'
import slideLeftVariants from '@/animations/slideLeftVariants'

export default function Menu() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const { ref, hasBeenInView } = useIsInView()

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll)
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('.menuitem') as HTMLElement
    if (!card) return
    const cardWidth = card.offsetWidth + 16
    el.scrollBy({
      left: dir === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section id="menu" className="menu">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <div className="header flex flex-col gap-6 lg:flex-row justify-between items-center mb-6">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold tracking-tighter"
            variants={fadeUpVariants}
          >
            Menu Favorite Pelanggan
          </motion.h1>

          <motion.div
            className="button lg:flex gap-2 hidden"
            variants={fadeUpVariants}
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="border-3 border-foreground text-foreground p-4 rounded-full cursor-pointer hover:bg-foreground hover:text-cream ease-in-out duration-150 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:scale-100"
            >
              <IoArrowBack className="text-2xl" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="border-3 border-foreground text-foreground p-4 rounded-full cursor-pointer hover:bg-foreground hover:text-cream ease-in-out duration-150 hover:scale-105 rotate-180 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:scale-100"
            >
              <IoArrowBack className="text-2xl" />
            </button>
          </motion.div>
        </div>

        {/* Card list */}
        <motion.div
          ref={scrollRef}
          className="menulist flex justify-start gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          variants={slideLeftVariants}
        >
          {menuLists.map((menu) => (
            <div
              key={menu.id}
              className="menuitem flex-none w-full lg:w-1/3 mb-4 snap-center"
            >
              <div className="relative w-full aspect-3.5/4 rounded-lg overflow-hidden">
                <Image
                  src={menu.image}
                  alt="Menu Item"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-2">
                <h2 className="text-xl font-bold tracking-tighter">
                  {menu.title}
                </h2>
                <h2 className="text-xl font-bold tracking-tighter">
                  {menu.price}
                </h2>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile buttons */}
        <motion.div
          className="button flex justify-center gap-2 lg:hidden"
          variants={fadeUpVariants}
        >
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="border-3 border-foreground text-foreground p-4 rounded-full cursor-pointer hover:bg-foreground hover:text-cream ease-in-out duration-150 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:scale-100"
          >
            <IoArrowBack className="text-2xl" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="border-3 border-foreground text-foreground p-4 rounded-full cursor-pointer hover:bg-foreground hover:text-cream ease-in-out duration-150 hover:scale-105 rotate-180 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:scale-100"
          >
            <IoArrowBack className="text-2xl" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}