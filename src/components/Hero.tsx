import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Mail } from 'lucide-react'

const roles = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'React Specialist',
  'Node.js Developer',
  'Laravel Developer',
  'Golang Developer',
  'Flutter Developer',
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const speed = isDeleting ? 50 : 100

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentRole, displayText, isDeleting])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh animate-gradient opacity-50"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-cyber rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-neon rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient text-glow-cyan">
                Ahmad Taufik R
              </span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold h-10">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            I craft beautiful, functional web experiences that solve real problems and 
            delight users with modern technologies and creative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          
          <div className="pt-8">
            <ArrowDown className="mx-auto h-6 w-6 text-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}