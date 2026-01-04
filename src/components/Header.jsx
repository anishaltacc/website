import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src="/assets/Logo.png" alt="ANISH.DESIGN" className="logo-img" />
                </Link>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#work" className="nav-link">Work</a></li>
                        <li><a href="#shop" className="nav-link">Shop</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                    <button className="mobile-menu-btn" aria-label="Open Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
