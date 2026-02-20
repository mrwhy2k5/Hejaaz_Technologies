import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'

/**
 * REFINED INDUSTRIAL PRODUCT CARD — Premium Animation Edition
 * - 3D tilt perspective on hover
 * - Staggered inner content reveals
 * - Animated gradient border glow
 * - Parallax image shift
 * - Floating shield pulse ring
 * - Touch-friendly & iOS-compatible
 */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.92,
    rotateX: 8,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const contentStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const contentChild = {
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ProductCard({ product, index = 0 }) {
  const slug = product.slug || product.id
  const url = `/products/${slug}`

  return (
    <Link
      to={url}
      className="block h-full group"
      style={{ WebkitTapHighlightColor: 'transparent', perspective: '1000px' }}
    >
      <motion.article
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={cardVariants}
        whileHover={{ y: -10, scale: 1.03, rotateY: -2, rotateX: 2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full relative z-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="product-card-animated card-premium h-full flex flex-col group/card bg-[var(--card-bg)] border-[var(--card-border)] shadow-premium hover:border-hejaaz-secondary/40">
          {/* Animated Glare Sweep on Hover */}
          <div className="product-card-glare absolute inset-0 pointer-events-none rounded-2xl z-10" />

          {/* Image Container — parallax zoom on hover */}
          <div
            className="aspect-[4/3] flex items-center justify-center relative overflow-hidden rounded-xl m-1.5 sm:m-2 bg-white"
            style={{ contain: 'layout style paint' }}
          >
            <motion.img
              src={product.image || '/images/products/placeholder.svg'}
              alt={product.name}
              className="w-full h-full object-cover"
              style={{
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
              }}
              initial={{ scale: 1.15, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.12 }}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />

            {/* Subtle Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Shield Icon with subtle pulse */}
            <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-hejaaz-secondary bg-white shadow-md transition-all duration-300 group-hover:bg-hejaaz-secondary group-hover:text-white"
              >
                <Shield size={12} strokeWidth={2.5} />
              </motion.div>
            </div>
          </div>

          {/* Content - Staggered Animated Reveal */}
          <motion.div
            variants={contentStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="p-3.5 sm:p-4 flex-1 flex flex-col"
          >
            <motion.div variants={contentChild} className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[8px] sm:text-[9px] font-black text-hejaaz-secondary uppercase tracking-[0.25em]">
                {product.category}
              </span>
              <motion.div
                variants={lineGrow}
                className="flex-1 h-[1px] bg-hejaaz-secondary/20 group-hover:bg-hejaaz-secondary/60 transition-colors duration-700 origin-left"
              />
            </motion.div>

            <motion.h3
              variants={contentChild}
              className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-tight leading-tight mb-2 sm:mb-3 transition-colors duration-500 group-hover:text-hejaaz-secondary"
              style={{ color: 'var(--text-main)' }}
            >
              {product.name}
            </motion.h3>

            {product.tagline && (
              <motion.p
                variants={contentChild}
                className="text-[9px] sm:text-[10px] font-bold leading-relaxed mb-4 line-clamp-2 transition-colors duration-500 group-hover:text-[var(--text-main)]"
                style={{ color: 'var(--text-muted)' }}
              >
                {product.tagline}
              </motion.p>
            )}

            <motion.div
              variants={contentChild}
              className="mt-auto pt-3 border-t border-hejaaz-border flex items-center justify-between"
            >
              <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-hejaaz-secondary/60">
                INDUSTRIAL_SLI
              </span>
              <div className="flex items-center gap-2 text-hejaaz-secondary">
                <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-2">Analyze</span>
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <ArrowRight size={10} strokeWidth={3} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.article>
    </Link>
  )
}
