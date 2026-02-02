import { motion } from 'framer-motion'
import {
  Factory,
  Settings,
  Monitor,
  Camera,
  Shield,
  FlaskConical,
  Wrench,
  ArrowRight,
  Target,
  MessageCircle,
} from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import servicesData from '../data/services.json'

const iconMap = {
  Factory,
  Settings,
  Monitor,
  Camera,
  Shield,
  FlaskConical,
  Wrench,
}

export default function Services() {
  const fadeInSlideUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }

  return (
    <Layout>
      <SeoHead
        title="Support & Services"
        description="Factory automation, process automation, PC-based automation, vision systems, safety integration, POC, installation & AMC."
        path="/services"
      />

      <PageHeader
        title="Support & Services"
        subtitle="Comprehensive engineering support from factory automation to PAN-India installation and AMC."
        backgroundImage="/images/industrial-bg-panels.png"
      />

      {/* ============ OVERVIEW SECTION ============ */}
      <section className="section-padding bg-[var(--bg-main)] border-b border-hejaaz-border transition-colors duration-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hejaaz-secondary/5 blur-[120px] -z-10" />

        <div className="container-content">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              {...fadeInSlideUp}
            >
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-12 h-1 rounded-full bg-hejaaz-secondary" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-hejaaz-secondary">Our Protocol</h2>
              </div>
              <h1 className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-10 heading-reveal uppercase">
                End-to-End <span className="text-hejaaz-secondary">Engineering Integration.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[var(--text-muted)] font-bold uppercase tracking-tight max-w-4xl mx-auto leading-tight">
                We bridge the gap between complex industrial problems and reliable technical solutions,
                offering everything from initial proof-of-concept to nationwide maintenance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SERVICE MATRIX ============ */}
      <section className="section-padding bg-[var(--bg-secondary)] transition-colors duration-500">
        <div className="container-content">
          <div className="flex flex-col items-center justify-center mb-16 gap-8 text-center">
            <div className="max-w-4xl">
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-hejaaz-secondary mb-6 flex items-center gap-3 justify-center">
                <div className="w-2 h-2 rounded-full bg-hejaaz-secondary animate-pulse" />
                Service Matrix
              </h2>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none heading-reveal uppercase mb-6">
                Standardized Engineering Deliverables.
              </h2>
              <div className="text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.3em] bg-hejaaz-surface px-5 py-3 rounded-xl border border-hejaaz-border shadow-sm inline-block">
                Safety First Methodology
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Settings
              return (
                <motion.article
                  key={svc.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group card-premium p-10 flex flex-col h-full"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-hejaaz-surface border border-hejaaz-border group-hover:bg-hejaaz-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={28} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-sm font-black uppercase tracking-widest mb-4 group-hover:text-hejaaz-secondary transition-colors text-main">
                    {svc.title}
                  </h3>

                  <p className="text-[11px] font-bold leading-tight mb-8 flex-1 uppercase tracking-tight text-muted opacity-70 transition-colors">
                    {svc.value}
                  </p>

                  <div className="space-y-6 pt-8 border-t border-hejaaz-border transition-colors">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-4 h-4 text-hejaaz-secondary" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted">Problem Solved</h4>
                      </div>
                      <p className="text-[12px] font-bold leading-tight uppercase tracking-tight text-main">{svc.problem}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-4 h-4 text-hejaaz-secondary" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted">Approach</h4>
                      </div>
                      <p className="text-[12px] font-bold leading-tight uppercase tracking-tight text-main">{svc.approach}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <span className="text-[10px] font-black text-hejaaz-secondary uppercase tracking-[0.3em] inline-flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                      Inquiry Protocol <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* ============ FOOTER CTA SECTION ============ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 lg:mt-32"
          >
            <div className="bg-hejaaz-secondary p-12 lg:p-24 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 mb-8">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Engineering Support</span>
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tighter leading-[0.95] text-white uppercase">Partner With Our <br /><span className="text-black/30">Technical Team.</span></h2>
                  <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-tight font-bold uppercase tracking-tight max-w-lg">
                    We specialize in Proof of Concept (POC) projects and custom industrial integrations.
                  </p>
                  <div className="flex">
                    <a
                      href="https://wa.me/919361227290"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-hejaaz-secondary py-6 px-12 text-[12px] uppercase tracking-[0.3em] font-black rounded-2xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4"
                    >
                      <MessageCircle size={20} /> Log Technical Inquiry
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Technical Audits', value: 'POC' },
                    { label: 'Support Uptime', value: '24/7' },
                    { label: 'Custom Build', value: 'OEM' },
                    { label: 'Asset Reach', value: 'INDIA' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                      <div className="text-3xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                      <div className="text-[9px] font-black text-white/60 uppercase tracking-[0.25em]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
