/**
 * HEJAAZ TECHNOLOGIES — PRECISION MOTION SYSTEM
 * Premium industrial-themed animations
 * Smooth, slow, and customer-attracting motion design
 */

// ========== CORE EASINGS ==========
export const easings = {
    // Smooth deceleration — feels like heavy machinery coming to rest
    industrial: [0.16, 1, 0.3, 1],
    // Buttery smooth — premium feel
    smooth: [0.22, 1, 0.36, 1],
    // Elastic bounce — subtle spring
    spring: { type: 'spring', stiffness: 100, damping: 20, mass: 0.8 },
    // Heavy entrance — like a crane lowering into place
    heavy: [0.65, 0, 0.35, 1],
}

// ========== SCROLL-TRIGGERED REVEALS ==========
export const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: easings.industrial },
}

export const fadeInDown = {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, ease: easings.smooth },
}

export const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, ease: easings.industrial },
}

export const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, ease: easings.industrial },
}

export const scaleIn = {
    initial: { opacity: 0, scale: 0.85 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: easings.smooth },
}

export const blurIn = {
    initial: { opacity: 0, filter: 'blur(10px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.8, ease: easings.smooth },
}

// ========== STAGGER CONTAINERS ==========
export const staggerContainer = (staggerDelay = 0.08) => ({
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
        },
    },
    viewport: { once: true, margin: '-60px' },
})

export const staggerChild = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: easings.industrial },
}

export const staggerChildScale = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: easings.smooth },
}

// ========== HERO & HEADING ANIMATIONS ==========
export const heroTextReveal = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easings.industrial },
}

export const heroSubtitleReveal = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.2, ease: easings.smooth },
}

export const heroBadgeReveal = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.05, ease: easings.smooth },
}

export const heroButtonReveal = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4, ease: easings.smooth },
}

// ========== IMAGE ANIMATIONS ==========
export const imageReveal = {
    initial: { opacity: 0, scale: 1.05 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 1, ease: easings.heavy },
}

export const imageSlideIn = {
    initial: { opacity: 0, x: 80, scale: 0.95 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.8, ease: easings.industrial },
}

// ========== LINE / DIVIDER ANIMATIONS ==========
export const lineExpand = {
    initial: { scaleX: 0, originX: 0 },
    whileInView: { scaleX: 1 },
    viewport: { once: true },
    transition: { duration: 1, ease: easings.industrial, delay: 0.2 },
}

// ========== FLOATING / CONTINUOUS ANIMATIONS ==========
export const floatAnimation = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

export const pulseGlow = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

export const rotateSlowly = {
    animate: {
        rotate: 360,
        transition: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
        },
    },
}

// ========== COUNTER ANIMATION HOOK ==========
export const counterVariants = (target, duration = 2) => ({
    initial: { count: 0 },
    whileInView: { count: target },
    viewport: { once: true },
    transition: { duration, ease: easings.smooth },
})

// ========== SECTION HEADING ANIMATION ==========
export const sectionTagReveal = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: easings.smooth },
}

export const sectionHeadingReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay: 0.1, ease: easings.industrial },
}

export const sectionDescReveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, delay: 0.2, ease: easings.smooth },
}

// ========== PAGE TRANSITION ==========
export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: easings.smooth },
}

// ========== UTILITY: Delayed variant generator ==========
export const withDelay = (variant, delay) => ({
    ...variant,
    transition: { ...variant.transition, delay },
})

export const withStaggerIndex = (variant, index, baseDelay = 0.08) => ({
    ...variant,
    transition: { ...variant.transition, delay: index * baseDelay },
})
