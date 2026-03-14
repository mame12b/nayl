export default function ProductsPage() {
  const products = [
    {
      title: "Electronics",
      description:
        "Supply of electronic devices and consumer electronics for global markets.",
    },
    {
      title: "IT Equipment",
      description:
        "Computers, networking equipment, and enterprise IT infrastructure.",
    },
    {
      title: "Industrial Materials",
      description:
        "Industrial raw materials and machinery components for manufacturing.",
    },
    {
      title: "Technology Hardware",
      description:
        "Modern technology equipment and digital infrastructure materials.",
    },
    {
      title: "Software Solutions",
      description:
        "Custom web applications and enterprise software development.",
    },
    {
      title: "Laundry Equipment",
      description:
        "Commercial laundry machines and automation systems for laundry businesses.",
    },
  ]

  return (
    <main className="py-24 max-w-6xl mx-auto px-6">

      <h1 className="text-4xl font-bold text-center">
        Our Products
      </h1>

      <p className="mt-4 text-gray-600 text-center">
        Nayl Trading supplies a wide range of products across global markets.
      </p>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">
              {product.title}
            </h3>

            <p className="mt-3 text-gray-500 text-sm">
              {product.description}
            </p>
          </div>
        ))}
      </div>

    </main>
  )
}