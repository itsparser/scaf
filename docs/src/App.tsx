import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Installation from "@/components/Installation"
import Usage from "@/components/Usage"
import Footer from "@/components/Footer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Features />
          <Installation />
          <Usage />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App