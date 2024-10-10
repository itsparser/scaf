import { useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export default function Header() {
  const { setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Scaf</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#installation" className="hover:text-primary">Installation</a></li>
            <li><a href="#usage" className="hover:text-primary">Usage</a></li>
            <li>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}