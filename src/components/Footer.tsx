import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© 2025 Ahmad Taufik R. All rights reserved.</span>
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>React & Tailwind CSS.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}