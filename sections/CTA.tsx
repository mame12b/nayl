import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20 text-center px-6">

      <h2 className="text-3xl font-bold">
        Ready to work with Nayl Trading?
      </h2>

      <p className="mt-4 text-blue-100">
        Contact us today to discuss global trade,
        technology supply, or laundry solutions.
      </p>

      <Link
        href="/contact"
        className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>

    </section>
  )
}