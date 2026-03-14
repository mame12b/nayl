export default function TradeNetwork() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Global Trade Network
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Nayl Trading connects Africa, the Middle East, and international
          markets through trusted sourcing and logistics partnerships.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg">
              Africa
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Import and export partnerships across East and West Africa.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg">
              Middle East
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Dubai logistics hub connecting global supply chains.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-lg">
              Global Markets
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Technology sourcing and international trade operations.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}