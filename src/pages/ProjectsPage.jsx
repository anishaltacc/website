
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../content'
import './ProjectsPage.css'

function ProjectsPage() {
    const { projects } = content
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const categories = ['All', ...new Set(projects.map(p => p.category))]

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <div className="projects-page">
            <main className="container projects-container">
                <div className="projects-header">
                    <h1 className="projects-title">{content.projectsPage.title}</h1>
                    <div className="filter-container">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <Link to={`/project/${project.slug}`} key={project.id} className="project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <span className="view-project">View Project</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <h2 className="project-name">{project.title}</h2>
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default ProjectsPage
