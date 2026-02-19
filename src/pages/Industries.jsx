import { motion } from 'framer-motion'
import {
  Building2,
  Factory,
  Warehouse,
  Ship,
  Mountain,
  Zap,
  Users,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import CTAButtons from '../components/CTAButtons'
import industriesData from '../data/industries.json'
import { Link } from 'react-router-dom'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  sectionTagReveal,
  sectionHeadingReveal,
  sectionDescReveal,
  lineExpand,
  withDelay,
  easings,
} from '../utils/animations'

const iconMap = {
  Building2,
  Factory,
  Warehouse,
  Ship,
  Mountain,
  Zap,
  Users,
  ClipboardCheck,
}

export default function Industries() {
  return (
    <Layout>
      <SeoHead title="Industries Served" description="Crane OEMs, EPCs, factories, ports, mining, power, safety auditors." path="/industries" />
      <PageHeader
        title="Industries Served"
        subtitle="Serving crane OEMs, EPCs, factories, and ports with engineering-led safety solutions."
        backgroundImage="/images/industrial-bg-port.png"
      />

      <section className="section-padding bg-[var(--bg-main)] border-b border-hejaaz-border relative overflow-hidden transition-colors duration-500">
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-hejaaz-secondary/5 blur-[120px] -z-10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              {...fadeInLeft}
              className="lg:col-span-8"
            >
              <motion.div {...sectionTagReveal} className="flex items-center gap-4 mb-8">
                <motion.div {...lineExpand} className="w-12 h-1 rounded-full bg-hejaaz-secondary" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-hejaaz-secondary transition-colors">Our Reach</h2>
              </motion.div>
              <motion.h1
                {...sectionHeadingReveal}
                className="text-3xl sm:text-4xl lg:text-7xl font-black tracking-tighter leading-[0.95] transition-colors heading-reveal uppercase mb-6 sm:mb-10"
              >
                Critical Safety <br />Integration <span className="text-hejaaz-secondary">Across Sectors.</span>
              </motion.h1>
              <motion.p
                {...sectionDescReveal}
                className="text-base sm:text-xl lg:text-2xl text-[var(--text-muted)] font-bold uppercase tracking-tight max-w-3xl leading-tight transition-colors"
              >
                Hejaaz Technologies serves as a technical partner for mission-critical operations, delivering
                robust automation and monitoring systems for high-stakes industrial environments.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-500">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 lg:mb-12 gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <motion.h2
                {...sectionTagReveal}
                className="text-[11px] font-black uppercase tracking-[0.4em] text-hejaaz-secondary mb-6 flex items-center justify-center lg:justify-start gap-3 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-hejaaz-secondary animate-pulse" />
                Industry Matrix
              </motion.h2>
              <motion.h2
                {...sectionHeadingReveal}
                className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter leading-none heading-reveal uppercase"
              >
                Verified Sectors.
              </motion.h2>
            </div>
            <motion.div
              {...withDelay(fadeInRight, 0.3)}
              className="hidden lg:block text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.3em] bg-hejaaz-surface px-5 py-3 rounded-xl border border-hejaaz-border shadow-sm"
            >
              Global Support Active
            </motion.div>
          </div>

          <motion.div
            {...staggerContainer(0.08)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {industriesData.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory
              return (
                <motion.div
                  key={ind.id}
                  variants={{
                    initial: { opacity: 0, y: 40, scale: 0.95 },
                    whileInView: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.8, ease: easings.industrial }}
                  className="group card-premium p-4 sm:p-8 flex flex-col h-full"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8 bg-hejaaz-surface border border-hejaaz-border group-hover:bg-hejaaz-secondary group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110">
                    <Icon size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-[10px] sm:text-[12px] font-black uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-4 group-hover:text-hejaaz-secondary transition-colors text-main line-clamp-1">{ind.name}</h3>
                  <p className="text-[9px] sm:text-[11px] font-bold leading-tight mb-4 sm:mb-8 flex-1 line-clamp-3 uppercase tracking-tight text-muted transition-colors hidden sm:block">{ind.description}</p>

                  <div className="mt-auto pt-6 border-t border-hejaaz-border flex items-center justify-between transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-hejaaz-secondary transition-colors">
                      Solutions
                    </span>
                    <ArrowRight size={16} className="text-hejaaz-secondary transition-transform group-hover:translate-x-2 duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            {...scaleIn}
            className="mt-16 sm:mt-24 lg:mt-32"
          >
            <div className="bg-hejaaz-secondary p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 z-0 opacity-20 grayscale scale-110 transition-transform hover:scale-100 duration-1000"
                style={{ backgroundImage: `url('/images/industrial-bg-port.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-hejaaz-secondary/40 backdrop-blur-[2px]" />

              <div className="relative z-10 max-w-3xl">
                <motion.h2
                  {...sectionHeadingReveal}
                  className="text-3xl sm:text-4xl lg:text-7xl font-black mb-6 sm:mb-10 text-white tracking-tighter leading-[0.95] uppercase"
                >
                  Serving Your <br />Specific Sector.
                </motion.h2>
                <motion.p
                  {...sectionDescReveal}
                  className="text-white/80 text-base sm:text-xl lg:text-2xl mb-8 sm:mb-12 font-bold uppercase tracking-tight leading-tight"
                >
                  Whether you are a crane OEM starting a new project or a safety consultant conducting an audit, our engineering team can provide the specific documentation and system support required for your sector.
                </motion.p>
                <motion.div {...withDelay(fadeInUp, 0.5)} className="flex">
                  <CTAButtons variant="dark" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
