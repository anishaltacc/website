import { Link } from 'react-router-dom';
import { content } from '../content';
import CurvedLoop from './CurvedLoop';

function Work() {
    const projects = content.projects.filter(p => p.featured);

    return (
        <section id="work" className="section work">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{content.work.title}</h2>
                </div>
                <div className="work-grid">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/project/${project.slug}`}
                            className="work-item"
                        >
                            <div className="work-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="work-image"
                                />
                            </div>
                            <div className="work-info">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="view-all-container" style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Link to="/projects" className="btn btn-primary">
                        {content.work.viewAll}
                    </Link>
                </div>
            </div>
            <CurvedLoop
                marqueeText={content.intro.marquee}
                speed={2}
                curveAmount={300}
                direction="left"
                interactive={true}
            />
        </section>
    )
}

export default Work
