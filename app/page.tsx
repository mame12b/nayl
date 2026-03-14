import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Trading from "@/sections/Trading"
import Technology from "@/sections/Technology"
import Laundry from "@/sections/Laundry"
import GlobalMarkets from "@/sections/GlobalMarkets"
import CTA from "@/sections/CTA"


export default function Home() {
  return (
    <main>

      <Hero />

      <Services />

      <GlobalMarkets />
      

      <Trading />

      <Technology />

      <Laundry />

      <CTA />

    </main>
  )
}