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
 * MANUAL PRODUCT DETAIL - V6 (iOS + Performance)
 * - Lazy loading images
 * - Mobile-responsive layouts
 * - GPU-optimized rendering
 */

export default function ManualProductDetail({ manual, slug }) {
  const [isZoomed, setIsZoomed] = useState(false)

  const fadeInSlideUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
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

      <div className="bg-[var(--bg-main)] min-h-screen pt-20 sm:pt-24 transition-colors duration-500">
        {/* ============ 🟢 SECTION 1: HERO & SYSTEM OVERVIEW ============ */}
        <section className="py-10 sm:py-16 lg:pt-16 lg:pb-24 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-hejaaz-secondary/5 blur-[100px] -z-10" />

          <div className="container-content">
            {/* Navigation Back */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 sm:mb-12"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 sm:gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-hejaaz-secondary hover:text-hejaaz-secondary-dark transition-all"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-hejaaz-secondary/10 border border-hejaaz-secondary/20 flex items-center justify-center group-hover:bg-hejaaz-secondary group-hover:text-white transition-all shadow-sm">
                  <ArrowLeft size={16} />
                </div>
                <span>Back to Catalog</span>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 lg:items-start">
              {/* Product Info */}
              <motion.div
                {...fadeInSlideUp}
                className="lg:col-span-5"
              >
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-md bg-hejaaz-secondary/10 border border-hejaaz-secondary/20 mb-6 sm:mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary animate-pulse" />
                  <span className="text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.3em]">Precision Safety</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black mb-6 sm:mb-8 leading-[1.05] heading-reveal">
                  {manual.name}
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-10 text-hejaaz-secondary tracking-tight uppercase">
                  {manual.tagline}
                </p>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-base sm:text-lg leading-relaxed font-medium mb-8 sm:mb-12" style={{ color: 'var(--text-muted)' }}>
                    {manual.overview}
                  </p>
                </div>

                {/* Key Features Matrix */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {manual.keyFeatures?.map((feature, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl border border-hejaaz-border shadow-sm transition-all">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-hejaaz-secondary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-hejaaz-secondary" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-tight" style={{ color: 'var(--text-main)' }}>
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
                  className="relative group w-full"
                  onClick={() => setIsZoomed(true)}
                  style={{ cursor: 'zoom-in' }}
                >
                  <div className="relative p-0 sm:p-2 lg:p-4 transition-all duration-500">
                    <img
                      src={manual.heroImage || manual.systemLayout?.image || "/images/products/placeholder.svg"}
                      alt={manual.name}
                      className="w-full h-auto object-contain rounded-xl sm:rounded-2xl transition-all duration-700 mix-blend-multiply dark:mix-blend-normal"
                      style={{
                        maxHeight: '500px',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 bg-hejaaz-secondary text-white rounded-lg sm:rounded-xl shadow-lg opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ 🟢 SECTION 2: SYSTEM LAYOUT & PARAMETERS ============ */}
        <section className="py-8 sm:py-16 bg-[var(--bg-secondary)] border-y border-hejaaz-border transition-colors duration-500">
          <div className="container-content">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
              {/* Dynamic Safety Parameter Grid */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-8 sm:mb-12">
                  <div className="w-12 h-1 bg-hejaaz-secondary rounded-full" />
                  <h2 className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>Operational Guardrails</h2>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {manual.safetyParameters?.map((param, i) => {
                    const Icon = iconMap[param.icon?.toLowerCase()] || Shield
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 sm:p-8 card-premium flex flex-col gap-3 sm:gap-6"
                      >
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-hejaaz-surface flex items-center justify-center text-hejaaz-secondary transition-all">
                          <Icon size={20} strokeWidth={1.5} className="sm:w-7 sm:h-7" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight mb-1 sm:mb-2" style={{ color: 'var(--text-main)' }}>{param.title}</h4>
                          <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-tight opacity-70 hidden sm:block" style={{ color: 'var(--text-muted)' }}>{param.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* System Components Checklist */}
              <div className="lg:col-span-5">
                <div className="bg-hejaaz-primary p-6 sm:p-10 lg:p-14 rounded-2xl sm:rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hejaaz-secondary/20 blur-3xl" />
                  <h3 className="text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.4em] mb-8 sm:mb-12">Hardware Inventory</h3>
                  <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                    {manual.systemLayout?.items?.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 sm:gap-6 group">
                        <span className="text-hejaaz-secondary font-black text-[10px] tracking-tighter opacity-50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] opacity-80">
                          {item}
                        </span>
                        <div className="flex-1 h-[1px] bg-white/5" />
                      </div>
                    ))}
                  </div>

                  {/* Only show system layout image here if it's different from hero image to avoid repetition */}
                  {manual.systemLayout?.image && manual.systemLayout.image !== (manual.heroImage || "") && (
                    <div className="mt-6 sm:mt-8 relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={manual.systemLayout.image}
                        alt="System Schematic"
                        className="w-full h-auto object-contain bg-white"
                        loading="lazy"
                        decoding="async"
                        style={{
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                        }}
                      />
                    </div>
                  )}

                  <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-white/10">
                    <Link
                      to="/contact"
                      className="btn-primary w-full shadow-hejaaz-secondary/20"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <MessageCircle size={18} /> Request Technical Data
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 🟢 SECTION 1.5: SYSTEM MODULES (NEW V2.0 ARCHITECTURE) ============ */}
        {manual.features && Array.isArray(manual.features[0]) === false && typeof manual.features[0] === 'object' && (
          <div className="bg-[var(--bg-main)]">
            {manual.features.map((feature, i) => (
              <section key={i} className={`py-12 sm:py-20 ${i % 2 !== 0 ? 'bg-[var(--card-bg)]' : 'bg-[var(--bg-main)]'} overflow-hidden border-b border-hejaaz-border/40`}>
                <div className="container-content">
                  
                  {/* Part 1: Header (Title & Layout Image) */}
                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-10 sm:mb-16">
                    <motion.div 
                      {...fadeInSlideUp}
                      className="lg:col-span-6"
                    >
                      <div className="inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-hejaaz-secondary/10 border border-hejaaz-secondary/10 mb-8">
                        <div className="w-2 h-2 rounded-full bg-hejaaz-secondary animate-pulse" />
                        <span className="text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.4em]">System Module 0{i + 1}</span>
                      </div>
                      
                      <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-8 leading-[1.1]" style={{ color: 'var(--text-main)' }}>
                        {feature.title}
                      </h2>
                      
                      <p className="text-lg font-medium leading-relaxed opacity-90 mb-10" style={{ color: 'var(--text-muted)' }}>
                        {feature.description}
                      </p>

                      {/* Feature Sub-Matrix */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {feature.subFeatures?.map((sub, j) => (
                          <div key={j} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-hejaaz-secondary" />
                            <span className="text-[11px] font-black uppercase tracking-wider">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      {...fadeInSlideUp}
                      className="lg:col-span-6 flex justify-center"
                    >
                      <div className="relative group w-full max-w-[600px]">
                        <img 
                          src={feature.layoutImage || "/images/products/placeholder.svg"} 
                          alt={`${feature.title} Layout`} 
                          className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Part 2: Hardware Unit View */}
                  {feature.image && (
                    <motion.div 
                      {...fadeInSlideUp}
                      className="flex flex-col items-center justify-center p-8 bg-[var(--bg-secondary)] rounded-[3rem] border border-hejaaz-border/40"
                    >
                       <img 
                         src={feature.image} 
                         alt={`${feature.title} Unit`} 
                         className="max-h-[400px] w-auto object-contain mb-8 group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply dark:mix-blend-normal"
                       />
                       <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Industrial hardware interface visual</p>
                    </motion.div>
                  )}

                  {/* Part 3: Module Specifications */}
                  {feature.specs && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-20">
                      {feature.specs.map((spec, k) => (
                        <div key={k} className="p-6 bg-[var(--bg-main)] rounded-2xl border border-hejaaz-border/40 flex flex-col gap-2">
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40 text-hejaaz-secondary">{spec.param}</span>
                          <span className="text-sm sm:text-base font-black tracking-tight" style={{ color: 'var(--text-main)' }}>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ============ 🟢 SECTION 3: CALIBRATION & TECH SPECS ============ */}
        <section className="py-8 sm:py-16 lg:py-24">
          <div className="container-content">
            {/* Setup & Calibration Section */}
            {manual.calibrationSetup && (
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 sm:mb-32">
                <motion.div {...fadeInSlideUp}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <Settings className="text-hejaaz-secondary" size={28} />
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tight uppercase" style={{ color: 'var(--text-main)' }}>
                      {manual.calibrationSetup.title}
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg font-medium mb-8 sm:mb-12 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {manual.calibrationSetup.description}
                  </p>
                  <div className="grid gap-3">
                    {manual.calibrationSetup.steps?.map((step, i) => (
                      <div key={i} className="flex gap-3 sm:gap-5 p-4 sm:p-5 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl border border-hejaaz-border shadow-sm transition-all">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-hejaaz-secondary flex items-center justify-center text-white font-black text-[10px] shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-tight leading-snug" style={{ color: 'var(--text-main)' }}>
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
                    <div className="absolute -inset-4 bg-hejaaz-secondary/5 rounded-2xl sm:rounded-[3rem] -z-10" />
                    <div className="p-0 transition-all max-w-[350px] sm:max-w-[450px] lg:max-w-xl mx-auto">
                      <img
                        src={manual.calibrationSetup.image}
                        alt="Calibration Interface"
                        className="w-full h-auto rounded-xl sm:rounded-[2rem] shadow-2xl transition-all duration-700 mix-blend-multiply dark:mix-blend-normal dark:brightness-110"
                        loading="lazy"
                        decoding="async"
                        style={{
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Technical Performance Table (COMPACT GRID) */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight uppercase" style={{ color: 'var(--text-main)' }}>System Specification</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {manual.specs?.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center p-4 sm:p-6 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl border border-hejaaz-border shadow-sm transition-all">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest opacity-60" style={{ color: 'var(--text-muted)' }}>{spec.param}</span>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-tighter font-mono" style={{ color: 'var(--text-main)' }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 🟢 SECTION 4: COMPLIANCE BANNER ============ */}
        <section className="py-10 sm:py-20 bg-hejaaz-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="container-content relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight tracking-tight uppercase">
                  Engineered for <br /><span className="text-black/30">Maximum Liability.</span>
                </h2>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {manual.compliance?.map((c, i) => (
                    <div key={i} className="px-4 sm:px-5 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-start sm:justify-end">
                <Link
                  to="/contact"
                  className="bg-white text-hejaaz-secondary !py-4 !px-8 sm:!py-6 sm:!px-12 !text-[11px] sm:!text-[13px] uppercase tracking-[0.2em] font-black rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3 sm:gap-4"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Wrench size={18} /> Get Support <ArrowRight size={18} />
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
            className="fixed inset-0 z-[100] bg-hejaaz-primary/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 lg:p-20"
            onClick={() => setIsZoomed(false)}
            style={{ WebkitBackfaceVisibility: 'hidden' }}
          >
            <button
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-colors p-3 sm:p-4"
              onClick={() => setIsZoomed(false)}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="text-[10px] font-black tracking-widest uppercase mr-3 sm:mr-4 text-white hidden sm:inline">Close View</span>
              <X size={30} className="text-white inline" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={manual.heroImage || manual.systemLayout?.image}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-xl sm:rounded-2xl"
              style={{
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
