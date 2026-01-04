import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Work from '../components/Work'
import Contact from '../components/Contact'

function Home() {
    return (
        <main>
            <Hero />
            <Intro />
            <Work />
            <Contact />
        </main>
    )
}

export default Home
