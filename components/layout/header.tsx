import Link from "next/link"
import { Home, MapPin } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <span className="text-lg">東京</span> Guide
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1 text-sm">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link href="/explore" className="flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Explore</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

