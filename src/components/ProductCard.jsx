import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'

/**
 * REFINED INDUSTRIAL PRODUCT CARD
 * - iOS-compatible image rendering
 * - Lazy loading for performance
 * - Touch-friendly interactions
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="h-full"
      >
        <div className="card-premium h-full flex flex-col group/card">
          {/* Image Container - Neutral Frame */}
          <div
            className="aspect-[4/3] flex items-center justify-center relative overflow-hidden rounded-2xl m-2 sm:m-3 transition-colors duration-300"
            style={{ contain: 'layout style paint' }}
          >
            <img
              src={product.image || '/images/products/placeholder.svg'}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 dark:brightness-105"
              style={{
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              }}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />

            {/* Asset Identifier */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-hejaaz-secondary bg-white/90 dark:bg-hejaaz-primary/90 backdrop-blur-sm shadow-sm transition-all">
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
              <div className="flex-1 h-[1px] bg-hejaaz-secondary/20" />
            </div>

            <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight leading-tight mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>
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
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-hejaaz-surface flex items-center justify-center text-hejaaz-secondary transition-all">
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
