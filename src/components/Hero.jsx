import { Github, Mail, ShieldCheck, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur">
              <ShieldCheck className="mr-1 h-4 w-4" /> Secure-by-Design Mindset
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Fajar Geran Arifin
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Mahasiswa Teknik Informatika • Web Developer • Cybersecurity Enthusiast • AI Explorer
            </p>
            <p className="mt-6 max-w-prose text-gray-700">
              “Learning by Doing — memahami teknologi sampai ke akarnya.” Saya membangun sistem dari nol: dari server, database, hingga aplikasi web yang aman, rapi, dan dapat di-scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Code2 className="mr-2 h-5 w-5" /> Lihat Proyek
              </a>
              <a
                href="mailto:fajar@example.com"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                <Mail className="mr-2 h-5 w-5" /> Kontak
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl sm:h-80 sm:w-80">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <span className="text-6xl">🧑‍💻</span>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-36 w-36 rounded-2xl bg-indigo-100 blur-2xl md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
