import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight">Fajar G. Arifin</a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#about" className="hover:text-gray-900">Tentang</a>
            <a href="#projects" className="hover:text-gray-900">Proyek</a>
            <a href="#skills" className="hover:text-gray-900">Keahlian</a>
            <a href="#hobbies" className="hover:text-gray-900">Hobi</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Hobbies />
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Fajar Geran Arifin — Membangun sistem yang fungsional, aman, dan efisien.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
