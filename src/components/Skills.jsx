import { Shield, Database, Server, Cpu, Box, GitBranch, Terminal } from 'lucide-react'

export default function Skills() {
  const skills = [
    { icon: <Box className="h-5 w-5" />, title: 'Frontend', items: ['React', 'TypeScript (TSX)', 'Tailwind CSS'] },
    { icon: <Server className="h-5 w-5" />, title: 'Backend', items: ['Spring Boot', 'Django', 'Laravel (Inertia, Breeze)'] },
    { icon: <Database className="h-5 w-5" />, title: 'Database', items: ['PostgreSQL', 'Railway', 'Ubuntu Server'] },
    { icon: <Shield className="h-5 w-5" />, title: 'Cybersecurity', items: ['Metasploit', 'SQL Injection', 'Frida, Objection', 'Reverse Engineering APK'] },
    { icon: <Cpu className="h-5 w-5" />, title: 'AI & CV', items: ['Python', 'Django', 'Model Deteksi Gambar', 'Realtime Camera Test'] },
    { icon: <GitBranch className="h-5 w-5" />, title: 'DevOps', items: ['Ngrok', 'Railway', 'GitHub SSH', 'Ubuntu Server'] },
    { icon: <Terminal className="h-5 w-5" />, title: 'OS & Lab', items: ['Kali Linux', 'Ubuntu', 'WSL']} ,
  ]

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">Keahlian</h2>
      <p className="mt-1 text-gray-600">Fondasi kuat dari pengalaman langsung.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.title} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600">
              {s.icon}
              <p className="font-semibold">{s.title}</p>
            </div>
            <ul className="mt-3 list-inside list-disc text-sm text-gray-600">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
