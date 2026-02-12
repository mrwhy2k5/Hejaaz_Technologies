import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const address = '192-2A, Haji Mohammed Abdul Hafiz Sahib Street, Dashamakan, Chennai – 600012, Tamil Nadu'
const phone = '+91 9361227290'
const email = 'hejaaztechnologies@gmail.com'

const footerLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
]

const productLinks = [
  { to: '/products', label: 'Safe Load Indicators' },
  { to: '/products', label: 'Crane Safety Systems' },
  { to: '/products', label: 'Industrial Automation' },
  { to: '/products', label: 'Load Monitoring' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white transition-colors duration-500 border-t border-white/5">
      {/* Main Footer Content */}
      <div className="container-content py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 group shrink-0">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-lg shadow-black/30 transition-all group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                <img src="/images/logo.png" alt="Hejaaz Technologies Logo" className="w-9 h-9 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl leading-none uppercase" style={{ fontFamily: "'Allerta Stencil', sans-serif", letterSpacing: '0.15em', fontWeight: '400' }}>
                  HEJAAZ
                </span>
                <span className="text-white/40 text-[10px] uppercase leading-none mt-1" style={{ fontFamily: "'Cabin', sans-serif", letterSpacing: '0.35em', fontWeight: '700' }}>
                  TECHNOLOGIES
                </span>
              </div>
            </Link>
            <p className="mt-8 text-sm text-white/50 leading-relaxed font-medium uppercase tracking-tight">
              Engineering Safety. <br />
              Powering Industrial Automation <br />
              Across India.
            </p>

            {/* Certifications Badge */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/70">
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/70">
                MSME Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-hejaaz-secondary mb-8 text-[11px] uppercase tracking-[0.4em]">
              Directory
            </h3>
            <ul className="space-y-4">
              {footerLinks.map(({ to, label }) => (
                <li key={to + label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-widest transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-black text-hejaaz-secondary mb-8 text-[11px] uppercase tracking-[0.4em]">
              Systems
            </h3>
            <ul className="space-y-4">
              {productLinks.map(({ to, label }, idx) => (
                <li key={label + idx}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-widest transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-black text-hejaaz-secondary mb-8 text-[11px] uppercase tracking-[0.4em]">
              Global Presence
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5 text-hejaaz-secondary" aria-hidden />
                </div>
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-tight leading-relaxed">{address}</span>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-hejaaz-secondary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5 text-hejaaz-secondary group-hover:text-white" aria-hidden />
                  </div>
                  <span className="self-center text-[12px] font-black tracking-widest text-white/50 group-hover:text-white transition-colors">{phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-hejaaz-secondary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5 text-hejaaz-secondary group-hover:text-white" aria-hidden />
                  </div>
                  <span className="self-center text-[11px] font-black tracking-widest text-white/50 group-hover:text-white transition-colors break-all">{email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-content py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              © {new Date().getFullYear()} Hejaaz Technologies. Engineering Authority.
            </p>
            <div className="flex items-center gap-8">
              <Link to="/about" className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">
                Compliance
              </Link>
              <Link to="/about" className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
