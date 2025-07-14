import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
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
    color: 'text-blue-600'
  },
  {
    title: 'Programming Languages', 
    icon: Code,
    progress: 90,
    skills: ['TypeScript', 'PHP', 'Java', 'Python'],
    color: 'text-green-600'
  },
  {
    title: 'Backend Development',
    icon: Server,
    progress: 88,
    skills: ['Node.js', 'Laravel', 'Golang', 'Spring', 'Django', 'NestJS'],
    color: 'text-purple-600'
  },
  {
    title: 'Database Management',
    icon: Database,
    progress: 85,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'text-orange-600'
  },
  {
    title: 'UI/UX & Styling',
    icon: Palette,
    progress: 82,
    skills: ['Tailwind CSS', 'Bootstrap', 'Figma'],
    color: 'text-pink-600'
  },
  {
    title: 'API & Integration',
    icon: GitBranch,
    progress: 80,
    skills: ['GraphQL', 'REST API', 'Websocket', 'gRPC'],
    color: 'text-teal-600'
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card 
                key={category.title}
                className={`border-2 hover:border-teal-600 transition-all duration-300 hover:shadow-lg animate-in slide-in-from-bottom animation-delay-${index * 100}`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className="text-sm text-muted-foreground">{category.progress}%</span>
                    </div>
                    <Progress 
                      value={category.progress} 
                      className="h-2"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-xs"
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