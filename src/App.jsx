import { Routes, Route, useLocation } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function PathTracker() {
  const location = useLocation()
  const { updatePath } = useTheme()

  useEffect(() => {
    updatePath(location.pathname)
  }, [location.pathname, updatePath])

  return null
}

export default function App() {
  return (
    <>
      <PathTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
