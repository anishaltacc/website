import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardNav from './components/CardNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
    return (
        <Router>
            <CardNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
