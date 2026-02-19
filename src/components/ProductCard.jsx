import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'

/**
 * REFINED INDUSTRIAL PRODUCT CARD — Precision Motion Edition
 * - Premium hover animations
 * - Smooth image zoom on hover
 * - Touch-friendly interactions
 * - iOS-compatible rendering
 */
export default function ProductCard({ product, index = 0 }) {
  const slug = product.slug || product.id
  const url = `/products/${slug}`

  return (
    <Link
      to={url}
      className="block h-full group"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <motion.article
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full relative z-0"
      >
        <div className="card-premium h-full flex flex-col group/card bg-[var(--card-bg)] border-[var(--card-border)] shadow-premium hover:border-hejaaz-secondary/30">
          {/* Animated Glare Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent pointer-events-none transition-opacity duration-700 rounded-2xl" />

          {/* Image Container — smooth zoom on hover */}
          <div
            className="aspect-[4/3] flex items-center justify-center relative overflow-hidden rounded-xl m-1.5 sm:m-2 bg-white"
            style={{ contain: 'layout style paint' }}
          >
            <img
              src={product.image || '/images/products/placeholder.svg'}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              style={{
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
              }}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />

            {/* Shield Icon - Dynamic background */}
            <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-hejaaz-secondary bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300 group-hover:bg-hejaaz-secondary group-hover:text-white"
              >
                <Shield size={12} strokeWidth={2.5} />
              </motion.div>
            </div>
          </div>

          {/* Content - Grouped Technical Info */}
          <div className="p-3.5 sm:p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[8px] sm:text-[9px] font-black text-hejaaz-secondary uppercase tracking-[0.25em]">
                {product.category}
              </span>
              <div className="flex-1 h-[1px] bg-hejaaz-secondary/20 group-hover:bg-hejaaz-secondary/60 transition-all duration-700 origin-left" />
            </div>

            <h3 className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-tight leading-tight mb-2 sm:mb-3 transition-colors duration-500 group-hover:text-hejaaz-secondary" style={{ color: 'var(--text-main)' }}>
              {product.name}
            </h3>

            {product.tagline && (
              <p className="text-[9px] sm:text-[10px] font-bold leading-relaxed mb-4 line-clamp-2 transition-colors duration-500 group-hover:text-[var(--text-main)]" style={{ color: 'var(--text-muted)' }}>
                {product.tagline}
              </p>
            )}

            <div className="mt-auto pt-3 border-t border-hejaaz-border flex items-center justify-between">
              <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-hejaaz-secondary/60">
                INDUSTRIAL_SLI
              </span>
              <div className="flex items-center gap-2 text-hejaaz-secondary group-hover:translate-x-1 transition-transform duration-500">
                <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Analyze</span>
                <ArrowRight size={10} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
