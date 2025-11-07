export default function Experience() {
  const items = [
    {
      title: 'Kos-App (P2MW - Bisnis Digital)',
      desc:
        'Aplikasi manajemen kos berbasis web. Fokus pada modularitas, keamanan, dan efisiensi logika dari front-end hingga back-end.',
      stack:
        'React, TypeScript, Tailwind, Django/Laravel API, PostgreSQL, Deployment di Railway/Ubuntu',
    },
    {
      title: 'Padud Jaya — Laporan Sales Keuangan & Laporan Harian Produksi',
      desc:
        'Dua website internal perusahaan untuk monitoring finansial dan produksi, berjalan di server asli yang dikelola langsung.',
      stack: 'Laravel + Inertia, PostgreSQL, Ubuntu Server, SSH & Nginx',
    },
    {
      title: 'AI Deteksi Sampah (Computer Vision)',
      desc:
        'Integrasi backend Python + Django dengan model deteksi gambar, uji real-time via kamera/gambar, database PostgreSQL.',
      stack: 'Python, Django, CV Model (custom), PostgreSQL',
    },
  ]

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Proyek Pilihan</h2>
            <p className="mt-1 text-gray-600">Beberapa karya yang pernah saya bangun dan kelola.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              <p className="mt-3 text-xs text-gray-500">Stack: {item.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
