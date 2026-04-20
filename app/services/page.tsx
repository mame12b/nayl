export default function ServicesPage() {
  return (
    <main className="py-24 max-w-6xl mx-auto px-6">

      <h1 className="text-4xl font-bold text-center">
        Our Services
      </h1>

      <p className="mt-4 text-gray-600 text-center">
        Nayl Trading provides global trading, technology supply,
        software development, and laundry business solutions.
      </p>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Global Import & Export</h3>
          <p className="text-sm text-gray-500 mt-2">
            International trade operations connecting Africa, the Middle East,
            and global markets.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Technology Materials</h3>
          <p className="text-sm text-gray-500 mt-2">
            Supply of IT equipment and digital infrastructure materials.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Software Solutions</h3>
          <p className="text-sm text-gray-500 mt-2">
            Custom web systems, automation platforms, and enterprise software.
          </p>
        </div>

    

      </div>

    </main>
  )
}