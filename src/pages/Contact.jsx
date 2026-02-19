import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, Clock, CheckCircle, Shield, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
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

const address = '2nd Floor, 4A, Anderson Rd, Vasantha Nagar, Signal, Ayanavaram, Chennai, Tamil Nadu 600023'
const phone = '+91 9361227290'
const email = 'hejaaztechnologies@gmail.com'

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Message is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSending(true)

    try {
      // NOTE: YOU MUST CONFIGURE THESE VALUES IN YOUR EMAILJS DASHBOARD
      // 1. SIGN UP AT https://www.emailjs.com/
      // 2. CREATE A SERVICE (GET SERVICE_ID)
      // 3. CREATE A TEMPLATE (GET TEMPLATE_ID)
      // 4. GET YOUR PUBLIC_KEY FROM ACCOUNT SETTINGS

      await emailjs.sendForm(
        'service_mr1w2',   // Replace with your Service ID
        'template_apum8hu',  // Replace with your Template ID
        formRef.current,
        'Wl10e1RNfrAe1bpL2'    // Replace with your Public Key
      )

      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Email Transmission Error:', error)
      alert('Transmission failed. Please try again or email us directly.')
    } finally {
      setIsSending(false)
    }
  }

  const inputClasses = "w-full px-4 py-3 sm:py-4 rounded-xl border border-[var(--card-border)] bg-[var(--bg-secondary)] dark:bg-white/5 focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-hejaaz-secondary outline-none transition-all text-[16px] sm:text-xs font-bold uppercase tracking-tight"

  return (
    <Layout>
      <SeoHead title="Contact" description="Hejaaz Technologies – Chennai. Phone, email, contact form. Request a quote or technical support." path="/contact" />
      <PageHeader
        title="Contact Us"
        subtitle="Request a technical quote, schedule a site visit, or discuss custom safety engineering."
        backgroundImage="/images/industrial-bg.png"
      />

      <section className="section-padding bg-[var(--bg-secondary)] border-b border-hejaaz-border transition-colors duration-500">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div {...fadeInLeft}>
              <motion.div
                {...fadeInLeft}
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div {...lineExpand} className="w-8 h-0.5 rounded-full bg-hejaaz-secondary" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>Partner With Us</h2>
                </div>
                <motion.h1
                  {...sectionHeadingReveal}
                  className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight leading-tight transition-colors" style={{ color: 'var(--text-main)' }}
                >
                  Technical Support & Quotation Protocol
                </motion.h1>
                <motion.p
                  {...sectionDescReveal}
                  className="mt-3 text-[var(--text-muted)] text-sm font-medium leading-relaxed transition-colors"
                >
                  Connect with our engineering house for project-specific safety systems, automation prototypes,
                  and comprehensive service agreements.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-[var(--bg-main)] transition-colors duration-300">
        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Left: Industrial Contact Matrix */}
            <div className="lg:col-span-5 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-xs font-black uppercase tracking-[0.2em] mb-8 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                Contact Matrix
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="p-5 sm:p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl hover:border-hejaaz-secondary/30 transition-all flex gap-4 sm:gap-6 shadow-sm"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-hejaaz-secondary/10 flex items-center justify-center text-hejaaz-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Headquarters</h3>
                  <p className="text-[11px] font-medium leading-relaxed uppercase tracking-tight transition-colors" style={{ color: 'var(--text-muted)' }}>{address}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="p-5 sm:p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl hover:border-hejaaz-secondary/30 transition-all flex gap-4 sm:gap-6 shadow-sm"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-hejaaz-secondary/10 flex items-center justify-center text-hejaaz-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Direct Support</h3>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-[11px] font-bold hover:text-hejaaz-secondary transition-colors block uppercase tracking-tight" style={{ color: 'var(--text-muted)' }}>
                    {phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="p-5 sm:p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl hover:border-hejaaz-secondary/30 transition-all flex gap-4 sm:gap-6 shadow-sm"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-hejaaz-secondary/10 flex items-center justify-center text-hejaaz-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Technical Email</h3>
                  <a href={`mailto:${email}`} className="text-[11px] font-bold hover:text-hejaaz-secondary transition-colors block uppercase tracking-tight" style={{ color: 'var(--text-muted)' }}>
                    {email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="p-8 bg-hejaaz-secondary text-white rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-white" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">Engineering Hours</h3>
                </div>
                <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Mon - Sat: 09:00 - 18:00 IST</p>
              </motion.div>
            </div>

            {/* Right: Submission Layer */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                id="quote-form"
                className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm transition-colors duration-300 scroll-mt-32"
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-1 rounded-full bg-hejaaz-secondary" />
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] transition-colors" style={{ color: 'var(--text-main)' }}>Technical Inquiry Form</h2>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-hejaaz-secondary/5 border border-hejaaz-secondary/20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-hejaaz-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-hejaaz-secondary" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>Transmission Successful</h3>
                    <p className="mt-4 text-[var(--text-muted)] text-sm font-medium transition-colors">Your request has been logged. Our engineering desk will respond within 24 business hours.</p>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Identification *</label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          className={inputClasses}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Technical Email *</label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          className={inputClasses}
                          placeholder="engineering@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Interface Phone</label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          className={inputClasses}
                          placeholder="+91"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-[10px] font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Organization</label>
                        <input
                          id="company" name="company" type="text"
                          value={form.company} onChange={handleChange}
                          className={inputClasses}
                          placeholder="OEM / EPC / Factory Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest mb-3 transition-colors" style={{ color: 'var(--text-main)' }}>Protocol / Requirement Details *</label>
                      <textarea
                        id="message" name="message" rows={5} required
                        value={form.message} onChange={handleChange}
                        className={inputClasses + " resize-none"}
                        placeholder="Detailed technical requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className={`btn-primary w-full md:w-auto !px-12 flex items-center justify-center gap-3 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSending ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Log Inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--bg-secondary)] transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="container-content text-center"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-hejaaz-secondary/10 flex items-center justify-center text-hejaaz-secondary mb-8">
              <Shield size={24} />
            </div>
            <p className="text-lg font-medium leading-relaxed italic text-[var(--text-muted)] transition-colors">
              "Every technical log is treated as a safety priority. Our engineering desk ensures that your crane configurations are matched with the exact safety protocols required by industrial law."
            </p>
            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] transition-colors" style={{ color: 'var(--text-main)' }}>Engineering Desk</p>
              <p className="text-[10px] text-hejaaz-secondary font-bold uppercase tracking-widest mt-1">Hejaaz Technologies</p>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  )
}
