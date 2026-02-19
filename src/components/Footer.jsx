import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  easings,
} from '../utils/animations'

const address = '2nd Floor, 4A, Anderson Rd, Vasantha Nagar, Signal, Ayanavaram, Chennai, Tamil Nadu 600023'
const phone = '+91 9361227290'
const email = 'hejaaztechnologies@gmail.com'

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container-content py-10 lg:py-14">
        <motion.div
          {...staggerContainer(0.15)}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start"
        >

          {/* Left Column - Logo + Social Icons */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: easings.smooth }}
          >
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center shadow-lg overflow-hidden transition-all group-hover:scale-105 duration-500">
                <img src="/images/logo.png" alt="Hejaaz Technologies Logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl leading-none uppercase" style={{ fontFamily: "'Allerta Stencil', sans-serif", letterSpacing: '0.25em', fontWeight: '400' }}>
                  HEJAAZ
                </span>
                <span className="text-white/50 text-[8px] uppercase leading-none mt-1.5" style={{ fontFamily: "'Cabin', sans-serif", letterSpacing: '0.45em', fontWeight: '500' }}>
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a href="https://wa.me/919361227290" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-500 hover:scale-110" aria-label="WhatsApp">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Center Column - Company Info */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: easings.smooth }}
            className="text-sm"
          >
            <h3 className="font-bold text-white text-base mb-3">
              Hejaaz Technologies
            </h3>
            <p className="text-white/60 leading-relaxed mb-5">
              {address}
            </p>

            <div className="space-y-2">
              <p className="text-white/60">
                <span className="font-bold text-white/80">Email: </span>
                <a href={`mailto:${email}`} className="hover:text-hejaaz-secondary transition-colors duration-300">
                  {email}
                </a>
              </p>
              <p className="text-white/60">
                <span className="font-bold text-white/80">Mobile: </span>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-hejaaz-secondary transition-colors duration-300">
                  {phone}
                </a>
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-white/60 text-sm">
                <span className="font-bold text-white/80">Enquiry: </span>
                <Link to="/contact" className="hover:text-hejaaz-secondary transition-colors duration-300">OEMs</Link>
                {' | '}
                <Link to="/contact" className="hover:text-hejaaz-secondary transition-colors duration-300">Dealerships</Link>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Google Map */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 30, scale: 0.95 },
              whileInView: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.9, ease: easings.industrial }}
            className="w-full h-[220px] md:h-[250px] rounded-lg overflow-hidden border border-white/10 shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2!2d80.2293!3d13.1005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAxLjgiTiA4MMKwMTMnNDUuNSJF!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin&q=4A+Anderson+Road+Ayanavaram+Chennai+Tamil+Nadu+600023"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hejaaz Technologies Office Location"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#141d28]">
        <div className="container-content py-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Hejaaz Technologies – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
