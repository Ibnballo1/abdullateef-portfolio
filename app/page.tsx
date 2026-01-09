import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
