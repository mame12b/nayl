export default function ContactPage() {
  return (
    <main className="py-20 px-6 md:px-10">

      <div className="max-w-2xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-600">
          Get in touch with Nayl Trading for global trade,
          technology supply, or laundry solutions.
        </p>

      </div>

      {/* Contact Form */}
      <div className="mt-10 max-w-2xl mx-auto">

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  )
}