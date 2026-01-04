import ColorBends from './ColorBends'
import { Link } from 'react-router-dom'
import { content } from '../content'

function Hero() {
    const { hero } = content
    return (
        <section className="hero">
            <div className="hero-visual">
                <ColorBends
                    rotation={45}
                    speed={0.2}
                    colors={["#5227FF", "#ff7b00", "#24ffb6"]}
                    transparent
                    autoRotate={0.3}
                    scale={0.8}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1.8}
                    parallax={0.6}
                    noise={0.3}
                />
            </div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    {hero.title} <br />
                    <span className="gradient-text">{hero.highlight}</span>
                </h1>
                <p className="hero-subtitle">
                    {hero.subtitle}
                </p>
                <div className="hero-cta">
                    <Link to="/projects" className="btn btn-primary">{hero.ctaPrimary}</Link>
                    <a href="#contact" className="btn btn-secondary">{hero.ctaSecondary}</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
