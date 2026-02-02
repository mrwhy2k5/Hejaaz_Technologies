import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

/**
 * Modern Industrial Page Header
 * - Medium height: 350-400px
 * - Integrated Overlay (60-70% darkness for high readability)
 * - Large, Bold Industrial Typography
 */

const fadeInSlideUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

const DEFAULT_BG = '/images/industrial-bg-cranes.png'

export default function PageHeader({ title, subtitle, backgroundImage, backTo = "/" }) {
  const bgImage = backgroundImage || DEFAULT_BG

  return (
    <div
      className="relative min-h-[300px] lg:h-[400px] flex items-center overflow-hidden bg-hejaaz-primary transition-colors duration-300"
    >
      {/* Background Image Layer with Lighter Overlay (30-40%) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-hejaaz-primary/30 dark:bg-black/25 z-10 transition-colors duration-300" />
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-90 dark:opacity-70 transition-opacity duration-300"
          onError={(e) => {
            e.target.src = DEFAULT_BG
          }}
        />
      </motion.div>

      {/* Absolute Header Navigation - Top Left */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          to={backTo}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-full border border-white/20 bg-hejaaz-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:border-hejaaz-secondary group-hover:bg-hejaaz-secondary/20 transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden sm:block">Back</span>
        </Link>
      </div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-20 container-content pt-28 lg:pt-36 pb-12">
        <div className="max-w-4xl">
          {/* Breadcrumb / Tag */}
          <motion.div
            {...fadeInSlideUp}
            className="flex items-center gap-4 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary" />
              <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.25em]">
                Hejaaz Technologies
              </span>
            </div>
          </motion.div>

          {/* Large Bold Heading */}
          <motion.h1
            {...fadeInSlideUp}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6"
          >
            {title}
          </motion.h1>

          {/* Readable Sub-heading */}
          {subtitle && (
            <motion.p
              {...fadeInSlideUp}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-white/70 font-bold uppercase tracking-tight max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Industrial Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-hejaaz-secondary via-hejaaz-secondary/30 to-transparent z-20" />
    </div>
  )
}
