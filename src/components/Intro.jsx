import TechStack from './TechStack'
import { content } from '../content'

function Intro() {
    const { intro } = content
    return (
        <section className="intro section">
            <div className="container intro-content">
                <p className="intro-text">
                    {intro.text}
                </p>
            </div>
            <TechStack />
        </section>
    )
}

export default Intro
