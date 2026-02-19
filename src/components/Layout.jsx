import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

/**
 * Main layout wrapper: sticky header + main content + footer.
 * Use for all page-level routes.
 */
export default function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
