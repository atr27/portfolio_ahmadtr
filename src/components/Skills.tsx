import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  GitBranch 
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    progress: 85,
    skills: ['React', 'Vue', 'Flutter'],
    gradient: 'from-cyan-400 to-blue-500',
    glowColor: 'glow-cyan'
  },
  {
    title: 'Programming Languages', 
    icon: Code,
    progress: 90,
    skills: ['TypeScript', 'PHP', 'Java', 'Python'],
    gradient: 'from-green-400 to-emerald-500',
    glowColor: 'glow-cyan'
  },
  {
    title: 'Backend Development',
    icon: Server,
    progress: 88,
    skills: ['Node.js', 'Laravel', 'Golang', 'Spring', 'Django', 'NestJS'],
    gradient: 'from-purple-400 to-pink-500',
    glowColor: 'glow-purple'
  },
  {
    title: 'Database Management',
    icon: Database,
    progress: 85,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-orange-400 to-red-500',
    glowColor: 'glow-orange'
  },
  {
    title: 'UI/UX & Styling',
    icon: Palette,
    progress: 82,
    skills: ['Tailwind CSS', 'Bootstrap', 'Figma'],
    gradient: 'from-pink-400 to-rose-500',
    glowColor: 'glow-pink'
  },
  {
    title: 'API & Integration',
    icon: GitBranch,
    progress: 80,
    skills: ['GraphQL', 'REST API', 'Websocket', 'gRPC'],
    gradient: 'from-cyan-400 to-teal-500',
    glowColor: 'glow-cyan'
  }
]

export function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card 
                key={category.title}
                className={cn(
                  'group border-2 border-transparent hover:border-opacity-50 transition-all duration-500 hover:shadow-2xl animate-in slide-in-from-bottom hover-lift',
                  `animation-delay-${index * 100}`,
                  `hover:${category.glowColor}`
                )}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <div className={cn(
                      'p-3 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                      `bg-gradient-to-br ${category.gradient} shadow-lg`
                    )}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300" 
                          style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className={cn(
                        'text-sm font-bold transition-all duration-300',
                        `group-hover:bg-gradient-to-r group-hover:${category.gradient} group-hover:bg-clip-text group-hover:text-transparent`
                      )}>
                        {category.progress}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          'h-full rounded-full transition-all duration-1000 ease-out',
                          `bg-gradient-to-r ${category.gradient}`,
                          'relative overflow-hidden'
                        )}
                        style={{ width: `${category.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className={cn(
                          'text-xs transition-all duration-300 hover:scale-110',
                          `group-hover:bg-gradient-to-r group-hover:${category.gradient} group-hover:text-white group-hover:border-0`
                        )}
                        style={{ 
                          transitionDelay: `${skillIndex * 50}ms` 
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}