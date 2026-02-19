import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageCircle, Headset } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroSlides from '../data/heroSlides.json'

/**
 * FULL-WIDTH HERO SLIDER (MOBILE-OPTIMIZED)
 * - Fixed height for iOS stability
 * - GPU-accelerated transitions
 * - Optimized image loading
 */
export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState({})

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

  // Preload all hero images on mount for faster transitions
  useEffect(() => {
    heroSlides.forEach((slide, index) => {
      const img = new Image()
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }))
      }
      img.src = slide.image
    })
  }, [])

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-hejaaz-primary"
      style={{
        height: 'clamp(400px, 70vh, 85vh)',
        minHeight: '400px',
        WebkitBackfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
      }}
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
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
          style={{ WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Background Image - Using img tag for better iOS rendering */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroSlides[currentIndex].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: 0.5,
                transform: 'scale(1.05)',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
              loading="eager"
              fetchpriority="high"
            />
          </div>

          {/* Lighter Industrial Gradient Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-hejaaz-primary/60 via-hejaaz-primary/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-hejaaz-primary/50 via-transparent to-transparent z-10" />

          {/* Content Overlay */}
          <div className="container-content relative h-full flex flex-col justify-center pt-20 lg:pt-24 z-20">
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
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter mb-6 lg:mb-8 uppercase"
                  style={{ wordBreak: 'break-word' }}
                >
                  {heroSlides[currentIndex].title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 === 1 ? 'text-hejaaz-secondary' : 'text-white'}>
                      {word}{' '}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base lg:text-xl text-white/70 font-bold mb-8 lg:mb-10 max-w-3xl leading-tight uppercase tracking-tight"
                >
                  {heroSlides[currentIndex].subtitle}
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                  <a
                    href={heroSlides[currentIndex].link_primary}
                    className="btn-primary !py-4 !px-8 sm:!py-6 sm:!px-16 !text-[11px] sm:!text-[13px] shadow-hejaaz-secondary/40 text-center"
                  >
                    {heroSlides[currentIndex].cta_primary}
                  </a>
                  <Link
                    to={heroSlides[currentIndex].link_secondary}
                    className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-xl 
                             font-black text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-white 
                             transition-all duration-300 border-2 border-white/20 hover:border-white hover:bg-white hover:text-hejaaz-primary text-center"
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

      {/* Mobile slide indicators */}
      <div className="absolute bottom-6 inset-x-0 z-30 flex lg:hidden justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex ? 'w-8 bg-hejaaz-secondary' : 'w-3 bg-white/30'}`}
            aria-label={`Go to slide ${index + 1}`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          />
        ))}
      </div>
    </section>
  )
}
