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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hello, I'm{' '}
              <span className="text-teal-600 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Ahmad Taufik R
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            I craft beautiful, functional web experiences that solve real problems and 
            delight users with modern technologies and creative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="border-2 px-8"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
          
          <div className="pt-8">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}