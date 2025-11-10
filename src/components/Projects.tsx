import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'
import Project1 from '@/assets/Project1.JPG'
import Project2 from '@/assets/Project2.JPG'
import Project3 from '@/assets/Project3.JPG'
import Project4 from '@/assets/Project4.png'
import Project5 from '@/assets/Project5.png'
import Project6 from '@/assets/Project6.png'

const nextJsProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, React, and Neon Database, featuring real-time cart updates, secure payment processing with Xendit integration.',
    image: Project1,
    technologies: ['React', 'Next.js', 'Neon', 'Xendit'],
    liveDemo: 'https://ecommerce-ahmadtr.vercel.app/',
    sourceCode: 'https://github.com/atr27/ecommerce-ahmadtr.git',
    icon: Smartphone,
    gradient: 'from-cyan-400 to-blue-500',
    glowColor: 'glow-cyan'
  },
  {
    id: 2,
    title: 'Point Of Sale Platform',
    description: 'A full-stack cashier application built with Next.js, powered by Neon Database for real-time data management and seamless transaction processing.',
    image: Project2,
    technologies: ['React', 'Next.js', 'Neon', 'Xendit'],
    liveDemo: 'https://tokoku-ahmadtr.vercel.app/',
    sourceCode: 'https://github.com/atr27/tokoku-ahmadtr.git',
    icon: Smartphone,
    gradient: 'from-purple-400 to-pink-500',
    glowColor: 'glow-purple'
  },
  {
    id: 3,
    title: 'Ticket Booking Platform',
    description: 'A full-stack bus ticket booking platform built with Next.js, React, and Neon Database, featuring seat selection, payment integration with Xendit, and booking management.',
    image: Project3,
    technologies: ['React', 'Next.js', 'Neon', 'Xendit'],
    liveDemo: 'https://ticket-bus-ahmadtr.vercel.app/',
    sourceCode: 'https://github.com/atr27/ticket-bus-ahmadtr.git',
    icon: Smartphone,
    gradient: 'from-orange-400 to-pink-500',
    glowColor: 'glow-orange'
  }
]

const laravelProjects = [
  {
    id: 4,
    title: 'POS Inventory Management',
    description: 'A full-stack cashier application built with Laravel, powered by MySQL Database for real-time data management and seamless transaction processing.',
    image: Project4,
    technologies: ['Laravel', 'JQuery', 'TailwindCSS', 'MySQL'],
    liveDemo: 'https://pos-inventory.ahmadtaufikramdani.my.id/',
    icon: Smartphone,
    gradient: 'from-green-400 to-blue-500',
    glowColor: 'glow-green'
  },
  {
    id: 5,
    title: 'Exam CPNS',
    description: 'A comprehensive civil service exam preparation platform built with Laravel, featuring practice tests, score tracking, and real-time performance analytics powered by MySQL Database.',
    image: Project5,
    technologies: ['Laravel', 'JQuery', 'TailwindCSS', 'MySQL'],
    liveDemo: 'http://cpns-exam.ahmadtaufikramdani.my.id/',
    icon: Smartphone,
    gradient: 'from-yellow-400 to-orange-500',
    glowColor: 'glow-yellow'
  },
  {
    id: 6,
    title: 'Desa Digital',
    description: 'A digital village management system built with Laravel, React, and Inertia.js, providing comprehensive solutions for village administration, citizen services, and community engagement.',
    image: Project6,
    technologies: ['Laravel', 'React', 'Inertia','MySQL','TailwindCSS'],
    liveDemo: 'http://desa-digital.ahmadtaufikramdani.my.id/',
    icon: Smartphone,
    gradient: 'from-red-400 to-purple-500',
    glowColor: 'glow-red'
  }
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Laravel Projects Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-400/10 to-purple-500/10 border border-red-400/20">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-purple-500 animate-pulse"></div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
                Laravel Stack
              </h3>
              <Badge variant="secondary" className="bg-red-400/20 text-red-400 border-red-400/30">
                {laravelProjects.length}
              </Badge>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          </div>
          <div className="space-y-8">
            {laravelProjects.map((project, index) => renderProject(project, index))}
          </div>
        </div>

        {/* Next.js Projects Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Next.js Stack
              </h3>
              <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30">
                {nextJsProjects.length}
              </Badge>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          <div className="space-y-8">
            {nextJsProjects.map((project, index) => renderProject(project, index))}
          </div>
        </div>
      </div>
    </section>
  )

  function renderProject(project: typeof nextJsProjects[0] | typeof laravelProjects[0], index: number) {
    const Icon = project.icon
    const isEven = index % 2 === 0
    
    return (
      <Card
        key={project.id}
        className={cn(
          'group cursor-pointer border-2 border-transparent transition-all duration-500 overflow-hidden',
          'hover:shadow-2xl hover:scale-[1.02] animate-in slide-in-from-bottom',
          `animation-delay-${index * 200}`,
          hoveredProject === project.id && project.glowColor,
          'flex flex-col lg:flex-row'
        )}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Image Section - Alternates left/right on desktop */}
        <div className={cn(
          'relative overflow-hidden lg:w-2/5 h-64 lg:h-auto',
          !isEven && 'lg:order-2'
        )}>
          {/* Gradient overlay on hover */}
          <div className={cn(
            'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 z-10',
            `bg-gradient-to-br ${project.gradient}`,
            hoveredProject === project.id ? 'opacity-20' : ''
          )}></div>
          
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300/0f172a/ffffff?text=Project';
            }}
          />
          
          {/* Animated icon badge */}
          <div className={cn(
            'absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-all duration-500 shadow-xl',
            `bg-gradient-to-br ${project.gradient}`,
            hoveredProject === project.id ? 'scale-110 rotate-6' : ''
          )}>
            <Icon className="h-8 w-8" />
          </div>
          
        </div>
        
        {/* Content Section */}
        <div className={cn(
          'flex flex-col flex-1 lg:w-3/5',
          !isEven && 'lg:order-1'
        )}>
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <CardTitle className={cn(
                'text-2xl lg:text-3xl transition-all duration-300',
                hoveredProject === project.id && `bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`
              )}>
                {project.title}
              </CardTitle>
              
              {/* Project Number Badge */}
              <div className={cn(
                'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                `bg-gradient-to-br ${project.gradient}`,
                'text-white shadow-lg',
                hoveredProject === project.id && 'scale-110 rotate-12'
              )}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 flex-1 flex flex-col">
            <p className="text-muted-foreground leading-relaxed text-base">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className={cn(
                      'text-sm px-4 py-1.5 transition-all duration-300 hover:scale-110',
                      hoveredProject === project.id && `bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`
                    )}
                    style={{ 
                      transitionDelay: hoveredProject === project.id ? `${techIndex * 50}ms` : '0ms' 
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto pt-4">
              <Button 
                asChild
                className={cn(
                  'transition-all duration-300',
                  `bg-gradient-to-r ${project.gradient}`,
                  'text-white border-0 shadow-lg hover:shadow-xl hover:scale-105',
                  'sourceCode' in project ? 'flex-1' : 'w-full'
                )}
              >
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              {'sourceCode' in project && (
                <Button 
                  asChild
                  variant="outline"
                  className="flex-1 border-2 hover:scale-105 transition-all duration-300"
                >
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }
}