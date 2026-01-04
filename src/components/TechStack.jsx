import './TechStack.css'

function TechStack() {
    const technologies = [
        { name: 'Figma', icon: '🎨' },
        { name: 'Adobe Illustrator', icon: '✨' },
        { name: 'Photoshop', icon: '🖼️' },
        { name: 'After Effects', icon: '🎬' },
        { name: 'Framer', icon: '⚡' },
        { name: 'Webflow', icon: '🌐' },
        { name: 'React', icon: '⚛️' },
        { name: 'Tailwind CSS', icon: '💨' },
    ]

    return (
        <div className="tech-stack-section">
            <div className="tech-stack-marquee">
                <div className="tech-stack-track">
                    {/* Duplicate the array twice for seamless loop */}
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="tech-item">
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
