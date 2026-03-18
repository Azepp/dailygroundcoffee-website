// Variants untuk animasi container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay 0.2s antar child elements
      delayChildren: 0.1, // Delay 0.1s sebelum child elements mulai
    },
  },
};

export default containerVariants;
