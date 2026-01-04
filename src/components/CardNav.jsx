import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { content } from '../content'
import './CardNav.css'

function CardNav() {
    const [activeCard, setActiveCard] = useState(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = content.nav

    return (
        <header className="card-nav-header">
            <div className="card-nav-container">
                <Link to="/" className="card-nav-logo">
                    <img src="/assets/Logo.png" alt="ANISH.DESIGN" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="card-nav">
                    {navItems.map((item, index) => (
                        <div
                            key={item.label}
                            className="card-nav-item"
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <button className="card-nav-trigger">
                                {item.label}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {activeCard === index && (
                                    <motion.div
                                        className="card-nav-dropdown"
                                        style={{ backgroundColor: item.bgColor }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="card-nav-links">
                                            {item.links.map((link) => (
                                                <Link
                                                    key={link.label}
                                                    to={link.href}
                                                    className="card-nav-link"
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    <a href="#contact" className="card-nav-cta">
                        Get in Touch
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                className="mobile-menu-close"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close Menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>

                            <div className="mobile-menu-content">
                                {navItems.map((item) => (
                                    <div key={item.label} className="mobile-menu-section">
                                        <h3 className="mobile-menu-title">{item.label}</h3>
                                        <div className="mobile-menu-links">
                                            {item.links.map((link) => (
                                                <Link
                                                    key={link.label}
                                                    to={link.href}
                                                    className="mobile-menu-link"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <a
                                    href="#contact"
                                    className="mobile-menu-cta"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default CardNav
