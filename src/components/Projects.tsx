import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, React, and Supabase, featuring real-time cart updates, secure payment processing.',
    image: 'https://i.postimg.cc/8swz9TvS/project1.png',
    technologies: ['React', 'Next.js', 'Supabase', 'Xendit'],
    liveDemo: 'https://ecommerce-ahmadtaufikr.vercel.app/',
    sourceCode: 'https://github.com/atr27/ecommerce_ahmadtr.git',
    icon: Smartphone,
    color: 'bg-blue-500'
  },
  {
    id: 1,
    title: 'Point Of Sale Platform',
    description: 'A full-stack cashier built with React, Chakra UI and Supabase.',
    image: 'https://i.postimg.cc/RqTqVHBt/Project2.png',
    technologies: ['React', 'Chakra UI', 'Supabase'],
    liveDemo: 'https://cashier-ahmadtr.vercel.app/',
    sourceCode: 'https://github.com/atr27/cashier-ahmadtr.git',
    icon: Smartphone,
    color: 'bg-blue-500'
  }
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>
        
        {/* Center single project when there's only one */}
        {projects.length === 1 ? (
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {renderProject(projects[0], 0)}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => renderProject(project, index))}
          </div>
        )}
      </div>
    </section>
  )

  function renderProject(project: typeof projects[0], index: number) {
    const Icon = project.icon
    return (
      <Card
        key={project.id}
        className={cn(
          'group cursor-pointer border-2 hover:border-teal-600 transition-all duration-300 overflow-hidden',
          'hover:shadow-xl hover:-translate-y-2 animate-in slide-in-from-bottom',
          `animation-delay-${index * 200}`
        )}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="relative overflow-hidden">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300/0f172a/ffffff?text=E-Commerce+Platform';
            }}
          />
          <div className={cn(
            'absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300',
            project.color,
            hoveredProject === project.id ? 'scale-110' : ''
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <div className={cn(
            'absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 flex items-center justify-center space-x-4',
            hoveredProject === project.id ? 'opacity-100' : ''
          )}>
            <Button size="sm" variant="secondary" asChild>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button size="sm" variant="secondary" asChild>
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-teal-600 transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
}