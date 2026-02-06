import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'

/**
 * REFINED INDUSTRIAL PRODUCT CARD
 * - Consistent framing (framed-container equivalent)
 * - Industrial typography (font-black, tracking-widest)
 * - Controlled image scale
 */
export default function ProductCard({ product, index = 0 }) {
  const slug = product.slug || product.id
  const url = `/products/${slug}`

  return (
    <Link to={url} className="block h-full group">
      <motion.article
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="h-full"
      >
        <div className="card-premium h-full flex flex-col group/card">
          {/* Image Container - Neutral Frame */}
          <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden rounded-2xl m-3 transition-colors duration-300">
            <img
              src={product.image || '/images/products/placeholder.svg'}
              alt=""
              className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 dark:brightness-105"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />

            {/* Asset Identifier */}
            <div className="absolute top-4 left-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-hejaaz-secondary bg-white/90 dark:bg-hejaaz-primary/90 backdrop-blur-sm shadow-sm transition-all group-hover/card:bg-hejaaz-secondary group-hover/card:text-white">
                <Shield size={16} />
              </div>
            </div>

            <div className="absolute inset-0 bg-hejaaz-primary/0 group-hover/card:bg-hejaaz-primary/5 dark:group-hover/card:bg-white/5 transition-colors duration-300" />
          </div>

          {/* Content - Grouped Technical Info */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[9px] font-black text-hejaaz-secondary uppercase tracking-[0.25em] transition-colors">
                {product.category}
              </span>
              <div className="flex-1 h-[1px] bg-hejaaz-secondary/20" />
            </div>

            <h3 className="text-sm font-black uppercase tracking-tight leading-tight mb-3 group-hover/card:text-hejaaz-secondary transition-colors" style={{ color: 'var(--text-main)' }}>
              {product.name}
            </h3>

            {product.tagline && (
              <p className="text-[11px] font-medium leading-snug mb-6 line-clamp-2 transition-colors" style={{ color: 'var(--text-muted)' }}>
                {product.tagline}
              </p>
            )}

            <div className="mt-auto pt-4 border-t border-hejaaz-border flex items-center justify-between transition-colors">
              <span className="text-[9px] font-black uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>
                Engineering Data
              </span>
              <div className="w-8 h-8 rounded-full bg-hejaaz-surface flex items-center justify-center text-hejaaz-secondary group-hover/card:bg-hejaaz-secondary group-hover/card:text-white transition-all">
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
