import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const installSteps = [
  { step: 1, command: "git clone https://github.com/itsparser/scaf" },
  // { step: 2, command: "cd scaf" },
  // { step: 3, command: "cargo build --release" },
  // { step: 4, command: "./target/release/scaf" }
]
const installCommand = "git clone https://github.com/itsparser/scaf"

export default function Installation() {
  const [copiedIndex, setCopiedIndex] = useState<boolean>(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(true)
    setTimeout(() => setCopiedIndex(false), 2000)
  }

  return (
    <section id="installation" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Installation</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Install Scaf</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <p className="mb-4">Follow these steps to install Scaf on your system:</p> */}
            {/* {installSteps.map((step, index) => ( */}
              <div key={"index"} className="mb-4">
                <p className="font-semibold mb-2"> 
                  {/* {step.step}. {index === 0 ? "Clone the repository:" : index === 1 ? "Navigate to the project directory:" : index === 2 ? "Build the project with Cargo:" : "Run the executable:"} */}
                </p>
                <div className="flex items-center bg-secondary p-2 rounded">
                  <code className="flex-grow">{installCommand}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(installCommand)}
                  >
                    {copiedIndex ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
            {/* ))} */}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}