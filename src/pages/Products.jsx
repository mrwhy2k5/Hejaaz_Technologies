import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import CTAButtons from '../components/CTAButtons'
import productsData from '../data/products.json'
import { useTheme } from '../context/ThemeContext'
import { useEffect } from 'react'
import {
  fadeInUp,
  fadeInLeft,
  scaleIn,
  staggerContainer,
  staggerChild,
  sectionTagReveal,
  withDelay,
} from '../utils/animations'

export default function Products() {
  const { previousPath } = useTheme()

  // Only skip animations if we are specifically coming BACK from a product detail page
  const isReturningFromDetail = previousPath &&
    previousPath.startsWith('/products/') &&
    previousPath !== '/products'

  return (
    <Layout>
      <SeoHead
        title="Industrial Safety Systems Catalog"
        description="Explore our range of Safe Load Indicators and crane safety systems for tower, EOT, gantry, and mobile cranes."
        path="/products"
      />

      <PageHeader
        title="Industrial Safety & Load Monitoring"
        subtitle="Precision engineering solutions for real-time crane overload protection and asset automation."
        backgroundImage="/images/industrial-bg-cranes.png"
        isVisited={isReturningFromDetail}
      />

      {/* ============ PRODUCT MATRIX ============ */}
      <section className="py-6 sm:py-10 lg:py-16 bg-[var(--bg-main)] overflow-hidden transition-colors duration-500">
        <div className="container-content">
          <motion.div
            {...sectionTagReveal}
            className="flex items-center justify-between mb-6 sm:mb-8"
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3" style={{ color: 'var(--text-muted)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary" />
              Product Matrix
            </h2>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-60" style={{ color: 'var(--text-muted)' }}>
              {productsData.filter(p => !p.hidden).length} Systems Active
            </div>
          </motion.div>

          <motion.div
            {...(!isReturningFromDetail ? staggerContainer(0.1) : { initial: 'visible', animate: 'visible' })}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
          >
            {productsData.filter(p => !p.hidden).map((product, i) => (
              <motion.div
                key={product.id}
                variants={staggerChild}
              >
                <ProductCard product={product} index={i} isVisited={isReturningFromDetail} />
              </motion.div>
            ))}
          </motion.div>

          {/* COMPACT CTA SECTION */}
          <motion.div
            {...scaleIn}
            className="mt-12 sm:mt-24 bg-hejaaz-secondary p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-[2rem] text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-12">
              <motion.div {...fadeInLeft} className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-tighter text-white uppercase leading-none">Custom Engineering <br />Requirements?</h3>
                <p className="text-white/80 text-sm sm:text-lg font-bold uppercase tracking-tight">
                  Tailoring safety systems for unconventional setups and OEM requirements.
                </p>
              </motion.div>
              <motion.div {...withDelay(fadeInUp, 0.4)} className="flex">
                <a
                  href="https://wa.me/919361227290?text=I%20am%20interested%20in%20a%20Technical%20Quote%20for%20your%20Safety%20Systems."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-hejaaz-secondary !py-4 !px-8 sm:!py-6 sm:!px-12 !text-[11px] sm:!text-[12px] uppercase tracking-[0.2em] font-black rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3 sm:gap-4 hover:scale-105 duration-500"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <MessageCircle size={18} /> Request Technical Quote
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
