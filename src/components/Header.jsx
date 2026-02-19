import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Support' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open (iOS fix)
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [mobileOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isGlass = scrolled || !isHome

  const isActiveLink = (to) => {
    if (to === '/#news') return false
    if (to === '/') return location.pathname === '/'
    return location.pathname === to
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full
        transition-all duration-500
        ${isGlass
          ? 'glass-panel py-3 shadow-premium'
          : 'bg-transparent py-4'}
      `}
      style={{ WebkitBackfaceVisibility: 'hidden' }}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-14">
          {/* Logo - REFINED BRANDING */}
          <Link
            to="/"
            className="flex items-center gap-3 sm:gap-4 group shrink-0"
            aria-label="Hejaaz Technologies Home"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 overflow-hidden ${isGlass ? 'bg-black shadow-lg shadow-black/30' : 'bg-black/80 backdrop-blur-md border border-white/20'}`}>
              <img src="/images/logo.png" alt="Hejaaz Technologies Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" loading="eager" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl sm:text-2xl leading-none uppercase transition-colors duration-500 ${isGlass ? 'text-[var(--text-main)]' : 'text-white'}`}
                style={{ fontFamily: "'Allerta Stencil', sans-serif", letterSpacing: '0.25em', fontWeight: '400' }}
              >
                HEJAAZ
              </span>
              <span
                className={`text-[8px] sm:text-[9px] uppercase leading-none mt-1.5 transition-colors duration-500 ${isGlass ? 'text-[var(--text-muted)]' : 'text-white/70'}`}
                style={{ fontFamily: "'Cabin', sans-serif", letterSpacing: '0.45em', fontWeight: '500' }}
              >
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - CRYSTAL CLEAR */}
          <nav className="hidden lg:flex items-center flex-1 justify-end ml-16" aria-label="Main navigation">
            <div className="flex items-center gap-10 mr-12">
              {navItems.map(({ to, label }) => {
                const active = isActiveLink(to)
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`
                      relative px-1 py-1 text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300
                      ${active
                        ? 'text-hejaaz-secondary'
                        : (isGlass
                          ? 'text-[var(--text-main)] hover:text-hejaaz-secondary'
                          : 'text-white/90 hover:text-white')
                      }
                    `}
                  >
                    {label}
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-hejaaz-secondary rounded-full shadow-[0_0_15px_var(--hejaaz-secondary)]"
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-6">
              <div className={`w-[1px] h-6 transition-colors duration-500 ${isGlass ? 'bg-hejaaz-border' : 'bg-white/20'}`} />

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`
                  p-3 rounded-xl transition-all flex items-center justify-center shadow-sm
                  ${isGlass
                    ? 'bg-hejaaz-surface text-slate-700 dark:text-slate-300 hover:bg-hejaaz-secondary hover:text-white'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10'
                  }
                `}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              {/* CTA Button */}
              <Link
                to="/contact#quote-form"
                className="btn-primary !py-3 !px-10 text-[11px] font-black uppercase tracking-widest shadow-2xl"
              >
                Get Quote
              </Link>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-hejaaz-surface text-slate-700 dark:text-slate-300 transition-all flex items-center justify-center"
              aria-label="Toggle theme"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2.5 rounded-xl bg-hejaaz-secondary text-white shadow-lg shadow-hejaaz-secondary/20 transition-all active:scale-95 flex items-center justify-center"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - iOS Optimized */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 glass-panel lg:hidden z-40 overflow-hidden"
            style={{
              willChange: 'height, opacity',
              WebkitBackfaceVisibility: 'hidden',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <nav className="flex flex-col p-4 sm:p-6 gap-1" style={{ WebkitTapHighlightColor: 'transparent' }}>
              {navItems.map(({ to, label }) => {
                const active = isActiveLink(to)
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      px-4 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all
                      ${active
                        ? 'text-white bg-hejaaz-secondary shadow-lg shadow-hejaaz-secondary/30'
                        : 'text-[var(--text-main)] hover:bg-hejaaz-surface active:bg-hejaaz-surface'
                      }
                    `}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {label}
                  </Link>
                )
              })}
              <div className="mt-4 pt-4 border-t border-hejaaz-border">
                <Link
                  to="/contact#quote-form"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center !py-4"
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
