import { Zap, Box, Cpu, Package, Check, Folder } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Box className="h-8 w-8 mb-2" />,
    title: "Multiple Frameworks",
    description: "Scaffold new projects for popular frameworks: React, Vue, and Flask."
  },
  {
    icon: <Cpu className="h-8 w-8 mb-2" />,
    title: "Runtime Options",
    description: "Choose the runtime: Bun or Deno."
  },
  {
    icon: <Package className="h-8 w-8 mb-2" />,
    title: "Customizable Libraries",
    description: "Specify additional libraries to include in your project."
  },
  {
    icon: <Zap className="h-8 w-8 mb-2" />,
    title: "Various Bundlers",
    description: "Use different bundlers such as Vite, SWC, Pip, Uv, and Poetry."
  },
  {
    icon: <Check className="h-8 w-8 mb-2" />,
    title: "Pre-commit Hooks",
    description: "Set up pre-commit hooks to maintain code quality."
  },
  {
    icon: <Folder className="h-8 w-8 mb-2" />,
    title: "Custom Output",
    description: "Optionally specify the folder where the project should be created."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}