import type { Variants } from 'motion/react'

// Variants untuk animasi scale up (gambar)
const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50, // Mulai 50px dari bawah
  },
  visible: {
    opacity: 1,
    scale: 1, // Ukuran normal (100%)
    y: 0, // Posisi normal
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.3, // Delay 0.3s setelah parent visible
    },
  },
}

export default scaleUpVariants
