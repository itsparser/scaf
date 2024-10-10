import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MultiSelect } from "@/components/ui/multi-select"

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "flask", label: "Flask" },
]

const runtimes = [
  { value: "bun", label: "Bun" },
  { value: "deno", label: "Deno" },
]

const bundlers = [
  { value: "vite", label: "Vite" },
  { value: "swc", label: "SWC" },
  { value: "pip", label: "Pip" },
  { value: "uv", label: "Uv" },
  { value: "poetry", label: "Poetry" },
]

const libraryOptions = [
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "shadcn", label: "shadcn/ui" },
]

const preCommitOptions = [
  { value: "lint", label: "Lint" },
  { value: "passleak", label: "Passleak" },
  { value: "prettier", label: "Prettier" },
]

export default function Usage() {
  const [framework, setFramework] = useState("")
  const [runtime, setRuntime] = useState("")
  const [bundler, setBundler] = useState("")
  const [libraries, setLibraries] = useState<string[]>([])
  const [preCommitHooks, setPreCommitHooks] = useState<string[]>([])

  const generateCommand = () => {
    let command = `scaf ${framework}`
    if (runtime) command += ` --runtime ${runtime}`
    if (bundler) command += ` --bundler ${bundler}`
    if (libraries.length > 0) command += ` --libraries ${libraries.join(",")}`
    if (preCommitHooks.length > 0) command += ` --pre-commit-hooks ${preCommitHooks.join(",")}`
    return command
  }

  return (
    <section id="usage" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Usage</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Command Builder</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Select onValueChange={(value) => setFramework(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => setRuntime(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a runtime" />
                </SelectTrigger>
                <SelectContent>
                  {runtimes.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => setBundler(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a bundler" />
                </SelectTrigger>
                <SelectContent>
                  {bundlers.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

                          <MultiSelect
        options={libraryOptions}
        onValueChange={setLibraries}
        defaultValue={libraries}
        placeholder="Select libraries"
      />


<MultiSelect
        options={preCommitOptions}
        onValueChange={setPreCommitHooks}
        defaultValue={preCommitHooks}
        placeholder="lect pre-commit hook"
      />
              <div className="bg-secondary/30 p-4 rounded-md">
                <p className="font-mono text-sm break-all">{generateCommand()}</p>
              </div>

              <Button 
                className="w-full" 
                onClick={() => navigator.clipboard.writeText(generateCommand())}
              >
                Copy Command
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}