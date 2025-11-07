export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-gray-900">Minat & Hobi</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-gray-900">Anime & Musik</h3>
            <p className="mt-2 text-sm text-gray-600">
              Anime favorit: K-ON! • Musik: lagu Jepang, piano klasik, dan sedikit lagu Barat.
            </p>
            <ul className="mt-3 list-inside list-disc text-sm text-gray-600">
              <li>Kira Kira Days (Cut Ver.) – HO-KAGO TEA TIME</li>
              <li>166 - Suzuya Homerarete Nobiru Type Nandesu. – saradisk</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-gray-900">Gaming</h3>
            <p className="mt-2 text-sm text-gray-600">Osu! (standard & mania)</p>
            <ul className="mt-3 list-inside list-disc text-sm text-gray-600">
              <li>Ranked Score: 206 juta+</li>
              <li>Hit Accuracy: 95%</li>
              <li>Total Play Count: 3.000+</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
