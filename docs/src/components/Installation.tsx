import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const installCommand = "curl -sSL https://github.com/itsparser/scaf/raw/main/install.sh | bash"

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
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Install Scaf</CardTitle>
          </CardHeader>
          <CardContent>
              <div key={"index"} className="mb-4">
                <p className="font-semibold mb-2">
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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}