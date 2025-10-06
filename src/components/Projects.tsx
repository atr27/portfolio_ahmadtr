import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { ExternalLink, Github, Smartphone, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import Project1 from '@/assets/Project1.JPG'
import Project2 from '@/assets/Project2.JPG'
import Project3 from '@/assets/Project3.JPG'

const projects = [
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

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [previewProject, setPreviewProject] = useState<typeof projects[0] | null>(null)
  const [iframeError, setIframeError] = useState(false)

  // Detect iframe loading issues (CSP violations don't trigger onError)
  useEffect(() => {
    if (previewProject) {
      setIframeError(false)
      // Set a timeout to show fallback if iframe doesn't load
      const timer = setTimeout(() => {
        setIframeError(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [previewProject])

  return (
    <>
      {/* Live Preview Dialog */}
      <Dialog open={!!previewProject} onOpenChange={() => { setPreviewProject(null); setIframeError(false); }}>
        <DialogContent 
          className="max-w-7xl w-[95vw] h-[90vh] p-0 border-2 border-purple-500/30 bg-background/95 backdrop-blur-xl overflow-hidden flex flex-col"
          style={{ 
            animation: 'none',
            transition: 'none'
          }}
        >
          <DialogTitle className="sr-only">
            {previewProject?.title} - Live Preview
          </DialogTitle>
          <DialogDescription className="sr-only">
            Live preview of {previewProject?.title}. {iframeError ? 'Preview unavailable due to security restrictions. Use the button to open in a new tab.' : 'Interactive preview of the project.'}
          </DialogDescription>
          {previewProject && (
            <>
              <div className="flex-1 flex flex-col overflow-hidden p-4 gap-4">
                {/* Live Preview Frame - Takes most space */}
                <div className="relative flex-1 min-h-0">
                  <div className={cn(
                    'absolute -inset-1 rounded-xl blur-lg opacity-30 transition-opacity',
                    `bg-gradient-to-r ${previewProject.gradient}`
                  )}></div>
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-purple-500/20 bg-muted shadow-2xl">
                    {iframeError ? (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 text-center">
                        <div className={cn(
                          'w-20 h-20 rounded-full flex items-center justify-center',
                          `bg-gradient-to-br ${previewProject.gradient}`
                        )}>
                          <ExternalLink className="w-10 h-10 text-white" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold">Preview Not Available</h3>
                          <p className="text-muted-foreground max-w-md">
                            This site cannot be displayed in an iframe due to security restrictions. 
                            Please click the button below to open it in a new tab.
                          </p>
                        </div>
                        <Button
                          asChild
                          size="lg"
                          className={cn(
                            'shadow-lg hover:shadow-xl transition-all',
                            `bg-gradient-to-r ${previewProject.gradient} hover:opacity-90 text-white border-0`
                          )}
                        >
                          <a href={previewProject.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Open Live Site
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <iframe
                        src={previewProject.liveDemo}
                        className="w-full h-full"
                        title={`${previewProject.title} Preview`}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        loading="eager"
                        onLoad={() => setIframeError(false)}
                      />
                    )}
                  </div>
                  {!iframeError && (
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full text-xs text-white flex items-center gap-2 shadow-lg z-10">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Live Preview
                    </div>
                  )}
                </div>

                {/* Bottom Section - Compact */}
                <div className="flex-shrink-0 space-y-3">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <div className={cn(
                        'w-1 h-4 rounded-full',
                        `bg-gradient-to-b ${previewProject.gradient}`
                      )}></div>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {previewProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className={cn(
                            'text-xs px-3 py-1',
                            `bg-gradient-to-r ${previewProject.gradient} text-white border-0 shadow-lg`
                          )}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        'flex-1 shadow-lg hover:shadow-xl transition-all',
                        `bg-gradient-to-r ${previewProject.gradient} hover:opacity-90 text-white border-0`
                      )}
                    >
                      <a href={previewProject.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Live Site
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 border-2 border-purple-500/30 hover:bg-purple-500/10 transition-all"
                    >
                      <a href={previewProject.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
        
        {/* Horizontal Card Layout */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => renderProject(project, index))}
        </div>
      </div>
    </section>
    </>
  )

  function renderProject(project: typeof projects[0], index: number) {
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
          
          {/* Quick Action Buttons - Show on hover */}
          <div className={cn(
            'absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 transition-all duration-500 z-20',
            hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'translate-y-4'
          )}>
            <Button 
              size="sm"
              onClick={() => setPreviewProject(project)}
              className={cn(
                'flex-1 bg-gradient-to-r text-white border-0 shadow-lg transition-all duration-300',
                `${project.gradient}`,
                'hover:scale-105'
              )}
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
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
                  'flex-1 transition-all duration-300',
                  `bg-gradient-to-r ${project.gradient}`,
                  'text-white border-0 shadow-lg hover:shadow-xl hover:scale-105'
                )}
              >
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
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
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }
}