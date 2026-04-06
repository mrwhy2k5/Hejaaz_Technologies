import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import {
  heroTextReveal,
  heroSubtitleReveal,
  heroBadgeReveal,
  easings,
} from '../utils/animations'

/**
 * Modern Industrial Page Header — Precision Motion Edition
 * - iOS-safe viewport handling
 * - Premium entrance animations
 * - Responsive typography
 */

const DEFAULT_BG = '/images/industrial-bg-cranes.png'

export default function PageHeader({ title, subtitle, backgroundImage, backTo = "/", isVisited = false }) {
  const bgImage = backgroundImage || DEFAULT_BG

  return (
    <div
      className="relative flex items-center overflow-hidden bg-hejaaz-primary transition-colors duration-300"
      style={{
        minHeight: 'clamp(250px, 40vh, 400px)',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {/* Background Image Layer — slow reveal with subtle scale */}
      <motion.div
        initial={isVisited ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easings.heavy }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-hejaaz-primary/30 dark:bg-black/25 z-10 transition-colors duration-300" />
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-90 dark:opacity-70 transition-opacity duration-300"
          loading="eager"
          fetchpriority="high"
          style={{
            WebkitBackfaceVisibility: 'hidden',
          }}
          onError={(e) => {
            e.target.src = DEFAULT_BG
          }}
        />
      </motion.div>

      {/* Absolute Header Navigation - Top Left */}
      <motion.div
        initial={isVisited ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: easings.smooth }}
        className="absolute top-6 left-4 sm:left-6 z-30"
      >
        <Link
          to={backTo}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-hejaaz-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:border-hejaaz-secondary group-hover:bg-hejaaz-secondary/20 transition-all duration-500">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden sm:block">Back</span>
        </Link>
      </motion.div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-20 container-content pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12">
        <div className="max-w-4xl">
          {/* Breadcrumb / Tag — badge reveal */}
          <motion.div
            initial={isVisited ? { opacity: 1, scale: 1, y: 0 } : heroBadgeReveal.initial}
            animate={heroBadgeReveal.animate}
            transition={heroBadgeReveal.transition}
            className="flex items-center gap-4 mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary" />
              <span className="text-[9px] sm:text-[10px] font-black text-white/50 uppercase tracking-[0.25em]">
                Hejaaz Technologies
              </span>
            </div>
          </motion.div>

          {/* Large Bold Heading — smooth text reveal */}
          <motion.h1
            initial={isVisited ? { opacity: 1, y: 0 } : heroTextReveal.initial}
            animate={heroTextReveal.animate}
            transition={heroTextReveal.transition}
            className="text-2xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4 sm:mb-6"
          >
            {title}
          </motion.h1>

          {/* Readable Sub-heading */}
          {subtitle && (
            <motion.p
              initial={isVisited ? { opacity: 0.7, y: 0 } : heroSubtitleReveal.initial}
              animate={heroSubtitleReveal.animate}
              transition={heroSubtitleReveal.transition}
              className="text-sm sm:text-lg lg:text-xl text-white/70 font-bold uppercase tracking-tight max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Industrial Accent — animated bar */}
      <motion.div
        initial={isVisited ? { scaleX: 1 } : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: easings.industrial }}
        style={{ transformOrigin: 'left' }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-hejaaz-secondary via-hejaaz-secondary/30 to-transparent z-20"
      />
    </div>
  )
}
