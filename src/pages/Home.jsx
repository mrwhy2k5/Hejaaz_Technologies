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

/**
 * HEJAAZ TECHNOLOGIES - HOME V4 (PREMIUM INDUSTRIAL)
 * - Enhanced with high-contrast design system
 * - Gradient typography (heading-reveal)
 * - card-premium elevation system
 */

export default function Home() {
  const fadeInSlideUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut' }
  }

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
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-hejaaz-secondary/5 blur-[120px] -z-10" />

        <div className="container-content">
          <div className="max-w-4xl mb-24">
            <motion.h2
              {...fadeInSlideUp}
              className="text-3xl lg:text-5xl font-black leading-[1] mb-10 tracking-tighter heading-reveal"
            >
              We make safety systems that <span className="text-hejaaz-secondary">prevent crane accidents.</span>
            </motion.h2>
            <motion.p
              {...fadeInSlideUp}
              transition={{ delay: 0.1 }}
              className="text-xl lg:text-2xl font-bold uppercase tracking-tight text-hejaaz-secondary"
            >
              Protecting operators, assets, and sites with precision load monitoring.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Prevents Overload', desc: 'Automatically stops lifting beyond safe mechanical capacity' },
              { icon: Bell, title: 'Audio & Visual Alerts', desc: 'Instant warnings before dangerous conditions occur' },
              { icon: Monitor, title: 'Real-Time Monitoring', desc: 'Continuous data display for safe operator control' },
              { icon: Award, title: 'Industrial Compliance', desc: 'Meets safety standards for modern heavy machinery' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-premium p-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-hejaaz-secondary mb-8 group-hover:bg-hejaaz-secondary group-hover:text-white transition-all bg-hejaaz-surface shadow-sm">
                  <card.icon strokeWidth={2} size={32} />
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] mb-4 leading-tight transition-colors" style={{ color: 'var(--text-main)' }}>{card.title}</h3>
                <p className="text-[11px] font-bold leading-tight uppercase tracking-tight opacity-70 transition-colors" style={{ color: 'var(--text-muted)' }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEVEL 3: TECHNICAL DETAILS (FOR ENGINEERS) ============ */}
      <section className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden transition-colors duration-500">
        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div {...fadeInSlideUp} className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-hejaaz-secondary rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: 'var(--text-muted)' }}>Reliability Metrics</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black mb-10 leading-[0.95] tracking-tighter heading-reveal">
                Engineered for <br />
                <span className="text-hejaaz-secondary">Heavy Duty.</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Load Accuracy: ±1.5% of Full Scale',
                  'Response Time: < 100 milliseconds',
                  'Operational Temp: -10°C to 55°C',
                  'Connectivity: Wi-fi AP & Modbus Module',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-[var(--bg-main)] rounded-xl border border-hejaaz-border shadow-sm">
                    <Zap className="text-hejaaz-secondary" size={16} />
                    <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInSlideUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-hejaaz-secondary/10 rounded-[3rem] blur-3xl" />
                <div className="relative rounded-[3rem] p-4 lg:p-6 transition-all duration-500">
                  <div className="aspect-video flex items-center justify-center p-8 overflow-hidden group rounded-[2rem] shadow-2xl border border-hejaaz-border/50 bg-white">
                    <img
                      src="/images/heavy-lifting.jpg"
                      alt="Crane Safety Illustration"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ LEVEL 4: PRODUCT SPOTLIGHT ============ */}
      <section className="section-padding bg-[var(--bg-main)] transition-colors duration-500">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-[11px] font-black text-hejaaz-secondary uppercase tracking-[0.4em] mb-6 font-bold">Our Solutions</h2>
              <h2 className="text-3xl lg:text-5xl font-black leading-none tracking-tighter heading-reveal">Safety Systems for <br />Heavy Lifting</h2>
            </div>
            <Link
              to="/products"
              className="group flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.2em] transition-colors hover:text-hejaaz-secondary font-bold text-main"
            >
              Explore All Products <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productsData.slice(0, 3).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEVEL 5: INDUSTRY INTEGRATION ============ */}
      <section className="section-padding bg-[var(--bg-secondary)] border-y border-hejaaz-border transition-colors duration-500">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[11px] font-black text-hejaaz-secondary uppercase tracking-[0.4em] mb-6">Sector Expertise</h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter heading-reveal">Integration across <br />safety-critical sectors.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.slice(0, 8).map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-premium p-10 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 bg-hejaaz-surface border border-hejaaz-border group-hover:bg-hejaaz-secondary/10 transition-colors">
                  <Factory className="w-5 h-5 text-hejaaz-secondary" />
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-[0.2em] mb-4 transition-colors text-main">{ind.name}</h3>
                <p className="text-[11px] font-bold leading-tight uppercase tracking-tight opacity-70 transition-colors" style={{ color: 'var(--text-muted)' }}>{ind.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEVEL 6: BANNER ============ */}
      <section className="bg-hejaaz-secondary py-24 lg:py-32 text-white relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container-content relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/20 border border-white/30 mb-8 font-black uppercase tracking-widest text-[10px]">
                <MapPin size={12} /> PAN-India Service Network
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-10 uppercase">
                Deployed across <br /><span className="text-black/30">500+ Sites.</span>
              </h2>
              <p className="text-xl font-bold uppercase tracking-tight opacity-80 mb-12">
                We provide site-ready safety systems with complete documentation and technical support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white text-hejaaz-secondary !py-6 !px-12 !text-[13px] uppercase tracking-[0.2em] font-black rounded-2xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                  <Headset size={20} /> Request Consultation
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-2 border-white/10 flex items-center justify-center animate-spin-slow">
                  <div className="w-64 h-64 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-white/40 flex items-center justify-center" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield size={100} className="text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
