import { Heart, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-purple-500/20 py-12 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <Sparkles className="h-5 w-5 text-purple-400 animate-pulse-glow" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          
          <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              © 2025 Ahmad Taufik R.
            </span>
            <span>All rights reserved.</span>
          </p>
          
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-pink-500 fill-current animate-pulse" />
            <span>using</span>
            <span className="font-semibold text-cyan-400">React</span>
            <span>&</span>
            <span className="font-semibold text-purple-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}