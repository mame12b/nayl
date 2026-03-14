export default function AboutPage() {
  return (
    <main className="py-24 max-w-5xl mx-auto px-6">

      <h1 className="text-4xl font-bold text-center">
        About Nayl Trading
      </h1>

      <p className="mt-6 text-gray-600 text-center">
        Nayl Trading is an international trading company based in Dubai,
        specializing in import and export operations, technology supply,
        and innovative business solutions.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg">
            Global Trade
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            We connect African and Middle Eastern markets through reliable
            sourcing and international logistics partnerships.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg">
            Technology Supply
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Supplying modern technology equipment and digital infrastructure
            for businesses worldwide.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg">
            Innovation
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Developing software solutions and operational systems for
            modern businesses.
          </p>
        </div>

      </div>

    </main>
  )
}