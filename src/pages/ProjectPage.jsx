import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { content } from '../content'
import './ProjectPage.css'

function ProjectPage() {
    const { id } = useParams()
    const project = content.projects.find(p => p.slug === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!project) {
        return (
            <div className="project-not-found container">
                <h2>Project not found</h2>
                <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
            </div>
        )
    }

    const renderContentBlock = (block, idx) => {
        switch (block.type) {
            case 'image':
                return (
                    <div className="content-block full-width" key={idx}>
                        <img src={block.src} alt={block.alt} />
                    </div>
                )
            case 'twoColumn':
                return (
                    <div className="content-block two-column" key={idx}>
                        <div className="text-content">
                            <h3>{block.left.heading}</h3>
                            <p>{block.left.body}</p>
                        </div>
                        <div className="image-content">
                            <img src={block.right.src} alt={block.right.alt} />
                        </div>
                    </div>
                )
            case 'imageGrid':
                return (
                    <div className="content-block image-grid" key={idx}>
                        {block.images.map((img, i) => (
                            <img key={i} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                )
            default:
                return null
        }
    }

    // Find next project for the footer
    const currentIndex = content.projects.findIndex(p => p.slug === id)
    const nextProject = content.projects[(currentIndex + 1) % content.projects.length]

    return (
        <main className="project-page-main">
            <section className="project-hero">
                <div
                    className="project-hero-bg"
                    style={{ backgroundImage: `url(${project.heroImage})` }}
                >
                    <div className="hero-overlay"></div>
                </div>
                <div className="container project-hero-content">
                    <div className="hero-text-wrapper">
                        <span className="project-year">{project.year}</span>
                        <h1 className="project-title">{project.title}</h1>
                        <div className="project-tags">
                            {project.tags?.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-intro-section">
                <div className="container">
                    <div className="project-info-grid">
                        <div className="project-description-block">
                            <span className="label">Overview</span>
                            <p className="description-text">{project.description}</p>
                        </div>
                        <div className="project-meta-block">
                            <div className="meta-item">
                                <span className="label">Industry</span>
                                <span className="value">{project.details.industry}</span>
                            </div>
                            <div className="meta-item">
                                <span className="label">Scope</span>
                                <span className="value">{project.details.scope}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-visual-content">
                <div className="container">
                    {project.content && project.content.length > 0 ? (
                        project.content.map((block, idx) => renderContentBlock(block, idx))
                    ) : (
                        <div className="no-content">
                            <p>Visual content coming soon.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="next-project-section">
                <div className="container">
                    <Link to={`/project/${nextProject.slug}`} className="next-project-card">
                        <span className="next-label">Next Project</span>
                        <h2 className="next-title">{nextProject.title}</h2>
                        <div className="next-arrow">
                            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807612 47.9792 0.807612 47.3934 1.3934C46.8076 1.97918 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z" fill="currentColor" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default ProjectPage

