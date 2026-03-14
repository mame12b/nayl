import { Globe, Cpu, Code, WashingMachine } from "lucide-react"

const services = [
  {
    title: "Global Import & Export",
    description:
      "Reliable sourcing and international trade operations connecting Africa, the Middle East, and global markets.",
    icon: Globe,
  },
  {
    title: "Technology Materials",
    description:
      "Supply of high-quality technology hardware and digital infrastructure materials for modern businesses.",
    icon: Cpu,
  },
  {
    title: "Software Solutions",
    description:
      "Custom web systems, business automation platforms, and enterprise software development.",
    icon: Code,
  },
  {
    title: "Laundry Systems Dubai",
    description:
      "Smart laundry business solutions including setup consultation, automation, and operational systems.",
    icon: WashingMachine,
  },
]

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nayl Trading provides global trading, technology supply, software
            development, and innovative laundry solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="mb-4 text-blue-600">
                  <Icon size={40} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}