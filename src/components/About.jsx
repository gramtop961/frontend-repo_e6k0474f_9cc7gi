export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900">Profil Singkat</h2>
          <p className="mt-2 text-gray-600">Cara kerja, filosofi, dan kepribadian.</p>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-700 leading-7">
          <p>
            Saya membangun fondasi teknologi melalui praktik nyata. Terbiasa men-setup server, mengelola database, dan mengembangkan aplikasi web secara end-to-end dengan fokus pada kebersihan kode, efisiensi logika, dan keamanan endpoint.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border p-4">
              <p className="font-semibold text-gray-900">Gaya Kerja</p>
              <p className="text-sm text-gray-600">Analitis, mandiri, eksploratif, tekun dari sisi logika hingga keamanan.</p>
            </li>
            <li className="rounded-lg border p-4">
              <p className="font-semibold text-gray-900">Filosofi</p>
              <p className="text-sm text-gray-600">Learning by Doing — memahami teknologi sampai ke akarnya.</p>
            </li>
            <li className="rounded-lg border p-4">
              <p className="font-semibold text-gray-900">Minat</p>
              <p className="text-sm text-gray-600">Web Dev, Cybersecurity, AI & Computer Vision.</p>
            </li>
            <li className="rounded-lg border p-4">
              <p className="font-semibold text-gray-900">Tools</p>
              <p className="text-sm text-gray-600">React, TypeScript, Tailwind, Spring Boot, Django, Laravel, PostgreSQL, Railway, Ubuntu Server.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
