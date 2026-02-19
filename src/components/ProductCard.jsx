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
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <div className="card-premium h-full flex flex-col group/card">
          {/* Image Container — smooth zoom on hover */}
          <div
            className="aspect-[4/3] flex items-center justify-center relative overflow-hidden rounded-2xl m-2 sm:m-3 transition-colors duration-300"
            style={{ contain: 'layout style paint' }}
          >
            <img
              src={product.image || '/images/products/placeholder.svg'}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 dark:brightness-105"
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

            {/* Asset Identifier — slides down on hover */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-hejaaz-secondary bg-white/90 dark:bg-hejaaz-primary/90 backdrop-blur-sm shadow-sm transition-all duration-500 group-hover:bg-hejaaz-secondary group-hover:text-white">
                <Shield size={14} />
              </div>
            </div>
          </div>

          {/* Content - Grouped Technical Info */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[9px] font-black text-hejaaz-secondary uppercase tracking-[0.25em] transition-colors">
                {product.category}
              </span>
              <div className="flex-1 h-[1px] bg-hejaaz-secondary/20 transition-all duration-700 group-hover:bg-hejaaz-secondary/50" />
            </div>

            <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight leading-tight mb-3 transition-colors duration-500 group-hover:text-hejaaz-secondary" style={{ color: 'var(--text-main)' }}>
              {product.name}
            </h3>

            {product.tagline && (
              <p className="text-[10px] sm:text-[11px] font-medium leading-snug mb-4 sm:mb-6 line-clamp-2 transition-colors" style={{ color: 'var(--text-muted)' }}>
                {product.tagline}
              </p>
            )}

            <div className="mt-auto pt-3 sm:pt-4 border-t border-hejaaz-border flex items-center justify-between transition-colors">
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>
                Engineering Data
              </span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-hejaaz-surface flex items-center justify-center text-hejaaz-secondary transition-all duration-500 group-hover:bg-hejaaz-secondary group-hover:text-white group-hover:scale-110">
                <ArrowRight size={12} className="transition-transform duration-500 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
