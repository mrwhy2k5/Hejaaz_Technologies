import { motion } from 'framer-motion'
import { Target, Eye, Shield, MapPin, Wrench, CheckCircle2 } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  blurIn,
  staggerContainer,
  sectionTagReveal,
  sectionHeadingReveal,
  sectionDescReveal,
  imageReveal,
  lineExpand,
  withDelay,
  easings,
} from '../utils/animations'

const values = [
  { icon: Shield, title: 'Safety-first philosophy', desc: 'We design and deliver systems that protect people and assets. Crane safety and automation are at the core of everything we do.' },
  { icon: Target, title: 'Engineering-focused', desc: "Our solutions are built on solid engineering — from load cells and sensors to PLCs and HMIs. We don't compromise on quality." },
  { icon: Wrench, title: 'After-sales strength', desc: 'Installation, calibration, and AMC across PAN-India. We stand behind our products with reliable support.' },
  { icon: MapPin, title: 'PAN-India support', desc: "Wherever you are — factory, site, or port — we're equipped to serve you with installation and maintenance." },
]

const highlights = [
  'ISO 9001:2015 certified quality management',
  'MSME registered — trusted by OEMs and EPCs',
  'Crane safety systems for all major crane types',
  'Factory and process automation solutions',
  'Industrial vision and safety system integration',
  'Proof of concept (POC) and custom projects',
]

export default function About() {
  return (
    <Layout>
      <SeoHead title="About Us" description="Hejaaz Technologies – Vision, mission, safety-first philosophy. PAN-India support and after-sales." path="/about" />
      <PageHeader
        title="About Hejaaz Technologies"
        subtitle="Engineering safety systems that stop accidents. Powering industrial stability across India."
        backgroundImage="/images/industrial-bg-factory.png"
      />

      {/* ============ 1️⃣ MISSION CLARITY ============ */}
      <section className="section-padding bg-[var(--bg-main)] border-b border-hejaaz-border relative overflow-hidden transition-colors duration-500">
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-hejaaz-secondary/5 blur-[120px] -z-10 rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div
              {...fadeInLeft}
              className="lg:col-span-7"
            >
              <motion.div {...sectionTagReveal} className="flex items-center gap-4 mb-8">
                <motion.div {...lineExpand} className="w-12 h-1 rounded-full bg-hejaaz-secondary" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-hejaaz-secondary">Our DNA</h2>
              </motion.div>
              <motion.h1
                {...sectionHeadingReveal}
                className="text-3xl sm:text-4xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-6 sm:mb-10 heading-reveal uppercase"
              >
                We make complex <br />crane safety <span className="text-hejaaz-secondary">simple.</span>
              </motion.h1>
              <motion.div
                {...sectionDescReveal}
                className="space-y-4 sm:space-y-6 text-[var(--text-muted)] text-base sm:text-lg lg:text-xl leading-relaxed font-bold uppercase tracking-tight"
              >
                <p>
                  Hejaaz Technologies is an industrial engineering house specializing in the design and integration of safety-critical systems.
                </p>
                <p>
                  From tower cranes on high-rises to EOT cranes in heavy workshops, our systems serve as the digital guardian of your lifting operations.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              {...imageReveal}
              className="lg:col-span-5 relative aspect-square rounded-[3rem] overflow-hidden shadow-premium border border-hejaaz-border group"
            >
              <img
                src="/images/about-engineering.jpg"
                alt="Engineering Integrity"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                loading="lazy"
                decoding="async"
                style={{ WebkitBackfaceVisibility: 'hidden' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hejaaz-primary/80 via-transparent to-transparent" />
              <motion.div
                {...withDelay(fadeInUp, 0.6)}
                className="absolute bottom-12 left-12"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-hejaaz-secondary mb-2">Engineering Integrity</p>
                <div className="w-12 h-1 bg-white/50 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 2️⃣ CORE VALUES ============ */}
      <section className="section-padding bg-[var(--bg-secondary)] transition-colors duration-500">
        <div className="container-content">
          <div className="flex flex-col items-center mb-16">
            <motion.h2
              {...sectionTagReveal}
              className="text-[11px] font-black text-hejaaz-secondary uppercase tracking-[0.4em] mb-6"
            >
              Our Protocol
            </motion.h2>
            <motion.h2
              {...sectionHeadingReveal}
              className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter heading-reveal text-center"
            >
              Engineered for <br />Heavy Industry.
            </motion.h2>
          </div>

          <motion.div
            {...staggerContainer(0.12)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={{
                  initial: { opacity: 0, y: 40, scale: 0.95 },
                  whileInView: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.8, ease: easings.industrial }}
                className="card-premium p-10 flex flex-col group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-hejaaz-secondary mb-8 transition-all duration-500 bg-hejaaz-surface group-hover:bg-hejaaz-secondary group-hover:text-white group-hover:scale-110 shadow-sm border border-hejaaz-border">
                  <v.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-widest mb-4 text-main transition-colors">{v.title}</h3>
                <p className="text-[11px] font-bold leading-tight uppercase tracking-tight text-muted transition-colors">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ 3️ NATIONAL REACH ============ */}
      <section className="section-padding bg-[var(--bg-main)] transition-colors duration-500">
        <div className="container-content">
          <motion.div
            {...scaleIn}
            className="bg-hejaaz-secondary rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div {...fadeInLeft}>
                <motion.h2
                  {...sectionHeadingReveal}
                  className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 sm:mb-10 leading-[0.95] tracking-tighter uppercase text-white"
                >
                  ISO 9001:2015 <br /><span className="text-black/30">Certified.</span>
                </motion.h2>
                <motion.div {...staggerContainer(0.08)} className="grid gap-4">
                  {highlights.map((item) => (
                    <motion.div
                      key={item}
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.6, ease: easings.smooth }}
                      className="flex gap-5 p-5 rounded-2xl bg-white/10 border border-white/20 items-center transition-all duration-500 hover:bg-white/15 hover:scale-[1.02]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                {...fadeInRight}
                className="lg:pl-16 border-t lg:border-t-0 lg:border-l border-white/20 pt-12 lg:pt-0"
              >
                <p className="text-white/80 text-xl lg:text-2xl mb-12 font-bold uppercase tracking-tight leading-tight">
                  Registered with MSME and following strict quality protocols to serve India's largest infrastructure projects.
                </p>
                <div className="flex">
                  <CTAButtons variant="dark" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
