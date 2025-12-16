import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Homepage from './pages/home/homepage'
import Menu from './pages/menu/menu'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Events from './pages/events/events'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
