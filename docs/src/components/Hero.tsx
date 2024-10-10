import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/20 to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Scaf - Code Scaffolding CLI Tool
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          An extremely fast and simple code scaffolding tool for various frameworks and libraries.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <a href="#installation">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/itsparser/scaf" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  )
}