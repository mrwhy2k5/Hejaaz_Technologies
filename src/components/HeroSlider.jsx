import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageCircle, Headset } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroSlides from '../data/heroSlides.json'

/**
 * FULL-WIDTH HERO SLIDER (MODERN INDUSTRIAL)
 * - 85-90vh height
 * - DARK BLUE / CHARCOAL OVERLAY (70%)
 * - LARGE BOLD TYPOGRAPHY
 */
export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slideCount = heroSlides.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, isPaused])

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  const zoomVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 0.5, transition: { duration: 10, ease: "easeOut" } }
  }

  return (
    <section
      className="relative h-[90vh] lg:h-screen w-full overflow-hidden bg-hejaaz-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Slow Zoom */}
          <motion.div
            variants={zoomVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{
              backgroundImage: `url(${heroSlides[currentIndex].image})`,
            }}
          />

          {/* Advanced Industrial Gradient Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-hejaaz-primary via-hejaaz-primary/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-hejaaz-primary via-transparent to-transparent z-10" />

          {/* Content Overlay */}
          <div className="container-content relative h-full flex items-center pt-28 lg:pt-36 z-20">
            <div className="max-w-5xl text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-hejaaz-secondary/20 border border-hejaaz-secondary/30 mb-6 lg:mb-8 backdrop-blur-md"
                >
                  <div className="w-2 h-2 rounded-full bg-hejaaz-secondary animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Engineering Excellence</span>
                </motion.div>

                <motion.h1
                  className="text-6xl lg:text-[6.5rem] font-black text-white leading-[0.9] tracking-tighter mb-8 lg:mb-10 uppercase"
                >
                  {heroSlides[currentIndex].title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 === 1 ? 'text-hejaaz-secondary' : 'text-white'}>
                      {word}{' '}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-white/70 font-bold mb-10 lg:mb-12 max-w-3xl leading-tight uppercase tracking-tight"
                >
                  {heroSlides[currentIndex].subtitle}
                </motion.p>

                <motion.div className="flex flex-wrap gap-6">
                  <a
                    href={heroSlides[currentIndex].link_primary}
                    className="btn-primary !py-6 !px-16 !text-[13px] shadow-hejaaz-secondary/40"
                  >
                    {heroSlides[currentIndex].cta_primary}
                  </a>
                  <Link
                    to={heroSlides[currentIndex].link_secondary}
                    className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl 
                             font-black text-[12px] uppercase tracking-[0.2em] text-white 
                             transition-all duration-300 border-2 border-white/20 hover:border-white hover:bg-white hover:text-hejaaz-primary"
                  >
                    {heroSlides[currentIndex].cta_secondary}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation Controls */}
      <div className="absolute bottom-12 right-12 z-30 hidden lg:flex items-center gap-6">
        <div className="flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-700 rounded-full ${index === currentIndex ? 'w-16 bg-hejaaz-secondary' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3 ml-4">
          <button
            onClick={prevSlide}
            className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-hejaaz-secondary hover:border-hejaaz-secondary transition-all group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-hejaaz-secondary hover:border-hejaaz-secondary transition-all group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
