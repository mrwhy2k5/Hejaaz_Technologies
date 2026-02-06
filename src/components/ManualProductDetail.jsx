import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Shield,
  Monitor,
  Activity,
  Zap,
  ArrowDownCircle,
  CheckCircle2,
  MessageCircle,
  Settings,
  Wrench,
  Scale,
  Wifi,
  AlertTriangle,
  Maximize2,
  X,
  ArrowRight,
  Wind
} from 'lucide-react'
import Layout from './Layout'
import SeoHead from './SeoHead'

/**
 * MANUAL PRODUCT DETAIL - V5 (PREMIUM INDUSTRIAL)
 * - Refined glassmorphism architecture
 * - Contrast-optimized engineering grids
 * - Dynamic 2-column calibration layouts
 */

export default function ManualProductDetail({ manual, slug }) {
  const [isZoomed, setIsZoomed] = useState(false)

  const fadeInSlideUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }

  const iconMap = {
    'overload': Shield,
    'shield': Shield,
    'anti-tilt': Activity,
    'activity': Activity,
    'anti-collision': AlertTriangle,
    'rope-slack': ArrowDownCircle,
    'error': AlertTriangle,
    'alert': AlertTriangle,
    'anemometer': Wind,
    'zap': Zap,
    'power': Zap,
    'radius': Scale,
    'angle': Maximize2,
    'monitor': Monitor,
    'display': Monitor,
    'hook': ArrowDownCircle,
  }

  return (
    <Layout>
      <SeoHead
        title={manual.name}
        description={manual.tagline || (manual.overview && manual.overview.slice(0, 160))}
        path={`/products/${slug}`}
      />

      <div className="bg-[var(--bg-main)] min-h-screen pt-24 transition-colors duration-500">
        {/* ============ 🟢 SECTION 1: HERO & SYSTEM OVERVIEW ============ */}
        <section className="py-16 lg:pt-20 lg:pb-32 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-hejaaz-secondary/5 blur-[100px] -z-10" />

          <div className="container-content">
            {/* Navigation Back */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-hejaaz-secondary hover:text-hejaaz-secondary-dark transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-hejaaz-secondary/10 border border-hejaaz-secondary/20 flex items-center justify-center group-hover:bg-hejaaz-secondary group-hover:text-white transition-all shadow-sm">
                  <ArrowLeft size={18} />
                </div>
                <span>Back to Catalog</span>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-16 lg:items-start">
              {/* Product Info */}
              <motion.div
                {...fadeInSlideUp}
                className="lg:col-span-5"
              >
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-md bg-hejaaz-secondary/10 border border-hejaaz-secondary/20 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary animate-pulse" />
                  <span className="text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.3em]">Precision Safety</span>
                </div>

                <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-[1.05] heading-reveal">
                  {manual.name}
                </h1>

                <p className="text-xl lg:text-2xl font-bold mb-10 text-hejaaz-secondary tracking-tight uppercase">
                  {manual.tagline}
                </p>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed font-medium mb-12" style={{ color: 'var(--text-muted)' }}>
                    {manual.overview}
                  </p>
                </div>

                {/* Key Features Matrix */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {manual.keyFeatures?.map((feature, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-[var(--bg-secondary)] rounded-2xl border border-hejaaz-border shadow-sm group hover:border-hejaaz-secondary transition-all">
                      <div className="w-6 h-6 rounded-full bg-hejaaz-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-secondary group-hover:text-white transition-colors">
                        <CheckCircle2 size={14} className="text-hejaaz-secondary group-hover:text-inherit" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider leading-tight" style={{ color: 'var(--text-main)' }}>
                        {feature.split(':')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Schematic Zoom View */}
              <motion.div
                {...fadeInSlideUp}
                className="lg:col-span-7 flex justify-center lg:sticky lg:top-32"
              >
                <div
                  className="relative group cursor-zoom-in w-full"
                  onClick={() => setIsZoomed(true)}
                >
                  <div className="absolute inset-0 bg-hejaaz-secondary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-[2.5rem] p-4 lg:p-6 bg-white dark:bg-zinc-900 shadow-2xl border border-hejaaz-border/50 overflow-hidden transition-all duration-500">
                    <img
                      src={manual.heroImage || manual.systemLayout?.image || "/images/products/placeholder.svg"}
                      alt={manual.name}
                      className="w-full h-auto object-contain max-h-[700px] rounded-2xl transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 right-6 p-3 bg-hejaaz-secondary text-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ 🟢 SECTION 2: SYSTEM LAYOUT & PARAMETERS ============ */}
        <section className="py-24 bg-[var(--bg-secondary)] border-y border-hejaaz-border transition-colors duration-500">
          <div className="container-content">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              {/* Dynamic Safety Parameter Grid */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-1 bg-hejaaz-secondary rounded-full" />
                  <h2 className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>Operational Guardrails</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {manual.safetyParameters?.map((param, i) => {
                    const Icon = iconMap[param.icon?.toLowerCase()] || Shield
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 card-premium flex flex-col gap-6"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-hejaaz-surface flex items-center justify-center text-hejaaz-secondary transition-all group-hover:bg-hejaaz-secondary group-hover:text-white">
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-tight mb-2" style={{ color: 'var(--text-main)' }}>{param.title}</h4>
                          <p className="text-[11px] font-bold uppercase tracking-tight opacity-70" style={{ color: 'var(--text-muted)' }}>{param.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* System Components Checklist */}
              <div className="lg:col-span-5">
                <div className="bg-hejaaz-primary p-10 lg:p-14 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hejaaz-secondary/20 blur-3xl" />
                  <h3 className="text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.4em] mb-12">Hardware Inventory</h3>
                  <div className="space-y-6">
                    {manual.systemLayout?.items?.map((item, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                        <span className="text-hejaaz-secondary font-black text-[10px] tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] opacity-80 group-hover:opacity-100 transition-opacity">
                          {item}
                        </span>
                        <div className="flex-1 h-[1px] bg-white/5" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-white/10">
                    <Link
                      to="/contact"
                      className="btn-primary w-full shadow-hejaaz-secondary/20"
                    >
                      <MessageCircle size={18} /> Request Data Sheet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 🟢 SECTION 3: CALIBRATION & TECH SPECS ============ */}
        <section className="py-24 lg:py-32">
          <div className="container-content">
            {/* Setup & Calibration Section */}
            {manual.calibrationSetup && (
              <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                <motion.div {...fadeInSlideUp}>
                  <div className="flex items-center gap-4 mb-8">
                    <Settings className="text-hejaaz-secondary" size={40} />
                    <h2 className="text-2xl lg:text-4xl font-black tracking-tight uppercase" style={{ color: 'var(--text-main)' }}>
                      {manual.calibrationSetup.title}
                    </h2>
                  </div>
                  <p className="text-lg font-medium mb-12 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {manual.calibrationSetup.description}
                  </p>
                  <div className="grid gap-3">
                    {manual.calibrationSetup.steps?.map((step, i) => (
                      <div key={i} className="flex gap-5 p-5 bg-[var(--bg-secondary)] rounded-2xl border border-hejaaz-border shadow-sm group hover:border-hejaaz-secondary transition-all">
                        <div className="w-8 h-8 rounded-xl bg-hejaaz-secondary flex items-center justify-center text-white font-black text-[10px] shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-tight leading-snug" style={{ color: 'var(--text-main)' }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {manual.calibrationSetup.image && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                  >
                    <div className="absolute -inset-4 bg-hejaaz-secondary/5 rounded-[3rem] -z-10" />
                    <div className="p-0 transition-all max-w-[450px] lg:max-w-xl mx-auto">
                      <img
                        src={manual.calibrationSetup.image}
                        alt="Calibration Interface"
                        className="w-full h-auto rounded-[2rem] shadow-2xl transition-all duration-700 mix-blend-multiply dark:mix-blend-normal dark:brightness-110"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Technical Performance Table (COMPACT GRID) */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-black tracking-tight uppercase" style={{ color: 'var(--text-main)' }}>System Specification</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {manual.specs?.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-[var(--bg-secondary)] rounded-2xl border border-hejaaz-border shadow-sm hover:border-hejaaz-secondary transition-all group">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-muted)' }}>{spec.param}</span>
                    <span className="text-xs font-black uppercase tracking-tighter font-mono" style={{ color: 'var(--text-main)' }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 🟢 SECTION 4: COMPLIANCE BANNER ============ */}
        <section className="py-24 bg-hejaaz-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="container-content relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tight uppercase">
                  Engineered for <br /><span className="text-black/30">Maximum Liability.</span>
                </h2>
                <div className="flex flex-wrap gap-4">
                  {manual.compliance?.map((c, i) => (
                    <div key={i} className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  to="/contact"
                  className="bg-white text-hejaaz-secondary !py-6 !px-12 !text-[13px] uppercase tracking-[0.2em] font-black rounded-2xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4"
                >
                  <Wrench size={20} /> Get Support <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Image Zoom Overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-hejaaz-primary/95 backdrop-blur-2xl flex items-center justify-center p-6 lg:p-20"
            onClick={() => setIsZoomed(false)}
          >
            <button
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors p-4"
              onClick={() => setIsZoomed(false)}
            >
              <span className="text-[10px] font-black tracking-widest uppercase mr-4 text-white">Close View</span>
              <X size={40} className="text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={manual.heroImage || manual.systemLayout?.image}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
