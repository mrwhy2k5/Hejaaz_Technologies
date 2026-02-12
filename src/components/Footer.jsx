import { Link } from 'react-router-dom'
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'

const address = '2nd Floor, 4A, Anderson Rd, Vasantha Nagar, Signal, Ayanavaram, Chennai, Tamil Nadu 600023'
const phone = '+91 9361227290'
const email = 'hejaaztechnologies@gmail.com'

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container-content py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">

          {/* Left Column - Logo + Social Icons */}
          <div>
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center shadow-lg overflow-hidden transition-all group-hover:scale-105">
                <img src="/images/logo.png" alt="Hejaaz Technologies Logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg leading-none uppercase" style={{ fontFamily: "'Allerta Stencil', sans-serif", letterSpacing: '0.12em', fontWeight: '400' }}>
                  HEJAAZ
                </span>
                <span className="text-white/50 text-[9px] uppercase leading-none mt-1" style={{ fontFamily: "'Cabin', sans-serif", letterSpacing: '0.3em', fontWeight: '700' }}>
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-hejaaz-secondary flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-hejaaz-secondary flex items-center justify-center transition-all duration-300">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-hejaaz-secondary flex items-center justify-center transition-all duration-300">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-hejaaz-secondary flex items-center justify-center transition-all duration-300">
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Center Column - Company Info */}
          <div className="text-sm">
            <h3 className="font-bold text-white text-base mb-3">
              Hejaaz Technologies
            </h3>
            <p className="text-white/60 leading-relaxed mb-5">
              {address}
            </p>

            <div className="space-y-2">
              <p className="text-white/60">
                <span className="font-bold text-white/80">Email: </span>
                <a href={`mailto:${email}`} className="hover:text-hejaaz-secondary transition-colors">
                  {email}
                </a>
              </p>
              <p className="text-white/60">
                <span className="font-bold text-white/80">Mobile: </span>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-hejaaz-secondary transition-colors">
                  {phone}
                </a>
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-white/60 text-sm">
                <span className="font-bold text-white/80">Enquiry: </span>
                <Link to="/contact" className="hover:text-hejaaz-secondary transition-colors">OEMs</Link>
                {' | '}
                <Link to="/contact" className="hover:text-hejaaz-secondary transition-colors">Dealerships</Link>
              </p>
            </div>
          </div>

          {/* Right Column - Google Map */}
          <div className="w-full h-[220px] md:h-[250px] rounded-lg overflow-hidden border border-white/10 shadow-lg">
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
          </div>
        </div>
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
