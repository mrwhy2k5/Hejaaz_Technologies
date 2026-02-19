import { motion } from 'framer-motion'
import { Award, Shield, FileCheck, CheckCircle2 } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import CTAButtons from '../components/CTAButtons'
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

const certs = [
  {
    id: 'iso',
    name: 'ISO 9001:2015',
    desc: 'Quality Management Systems',
    detail: 'Hejaaz Technologies is certified for ISO 9001:2015, demonstrating our commitment to consistent quality in design, supply, and support of crane safety and automation solutions.',
    icon: Award,
  },
  {
    id: 'msme',
    name: 'MSME Registration',
    desc: 'Micro, Small & Medium Enterprises',
    detail: 'We are MSME registered, supporting our credibility with OEMs, EPCs, and government tenders. We align with national initiatives for small and medium enterprises.',
    icon: FileCheck,
  },
]

const complianceFocus = [
  'Factory Act requirements for cranes and lifting equipment',
  'IS 14475 and related standards for Safe Load Indicators',
  'ISO 4301 for cranes and lifting equipment',
  'Client-specific and EPC project specifications',
  'Safety audits and documentation support',
]

export default function Certifications() {
  return (
    <Layout>
      <SeoHead title="Certifications & Compliance" description="ISO 9001:2015, MSME. Industry compliance for crane safety and automation." path="/certifications" />
      <PageHeader
        title="Compliance & Standards"
        subtitle="Adhering to IS 14475, Factory Acts, and ISO frameworks. Quality is our baseline."
        backgroundImage="/images/industrial-bg-factory.png"
      />

      {/* ============ 1️⃣ QUALITY FRAMEWORK ============ */}
      <section className="section-padding-sm bg-[var(--card-bg)] border-b border-[var(--card-border)] transition-colors duration-300">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              {...fadeInLeft}
            >
              <motion.div {...sectionTagReveal} className="flex items-center gap-3 mb-6">
                <motion.div {...lineExpand} className="w-10 h-0.5 rounded-full bg-hejaaz-secondary" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] transition-colors" style={{ color: 'var(--text-muted)' }}>Verified Credentials</h2>
              </motion.div>
              <motion.h1
                {...sectionHeadingReveal}
                className="text-3xl lg:text-5xl font-black tracking-tight mb-8 transition-colors" style={{ color: 'var(--text-main)' }}
              >
                Systems built to rigorous industrial law.
              </motion.h1>
              <motion.p
                {...sectionDescReveal}
                className="text-[var(--text-muted)] text-[15px] leading-relaxed font-medium transition-colors"
              >
                We maintain strict adherence to workplace safety regulations (Factory Acts) and international engineering standards to ensure our products are legally compliant and technically superior.
              </motion.p>
            </motion.div>

            <motion.div {...staggerContainer(0.15)} className="space-y-4">
              {certs.map((c, i) => (
                <motion.div
                  key={c.id}
                  variants={{
                    initial: { opacity: 0, x: 30 },
                    whileInView: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.8, ease: easings.industrial }}
                  className="bg-[var(--bg-secondary)] dark:bg-white/5 p-6 rounded-xl border border-[var(--card-border)] flex gap-6 group hover:border-hejaaz-secondary/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-hejaaz-secondary transition-colors">
                    <c.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest mb-1 transition-colors" style={{ color: 'var(--text-main)' }}>{c.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-tight mb-3 transition-colors" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
                    <p className="text-[11px] font-medium leading-relaxed transition-colors" style={{ color: 'var(--text-muted)' }}>{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 2️⃣ COMPLIANCE MATRIX ============ */}
      <section className="section-padding-sm bg-[var(--bg-main)] transition-colors duration-300">
        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3 transition-colors" style={{ color: 'var(--text-muted)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary" />
                Engineering Standards
              </h2>
              <h3 className="text-xl font-black uppercase tracking-tight mb-6 transition-colors" style={{ color: 'var(--text-main)' }}>Global Safety Protocols</h3>
              <p className="text-[var(--text-muted)] text-[13px] font-medium leading-relaxed transition-colors">
                Our design engine strictly follows the logic defined by these regulatory bodies to guarantee error-free intervention during lifting operations.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {complianceFocus.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl flex items-center gap-4 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-hejaaz-secondary shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-tight transition-colors" style={{ color: 'var(--text-main)' }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3️ CALL TO ACTION ============ */}
      <section className="section-padding-sm bg-[var(--card-bg)] transition-colors duration-300">
        <div className="container-content">
          <div className="bg-hejaaz-secondary rounded-2xl p-10 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black mb-6 text-white">Need Project Compliance Support?</h2>
              <p className="text-white/80 text-lg font-medium mb-12">
                Our engineering team provides technical documentation, sensor calibration certificates, and compliance audits for EPC project approvals.
              </p>
              <div className="flex justify-center">
                <CTAButtons variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}
