import type { Variants } from 'motion/react'

// Variants untuk animasi slide dari kiri
const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50, // Mulai 50px dari kiri
  },
  visible: {
    opacity: 1,
    x: 0, // Kembali ke posisi normal
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default slideLeftVariants
