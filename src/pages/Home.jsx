import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield,
  Cog,
  Factory,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Award,
  Zap,
  Monitor,
  Bell,
  Activity,
  MessageCircle,
  Headset,
} from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import productsData from '../data/products.json'
import industriesData from '../data/industries.json'
import ProductCard from '../components/ProductCard'
import HeroSlider from '../components/HeroSlider'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  blurIn,
  staggerContainer,
  staggerChild,
  staggerChildScale,
  sectionTagReveal,
  sectionHeadingReveal,
  sectionDescReveal,
  imageReveal,
  lineExpand,
  withDelay,
  withStaggerIndex,
  easings,
} from '../utils/animations'

/**
 * HEJAAZ TECHNOLOGIES - HOME V6 (Precision Motion Edition)
 * - Premium industrial-themed animations
 * - Smooth, slow reveals that attract customers
 * - Staggered card entrances
 * - Floating decorative elements
 * - Mobile-optimized performance
 */

export default function Home() {
  return (
    <Layout>
      <SeoHead
        title="Home"
        description="Superior safety systems that prevent crane accidents. Protect your operators, assets, and sites with Hejaaz Technologies."
        path="/"
      />

      {/* ============ LEVEL 1: HERO SLIDER ============ */}
      <HeroSlider />

      {/* ============ LEVEL 2: SCAN & UNDERSTAND ============ */}
      <section className="bg-[var(--bg-main)] section-padding border-b border-hejaaz-border relative overflow-hidden transition-colors duration-500">
        {/* Decorative floating glow */}
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-hejaaz-secondary/5 blur-[120px] -z-10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-content">
          <div className="max-w-4xl mb-8 lg:mb-16">
            <motion.h2
              {...sectionHeadingReveal}
              className="text-2xl sm:text-3xl lg:text-5xl font-black leading-[1.05] mb-6 sm:mb-10 tracking-tighter heading-reveal"
            >
              We make safety systems that <span className="text-hejaaz-secondary">prevent crane accidents.</span>
            </motion.h2>
            <motion.p
              {...sectionDescReveal}
              className="text-base sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-hejaaz-secondary"
            >
              Protecting operators, assets, and sites with precision load monitoring.
            </motion.p>
          </div>

          {/* Staggered card entrance */}
          <motion.div
            {...staggerContainer(0.12)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {[
              { icon: Shield, title: 'Prevents Overload', desc: 'Automatically stops lifting beyond safe mechanical capacity' },
              { icon: Bell, title: 'Audio & Visual Alerts', desc: 'Instant warnings before dangerous conditions occur' },
              { icon: Monitor, title: 'Real-Time Monitoring', desc: 'Continuous data display for safe operator control' },
              { icon: Award, title: 'Industrial Compliance', desc: 'Meets safety standards for modern heavy machinery' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={{
                  initial: { opacity: 0, y: 40, scale: 0.95 },
                  whileInView: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.8, ease: easings.industrial }}
                className="card-premium p-4 sm:p-8 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-hejaaz-secondary mb-4 sm:mb-8 bg-hejaaz-surface shadow-sm transition-all group-hover:scale-110 group-hover:shadow-lg duration-500">
                  <card.icon strokeWidth={2} size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-2 sm:mb-4 leading-tight transition-colors" style={{ color: 'var(--text-main)' }}>{card.title}</h3>
                <p className="text-[9px] sm:text-[11px] font-bold leading-tight uppercase tracking-tight opacity-70 transition-colors hidden sm:block" style={{ color: 'var(--text-muted)' }}>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ LEVEL 3: TECHNICAL DETAILS (FOR ENGINEERS) ============ */}
      <section className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden transition-colors duration-500">
        {/* Decorative spinning gear */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 opacity-[0.03] pointer-events-none">
          <Cog className="w-full h-full animate-spin-slow" />
        </div>

        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left column — text + specs (slides in from left) */}
            <motion.div {...fadeInLeft} className="lg:col-span-5">
              <motion.div {...sectionTagReveal} className="flex items-center gap-4 mb-4">
                <motion.div {...lineExpand} className="w-12 h-1 bg-hejaaz-secondary rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: 'var(--text-muted)' }}>Reliability Metrics</span>
              </motion.div>
              <motion.h2
                {...sectionHeadingReveal}
                className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 sm:mb-6 leading-[0.95] tracking-tighter heading-reveal"
              >
                Engineered for <br />
                <span className="text-hejaaz-secondary">Heavy Duty.</span>
              </motion.h2>

              {/* Staggered spec items */}
              <motion.div {...staggerContainer(0.1)} className="space-y-2 sm:space-y-3">
                {[
                  'Load Accuracy: ±1.5% of Full Scale',
                  'Response Time: < 100 milliseconds',
                  'Operational Temp: -10°C to 55°C',
                  'Connectivity: Wi-fi AP & Modbus Module',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      initial: { opacity: 0, x: -30 },
                      whileInView: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.7, ease: easings.industrial }}
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-[var(--bg-main)] rounded-xl border border-hejaaz-border shadow-sm group hover:border-hejaaz-secondary/30 transition-all duration-500"
                  >
                    <Zap className="text-hejaaz-secondary shrink-0 group-hover:scale-110 transition-transform duration-500" size={14} />
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest" style={{ color: 'var(--text-main)' }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column — image (slides in from right with scale) */}
            <motion.div
              {...imageReveal}
              className="lg:col-span-7"
            >
              <div className="relative">
                {/* Glowing background pulse */}
                <motion.div
                  className="absolute inset-0 bg-hejaaz-secondary/10 rounded-2xl sm:rounded-[3rem] blur-3xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative rounded-2xl sm:rounded-[3rem] p-2 sm:p-4 lg:p-6 transition-all duration-500">
                  <div className="flex items-center justify-center overflow-hidden group rounded-xl sm:rounded-[2rem] shadow-2xl border border-hejaaz-border/50 bg-white">
                    <img
                      src="/images/heavy-lifting.jpg"
                      alt="Crane Safety Illustration"
                      className="w-full h-auto transition-transform duration-[1.5s] group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      style={{
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ LEVEL 4: PRODUCT SPOTLIGHT ============ */}
      <section className="section-padding bg-[var(--bg-main)] overflow-hidden transition-colors duration-500">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8 mb-6 lg:mb-12">
            <div className="max-w-2xl">
              <motion.h2
                {...sectionTagReveal}
                className="text-[11px] font-black text-hejaaz-secondary uppercase tracking-[0.4em] mb-4 sm:mb-6 font-bold"
              >
                Our Solutions
              </motion.h2>
              <motion.h2
                {...sectionHeadingReveal}
                className="text-2xl sm:text-3xl lg:text-5xl font-black leading-none tracking-tighter heading-reveal"
              >
                Safety Systems for <br />Heavy Lifting
              </motion.h2>
            </div>
            <motion.div {...withDelay(fadeInUp, 0.4)}>
              <Link
                to="/products"
                className="group flex items-center gap-3 sm:gap-4 text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] transition-colors hover:text-hejaaz-secondary font-bold text-main"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Explore All Products <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Staggered product cards */}
          <motion.div
            {...staggerContainer(0.15)}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8"
          >
            {productsData.filter(p => !p.hidden).slice(0, 3).map((product, i) => (
              <motion.div
                key={product.id}
                variants={staggerChild}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ LEVEL 5: INDUSTRY INTEGRATION ============ */}
      <section className="section-padding bg-[var(--bg-secondary)] border-y border-hejaaz-border overflow-hidden transition-colors duration-500">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-12">
            <motion.h2
              {...sectionTagReveal}
              className="text-[11px] font-black text-hejaaz-secondary uppercase tracking-[0.4em] mb-4 sm:mb-6"
            >
              Sector Expertise
            </motion.h2>
            <motion.h2
              {...sectionHeadingReveal}
              className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tighter heading-reveal"
            >
              Integration across <br />safety-critical sectors.
            </motion.h2>
          </div>

          {/* Staggered industry cards */}
          <motion.div
            {...staggerContainer(0.08)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {industriesData.slice(0, 8).map((ind, i) => (
              <motion.div
                key={ind.id}
                variants={{
                  initial: { opacity: 0, y: 30, scale: 0.95 },
                  whileInView: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, ease: easings.smooth }}
                className="card-premium p-4 sm:p-8 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-8 bg-hejaaz-surface border border-hejaaz-border transition-all duration-500 group-hover:scale-110 group-hover:bg-hejaaz-secondary group-hover:text-white group-hover:border-hejaaz-secondary">
                  <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-hejaaz-secondary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] mb-2 sm:mb-4 transition-colors text-main">{ind.name}</h3>
                <p className="text-[9px] sm:text-[11px] font-bold leading-tight uppercase tracking-tight opacity-70 transition-colors hidden sm:block" style={{ color: 'var(--text-muted)' }}>{ind.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ LEVEL 6: BANNER ============ */}
      <section className="bg-hejaaz-secondary py-16 sm:py-24 lg:py-32 text-white relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container-content relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeInLeft}>
              <motion.div
                {...withDelay(blurIn, 0.1)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/20 border border-white/30 mb-6 sm:mb-8 font-black uppercase tracking-widest text-[10px]"
              >
                <MapPin size={12} /> PAN-India Service Network
              </motion.div>
              <motion.h2
                {...withDelay(fadeInUp, 0.2)}
                className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6 sm:mb-10 uppercase"
              >
                Deployed across <br /><span className="text-white/40">500+ Sites.</span>
              </motion.h2>
              <motion.p
                {...withDelay(fadeInUp, 0.35)}
                className="text-base sm:text-xl font-bold uppercase tracking-tight opacity-90 mb-8 sm:mb-12"
              >
                We provide site-ready safety systems with complete documentation and technical support.
              </motion.p>
              <motion.div {...withDelay(fadeInUp, 0.5)} className="flex flex-wrap gap-4">
                <Link
                  to="/contact#quote-form"
                  className="bg-white text-hejaaz-secondary !py-4 !px-8 sm:!py-6 sm:!px-12 !text-[11px] sm:!text-[13px] uppercase tracking-[0.2em] font-black rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3 hover:scale-105 duration-500"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Headset size={18} /> Request Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Decorative animated circles — desktop only */}
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <motion.div
                  className="w-80 h-80 rounded-full border-2 border-white/10 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <motion.div
                    className="w-64 h-64 rounded-full border-2 border-white/20 flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-48 h-48 rounded-full border-2 border-white/40 flex items-center justify-center" />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Shield size={100} className="text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
