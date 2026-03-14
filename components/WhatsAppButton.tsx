"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {

  const phoneNumber = "971502975589"
  const message = "Hello, I want to inquire about Nayl Trading services."

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
     className="fixed bottom-5 right-5 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}