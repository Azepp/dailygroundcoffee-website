import { useRef } from 'react'
import { useInView } from 'motion/react'

const useIsInView = (amount: number = 0.2) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount })
  return { ref, hasBeenInView: isInView }
}

export default useIsInView